import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import Footer from "../components/shared/Footer/Footer";
import { websiteSchema } from "../lib/schema";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider defaultTheme="system">
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="gtag-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
        </Head>
        <Component {...pageProps} key={router.route} />
        <Footer />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
