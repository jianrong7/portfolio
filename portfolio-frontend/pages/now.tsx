import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../components/shared/NavBar/NavBar";

import styles from "../styles/Home.module.css";
import Heading from "../components/shared/Heading/Heading";
import UnderlinedLink from "../components/shared/UnderlinedLink/UnderlinedLink";

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
        <section>
          <Heading level="h1">now</Heading>
          <UnderlinedLink href="https://nownownow.com/about">
            What is a &quot;now&quot; page?
          </UnderlinedLink>
          <ul>
            <li>Coding at 99.co</li>
            <li>Working out at the gym</li>
            <li>Learning in Public</li>
            <li>
              Reading{" "}
              <UnderlinedLink href="https://www.goodreads.com/book/show/84699.Never_Eat_Alone">
                this
              </UnderlinedLink>
            </li>
          </ul>
        </section>
      </main>
    </motion.div>
  );
};

export default Home;
