import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider defaultTheme="system">
        <NavBar />
        <Component {...pageProps} key={router.route} />
        <Footer />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
