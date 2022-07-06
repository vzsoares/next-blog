import "../packages/app.css";

import Navbar from "../packages/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
