import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
