import { HeadingProps, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Logo: React.FC<HeadingProps> = (props) => (
  <Heading
    fontWeight="black"
    textShadow="-2px 2px 2px #000, 2px 2px 2px #000, 2px -2px 2px #000, -2px -2px 2px #000;"
    {...props}
  >
    <Text as="span" color="hanaRed.100">
      花
    </Text>
    <Text as="span" color="hanaOrange.100">
      の
    </Text>
    <Text as="span" color="hanaPurple.100">
      試
    </Text>
    <Text as="span" color="hanaYellow.100">
      合
    </Text>
  </Heading>
);
