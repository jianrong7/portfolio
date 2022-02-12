import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
