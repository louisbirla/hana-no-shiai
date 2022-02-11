import React from "react";
import { Divider, Text, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { PeerIdAtom } from "./libp2p";

export const SelfInfo: React.FC = () => {
  const [peerId] = useAtom(PeerIdAtom);
  return (
    <VStack>
      <Divider />
      <Text color="gray.400">{peerId?.toB58String()}</Text>
    </VStack>
  );
};
