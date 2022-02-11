import Libp2p from "libp2p";
import Websockets from "libp2p-websockets";
import WebRTCStar from "libp2p-webrtc-star";
import { NOISE } from "@chainsafe/libp2p-noise";
import Mplex from "libp2p-mplex";
import Bootstrap from "libp2p-bootstrap";
import { atomWithStorage } from "jotai/utils";
import { atom, useAtom } from "jotai";
import PeerId from "peer-id";
import React from "react";
import crypto from "libp2p-crypto";
import Gossipsub from "libp2p-gossipsub";
import { PeersAtom, Peer, FriendsAtom } from "../pages/friends";
import { useToast } from "@chakra-ui/react";
import { AddGlobalMessageAtom, GlobalChatAtom } from "./chat";

export const PeerIdAtom = atomWithStorage<PeerId | undefined>(
  "peerid",
  undefined
);
export const GLOBAL_TOPIC = "hana-no-shiai/global1";
export const GLOBAL_CHAT_TOPIC = "hana-no-shiai/chat/global1";

export const createLibp2p = async () => {
  const peerId = await getPeerId();
  // Create our libp2p node
  const libp2p = await Libp2p.create({
    peerId,
    addresses: {
      // Add the signaling server address, along with our PeerId to our multiaddrs list
      // libp2p will automatically attempt to dial to the signaling server so that it can
      // receive inbound connections from other peers
      listen: [
        "/dns4/star.birla.io/tcp/443/wss/p2p-webrtc-star",
        // "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star",
        // "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star",
      ],
    },
    modules: {
      transport: [Websockets, WebRTCStar],
      connEncryption: [NOISE],
      streamMuxer: [Mplex],
      peerDiscovery: [Bootstrap],
      pubsub: Gossipsub,
    },
    config: {
      peerDiscovery: {
        // The `tag` property will be searched when creating the instance of your Peer Discovery service.
        // The associated object, will be passed to the service when it is instantiated.
        [Bootstrap.tag]: {
          enabled: true,
          list: [
            "/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
            "/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
            "/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp",
            "/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
            "/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
          ],
        },
      },
      pubsub: {
        enabled: true,
      },
    },
  });

  // window.libp2p = libp2p;

  return libp2p;
};

export const Libp2pProvider: React.FC<{ onLoad: () => void }> = ({
  children,
  onLoad,
}) => {
  const [, setPeerId] = useAtom(PeerIdAtom);
  const [peers, setPeers] = useAtom(PeersAtom);
  const [friends] = useAtom(FriendsAtom);
  const [, addMessage] = useAtom(AddGlobalMessageAtom);
  const toast = useToast();
  React.useEffect(() => {
    createLibp2p().then((p2p) => {
      p2p.start().then(() => {
        // Listen for new peers
        p2p.on("peer:discovery", (peerId) => {
          console.info(`Found peer ${peerId.toB58String()}`);
        });

        // Listen for new connections to peers
        p2p.connectionManager.on("peer:connect", (connection) => {
          const id: string = connection.remotePeer.toB58String();
          console.info(`Connected to ${id}`);

          let peers: { [id: string]: Peer } = {
            [id]: {
              peer_id: connection.remotePeer,
            },
          };
          p2p.connections.forEach((connections) => {
            let id = connections[0].remotePeer;
            console.info(`Updating list`, id.toB58String());
            peers[id.toB58String()] = { peer_id: id };
          });
          setPeers(peers);
          if (friends[id] != undefined) {
            let message = "Your friend is now online";
            if ((friends[id].nickname || "").length > 0) {
              message = `${friends[id].nickname} is now online`;
            }
            toast({
              title: "Friend is online",
              description: message,
              variant: "subtle",
              status: "info",
              position: "bottom-right",
            });
          }
        });

        // Listen for peers disconnecting
        p2p.connectionManager.on("peer:disconnect", (connection) => {
          const id: string = connection.remotePeer.toB58String();
          console.info(`Disconnected from ${id}`);
          let peers: { [id: string]: Peer } = {};
          p2p.connections.forEach((connections) => {
            let id = connections[0].remotePeer;
            console.info(`Updating list`, id.toB58String());
            peers[id.toB58String()] = { peer_id: id };
          });
          setPeers(peers);
          if (friends[id] != undefined) {
            let message = "Your friend is now offline";
            if ((friends[id].nickname || "").length > 0) {
              message = `${friends[id].nickname} is now offline`;
            }
            toast({
              title: "Friend is offline",
              description: message,
              variant: "subtle",
              status: "warning",
              position: "bottom-right",
            });
          }
        });

        p2p.pubsub.subscribe(GLOBAL_TOPIC);
        p2p.pubsub.on(GLOBAL_TOPIC, (msg) => {
          console.log("Node received:", msg.data);
        });

        p2p.pubsub.subscribe(GLOBAL_CHAT_TOPIC);
        p2p.pubsub.on(GLOBAL_CHAT_TOPIC, (msg) => {
          console.log("Global chat:", msg);
          addMessage({
            message: msg.data,
            from: msg.peer,
            time: new Date(),
          });
        });

        setPeerId(p2p.peerId);
        onLoad();
      });
    });
  }, []);
  return <>{children}</>;
};

export const getPeerId = async () => {
  let seed = new Uint8Array(
    (localStorage.getItem(SEED_KEY) || "").split(",").map(parseInt)
  );
  if (seed.length < 10) {
    seed = crypto.randomBytes(32);
    localStorage.setItem(SEED_KEY, seed.toString());
  }
  let key = (await crypto.keys.generateKeyPairFromSeed("Ed25519", seed, 1024))
    .bytes;
  return PeerId.createFromPrivKey(key);
};
const SEED_KEY = "seed";
