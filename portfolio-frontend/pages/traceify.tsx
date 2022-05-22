import type { NextPage } from "next";
import Head from "next/head";

import Heading from "../components/shared/Heading/Heading";
import ProgressBar from "../components/shared/ProgressBar/ProgressBar";
import StickyHeader from "../components/shared/StickyHeader/StickyHeader";

import { traceifyMetaTags } from "../lib/meta";

import styles from "../styles/traceify.module.css";

const Traceify: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{traceifyMetaTags.title}</title>
        <meta name="description" content={traceifyMetaTags.description} />
        <meta name="keywords" content={traceifyMetaTags.keywords} />
        <meta name="image" content={traceifyMetaTags.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={traceifyMetaTags.url} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={traceifyMetaTags.title} />
        <meta
          property="og:description"
          content={traceifyMetaTags.description}
        />
        <meta property="og:url" content={traceifyMetaTags.url} />
        <meta property="og:image" content={traceifyMetaTags.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={traceifyMetaTags.title} />
        <meta
          name="twitter:description"
          content={traceifyMetaTags.description}
        />
        <meta name="twitter:image" content={traceifyMetaTags.image} />
        <meta name="twitter:alt" content={traceifyMetaTags.title} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <StickyHeader title="Traceify" />
      <main className={styles.main}>
        <div>
          <Heading level="h2">
            Check out your Spotify history with a TraceTogether style.
          </Heading>
        </div>
        <div>
          <Heading level="h3">The Project</Heading>
          <p>
            Inspired by Receiptify, I built this project given that almost all
            Singaporeans had to download the TraceTogether app. Being familiar
            with the layout, I thought it would be fun for me to add a twist and
            let people view their Spotify history.
          </p>
        </div>
        <div>
          <Heading level="h3">Technical details</Heading>
          <p>
            The frontend is built using React and Tailwind while the backend is
            built on Express and hosted on Heroku.
          </p>
        </div>
        <div>
          <Heading level="h3">Personal growth</Heading>
          <p>
            This project allowed me to learn about the OAuth2 protocol in depth.
            I learnt how to retrieve access tokens and refresh tokens from the
            Spotify OAuth flow to utilise the Spotify API.
          </p>
        </div>
        <div>
          <Heading level="h3">Challenges</Heading>
          <p>Learning the OAuth flow.</p>
        </div>
      </main>
      <ProgressBar />
    </div>
  );
};

export default Traceify;
