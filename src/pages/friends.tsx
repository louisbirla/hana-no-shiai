import {
  Table,
  Tr,
  Td,
  Tbody,
  Heading,
  Thead,
  Container,
  Text,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { atom, useAtom } from "jotai";
import * as React from "react";
import PeerId from "peer-id";
import { atomWithStorage } from "jotai/utils";
import { NicknameEditor } from "../nickname_editor";

export const PeersAtom = atom<{ [id: string]: Peer }>({});

const FriendsRawAtom = atomWithStorage("friends", "{}");
export const FriendsAtom = atom<
  { [id: string]: Friend },
  { [id: string]: Friend }
>(
  (get) => JSON.parse(get(FriendsRawAtom)),
  (get, set, arg) => set(FriendsRawAtom, JSON.stringify(arg))
);

export type Friend = {
  nickname?: string;
  peer_id: string;
};

export type Peer = {
  peer_id: PeerId;
};

export const Friends: React.FC = () => {
  const [peers] = useAtom(PeersAtom);
  const [friends, setFriends] = useAtom(FriendsAtom);
  const render_friends: { [id: string]: Friend & { online: boolean } } = {};
  const friendless_peers: { [id: string]: Peer } = {};
  for (const peer in peers) {
    console.log("Checking peer", peer);
    if (friends[peer] != undefined) {
      console.log("Was a friend");
      render_friends[peer] = {
        ...friends[peer],
        online: true,
      };
    } else {
      console.log("Was not a friend");
      friendless_peers[peer] = { ...peers[peer] };
    }
  }
  console.log("Not friends:", friendless_peers);
  for (const friend in friends) {
    console.log("Friend:", friend);
    if (peers[friend] == undefined) {
      console.log("Is not online:", friend);
      render_friends[friend] = {
        ...friends[friend],
        online: false,
      };
    }
  }
  return (
    <Box p={2} as="main">
      <Heading>Friends</Heading>
      {Object.keys(friends).length > 0 ? (
        <Table>
          <Thead>
            <Tr fontWeight="bold">
              <Td>Online</Td>
              <Td>Nickname</Td>
              <Td>ID</Td>
              <Td>Remove</Td>
            </Tr>
          </Thead>
          <Tbody>
            {Object.values(render_friends).map(
              ({ peer_id: id, online, nickname }) => {
                return (
                  <Tr key={"f" + id}>
                    <Td>
                      {online ? (
                        <Badge colorScheme="green">ONLINE</Badge>
                      ) : (
                        <Badge colorScheme="purple">OFFLINE</Badge>
                      )}
                    </Td>
                    <Td>
                      <NicknameEditor
                        nickname={nickname}
                        setNickname={(name) => {
                          friends[id].nickname = name;
                          setFriends(friends);
                        }}
                      />
                    </Td>
                    <Td>{id}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          let newFriends = { ...friends };
                          delete newFriends[id];
                          setFriends(newFriends);
                        }}
                        size="xs"
                        variant="outline"
                        colorScheme="orange"
                      >
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
      ) : (
        <Text color="gray.400">No friends</Text>
      )}

      <Heading mt={5}>Connections</Heading>
      <Table>
        <Tbody>
          {Object.values(friendless_peers).map((peer) => {
            let id = peer.peer_id.toB58String();
            return (
              <Tr key={"c" + id}>
                <Td>
                  <Button
                    onClick={() => {
                      let newFriends = friends;
                      newFriends[id] = {
                        peer_id: id,
                      };
                      setFriends(newFriends);
                    }}
                    size="xs"
                    variant="outline"
                    colorScheme="green"
                  >
                    Add Friend
                  </Button>
                </Td>
                <Td>{id}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
