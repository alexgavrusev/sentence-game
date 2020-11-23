import { FC } from "react";
import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import Head from "components/head";

import store from "store";
import theme from "theme";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ReduxProvider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <Head />
      <Component {...pageProps} />
    </ChakraProvider>
  </ReduxProvider>
);

export default App;
