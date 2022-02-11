import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
import { Provider as JotaiProvider } from "jotai";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </JotaiProvider>
  );
}
export default MyApp;
