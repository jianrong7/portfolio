import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../components/shared/NavBar/NavBar";
import Intro from "../components/home/Intro/Intro";
import About from "../components/home/About/About";
import Experience from "../components/home/Experience/Experience";
import Work from "../components/home/Work/Work";
import Contact from "../components/home/Contact/Contact";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 5 }}
    >
      <Head>
        <title>Loh Jian Rong | Personal Portfolio</title>
        <meta
          name="description"
          content="Loh Jian Rong is a software engineer currently based in Singapore working with React and Express."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://jianrong-portfolio.vercel.app/"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Loh Jian Rong | Personal Portfolio"
        />
        <meta
          property="og:description"
          content="Loh Jian Rong is a software engineer currently based in Singapore working with React and Express."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jrloh7" />
        <meta name="twitter:creator" content="@jrloh7" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        Hello222 Hello again wassup bye
        <Intro />
        Goodbye lol jk hello
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home;
