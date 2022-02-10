import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/home/Footer/Footer";
import styles from "../styles/Home.module.css";
import About from "../components/home/About/About";
import Intro from "../components/home/Intro/Intro";
import Work from "../components/home/Work/Work";
import Contact from "../components/home/Contact/Contact";

const Home: NextPage = () => {
  const twitter = {
    rest: {
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
        type: "tween",
      },
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <div className={styles.container}>
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

      <Footer />
    </div>
  );
};

export default Home;
