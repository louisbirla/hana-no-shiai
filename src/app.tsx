import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import * as React from "react";
import { Header } from "./header";
import { Libp2pProvider } from "./libp2p";
import { Pages } from "./pages/pages";
import { SelfInfo } from "./self_info";
import theme from "./theme";

export const App: React.FC = () => (
  <JotaiProvider>
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  </JotaiProvider>
);

export const Layout = () => {
  const [showSelfInfo, setShowSelfInfo] = React.useState(false);
  return (
    <>
      <Libp2pProvider
        onLoad={() => {
          setShowSelfInfo(true);
        }}
      >
        <Header />
        <Pages />
        <Flex mt={7} justify="center">
          {showSelfInfo && <SelfInfo />}
        </Flex>
      </Libp2pProvider>
    </>
  );
};
