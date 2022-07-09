import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../components/shared/NavBar/NavBar";

import { archiveMetaTags } from "../lib/meta";
import { personSchema } from "../lib/schema";

import styles from "../styles/Archive.module.css";
import Breadcrumbs from "../components/shared/Breadcrumbs/Breadcrumbs";
import Heading from "../components/shared/Heading/Heading";
import AllArticles from "../components/blog/AllArticles/AllArticles";

const projects = [
  {
    title: "project1",
    subtitle: "project1 subtitle",
    date: "Sat Jul 09 2022 14:09:11 GMT+0800 (Singapore Standard Time)",
    updated: "Sat Jul 09 2022 14:09:11 GMT+0800 (Singapore Standard Time)",
    keywords: ["project", "1"],
    featured: false,
  },
  {
    title: "project2",
    subtitle: "project2 subtitle",
    date: "Sat Jul 09 2022 14:09:11 GMT+0800 (Singapore Standard Time)",
    updated: "Sat Jul 09 2022 14:09:11 GMT+0800 (Singapore Standard Time)",
    keywords: ["project", "2"],
    featured: false,
  },
];

const Archive: NextPage = () => {
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
        <section>
          <Heading level="h1">Archive</Heading>
          <Heading level="h2">A big list of things I&#39;ve worked on</Heading>
        </section>
        <section>{/* <AllArticles posts={projects} /> */}</section>
      </main>
    </motion.div>
  );
};

export default Archive;
