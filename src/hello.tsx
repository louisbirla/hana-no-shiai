import * as React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { UsernameEditor } from "./username_editor";

export const Hello: React.FC = () => {
  return (
    <HStack>
      <Text>Hello, </Text>
      <UsernameEditor />
    </HStack>
  );
};
