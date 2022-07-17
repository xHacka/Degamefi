import "@fontsource/nova-square"; // Defaults to weight 400.
import "../components/pixel-splitter/index.css"; // Defaults to weight 400.
import '../styles/styles.css'
import "keen-slider/keen-slider.min.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
