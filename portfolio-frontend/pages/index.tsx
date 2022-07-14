import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../components/shared/NavBar/NavBar";
import Intro from "../components/home/Intro/Intro";
import About from "../components/home/About/About";
import Experience from "../components/home/Experience/Experience";
import Work from "../components/home/Work/Work";
import Contact from "../components/home/Contact/Contact";

import { homeMetaTags } from "../lib/meta";
import { personSchema } from "../lib/schema";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 5 }}
    >
      <Head>
        <title>{homeMetaTags.title}</title>
        <meta name="description" content={homeMetaTags.description} />
        <meta name="keywords" content={homeMetaTags.keywords} />
        <meta name="image" content={homeMetaTags.image} />
        <link rel="canonical" href={homeMetaTags.url} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={homeMetaTags.title} />
        <meta property="og:description" content={homeMetaTags.description} />
        <meta property="og:url" content={homeMetaTags.url} />
        <meta property="og:image" content={homeMetaTags.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={homeMetaTags.title} />
        <meta name="twitter:description" content={homeMetaTags.description} />
        <meta name="twitter:image" content={homeMetaTags.image} />
        <meta name="twitter:alt" content={homeMetaTags.title} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <NavBar />
      <main className={styles.main}>
        Hello222 Hello again wassup bye
        <Intro />
        Goodbye lol jk hello
        <About />
        {/* <Experience /> to insert when I have more than 1 internship, right now it looks too pathetic*/}
        <Work />
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home;
