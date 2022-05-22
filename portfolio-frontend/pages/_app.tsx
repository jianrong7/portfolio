import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import Footer from "../components/shared/Footer/Footer";

import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider defaultTheme="system">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="42JqgY9JufdfzPi39TUgMEw4LcW6QhXvR27AOQxRerI"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <Component {...pageProps} key={router.route} />
        <Footer />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
