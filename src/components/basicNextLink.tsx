import { Text, Link, TextProps } from "@chakra-ui/react";
import NextLink from "next/link";

export const BasicNextLink: React.FC<{ href: string; props?: TextProps }> = ({
  href,
  children,
  props,
}) => (
  <Link as={NextLink} href={href}>
    <Text
      cursor="pointer"
      _hover={{ textDecoration: "underline" }}
      as="span"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  </Link>
);
