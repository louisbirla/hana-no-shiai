import { useState } from "react";
import { Libp2pProvider } from "./libp2p";
import { Header } from "./header";
import { Flex } from "@chakra-ui/react";
import { SelfInfo } from "./self_info";

export const Layout: React.FC = ({ children }) => {
  const [showSelfInfo, setShowSelfInfo] = useState(false);
  return (
    <>
      <Libp2pProvider
        onLoad={() => {
          setShowSelfInfo(true);
        }}
      >
        <Header />
        {children}
        <Flex mt={7} justify="center">
          {showSelfInfo && <SelfInfo />}
        </Flex>
      </Libp2pProvider>
    </>
  );
};
