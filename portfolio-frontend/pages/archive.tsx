import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../components/shared/NavBar/NavBar";
import Intro from "../components/home/Intro/Intro";
import About from "../components/home/About/About";
import Experience from "../components/home/Experience/Experience";
import Work from "../components/home/Work/Work";
import Contact from "../components/home/Contact/Contact";

import { archiveMetaTags } from "../lib/meta";
import { personSchema } from "../lib/schema";

import styles from "../styles/Home.module.css";
import Breadcrumbs from "../components/shared/Breadcrumbs/Breadcrumbs";

const Home: NextPage = () => {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 5 }}
    >
      <Head>
        <title>{archiveMetaTags.title}</title>
        <meta name="description" content={archiveMetaTags.description} />
        <meta name="keywords" content={archiveMetaTags.keywords} />
        <meta name="image" content={archiveMetaTags.image} />
        <link rel="canonical" href={archiveMetaTags.url} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={archiveMetaTags.title} />
        <meta property="og:description" content={archiveMetaTags.description} />
        <meta property="og:url" content={archiveMetaTags.url} />
        <meta property="og:image" content={archiveMetaTags.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={archiveMetaTags.title} />
        <meta
          name="twitter:description"
          content={archiveMetaTags.description}
        />
        <meta name="twitter:image" content={archiveMetaTags.image} />
        <meta name="twitter:alt" content={archiveMetaTags.title} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <NavBar />
      <Breadcrumbs
        breadcrumbs={[
          { url: "/", title: "Home" },
          { url: "/archive", title: "Project Archive" },
        ]}
      />
      <main className={styles.main}>
        <p>hello</p>
      </main>
    </motion.div>
  );
};

export default Home;
