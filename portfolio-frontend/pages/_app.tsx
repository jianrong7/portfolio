import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <NavBar />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
