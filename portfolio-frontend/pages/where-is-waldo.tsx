import type { NextPage } from "next";
import Head from "next/head";

import Heading from "../components/shared/Heading/Heading";
import ProgressBar from "../components/shared/ProgressBar/ProgressBar";
import StickyHeader from "../components/shared/StickyHeader/StickyHeader";

import styles from "../styles/WorkPage.module.css";

const WhereIsWaldo: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Where is Waldo | Work</title>
        <meta
          name="description"
          content="Play the Where is Waldo game online."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://jianrong-portfolio.vercel.app/where-is-waldo"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Where is Waldo | Work" />
        <meta
          property="og:description"
          content="Play the Where is Waldo game online."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jrloh7" />
        <meta name="twitter:creator" content="@jrloh7" />
      </Head>
      <StickyHeader title="Where is Waldo" />
      <main className={styles.main}>
        <div>
          <Heading level="h2">Find Waldo - Desktop Game.</Heading>
        </div>
        <div>
          <Heading level="h3">The Project</Heading>
          <p>
            This project was part of The Odin Project&#39;s curriculum. I built
            out this project using React and hosted the backend on Firebase.
          </p>
        </div>
        <div>
          <Heading level="h3">Technical details</Heading>
          <p>
            The frontend is built using React, while the backend is being hosted
            on Firebase.
          </p>
        </div>
        <div>
          <Heading level="h3">Personal growth</Heading>
          <p>
            This application made me learnt that building out something useful
            is actually not as straightforward as it seems. This gave me an
            inside look on what it is to be a CEO, a CTO, a designer as well as
            a marketer of your own project.
          </p>
        </div>
        <div>
          <Heading level="h3">Challenges</Heading>
          <p>
            The biggest challenge was to learn about React and handling
            asynchronous fetching functions.
          </p>
        </div>
      </main>
      <ProgressBar />
    </div>
  );
};

export default WhereIsWaldo;
