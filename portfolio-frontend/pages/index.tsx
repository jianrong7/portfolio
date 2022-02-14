import type { NextPage } from "next";
import Head from "next/head";

import About from "../components/home/About/About";
import Intro from "../components/home/Intro/Intro";
import Work from "../components/home/Work/Work";
import Contact from "../components/home/Contact/Contact";

import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

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
      </Head>

      <main className={styles.main}>
        <Intro />
        <About />
        <Work />
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home;
