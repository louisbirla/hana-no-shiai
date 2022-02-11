import { Heading, Text, Image, Flex } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { CardImage } from "../components/cards";
import { GlobalChat } from "../components/chat";

const Index = () => {
  return (
    <Layout>
      <CardImage card="Crane" height="100px" />
      <GlobalChat />
    </Layout>
  );
};

export default Index;
