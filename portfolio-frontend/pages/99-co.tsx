import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/99.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>99.co | Work</title>
        <meta
          name="description"
          content="Loh Jian Rong is a software engineer currently based in Singapore working with React and Express."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Intro />
        <About />
        <Work />
        <Contact /> */}
      </main>
    </div>
  );
};

export default Home;
