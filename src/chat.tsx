import * as React from "react";
import { atom, useAtom } from "jotai";
import { Peer } from "./pages/friends";
import { Text } from "@chakra-ui/react";

export const GlobalChatAtom = atom<Message[]>([]);
export const AddGlobalMessageAtom = atom<Message[], Message>(
  (get) => get(GlobalChatAtom),
  (get, set, message) => set(GlobalChatAtom, [...get(GlobalChatAtom), message])
);
export type Message = {
  from: Peer;
  message: string;
  time: Date;
};

export const GlobalChat: React.FC = () => {
  const [chat, addMessage] = useAtom(AddGlobalMessageAtom);
  return (
    <>
      {chat.map((message) => {
        return <Text>{message.message}</Text>;
      })}
    </>
  );
};
