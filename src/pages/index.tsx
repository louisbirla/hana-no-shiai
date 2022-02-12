import { Layout } from "../components/layout";
import { CardImage } from "../components/cards";
import { GlobalChat } from "../components/chat";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <Layout>
      <CardImage card="Crane" height="100px" />
      <GlobalChat />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  return {};
};

export default Index;
