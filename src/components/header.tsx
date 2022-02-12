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
import { BasicNextLink } from "./basicNextLink";

export const Header: React.FC = () => {
  return (
    <Flex p={2} justify="space-between" width="100vw" as="header">
      <Logo as="h1" />
      <HStack mr={5} as="nav">
        <ButtonGroup spacing={3} variant="link">
          <BasicNextLink href="/">Home</BasicNextLink>
          <BasicNextLink href="/friends">Friends</BasicNextLink>
        </ButtonGroup>
      </HStack>
    </Flex>
  );
};
