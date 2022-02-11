import * as React from "react";
import {
  Flex,
  HStack,
  Button,
  Heading,
  ButtonProps,
  ButtonGroup,
} from "@chakra-ui/react";
import { Logo } from "./logo";
import { useAtom } from "jotai";
import { PageAtom } from "./pages/pages";

export const Header: React.FC = () => {
  const [page, setPage] = useAtom(PageAtom);
  return (
    <Flex p={2} justify="space-between" width="100vw" as="header">
      <HStack>
        <Logo as="h1" />
        <Heading textTransform="capitalize">{page}</Heading>
      </HStack>
      <HStack mr={5} as="nav">
        <ButtonGroup spacing={3} variant="link">
          <Button onClick={() => setPage("game")}>Game</Button>
          <Button onClick={() => setPage("friends")}>Friends</Button>
          <Button onClick={() => setPage("settings")}>Settings</Button>
        </ButtonGroup>
      </HStack>
    </Flex>
  );
};
