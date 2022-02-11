import { Box } from "@chakra-ui/react";
import * as React from "react";
import { CardImage } from "../cards";
import { GlobalChat } from "../chat";

export const Game: React.FC = () => {
  // Chats (Game chat, friends chat, global chat)
  return (
    <>
      <CardImage card="Crane" height="100px" />
      <GlobalChat />
    </>
  );
};
