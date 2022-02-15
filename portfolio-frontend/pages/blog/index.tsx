import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import NavBar from "../../components/shared/NavBar/NavBar";

import styles from "../../styles/Blog.module.css";

const components = { NavBar };

const Blog: NextPage = ({ source }) => {
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
      <NavBar />
      <MDXRemote {...source} components={components} />
      <main className={styles.main}>
        Hello
        {/* <Intro />
        <About />
        <Work />
        <Contact /> */}
      </main>
    </motion.div>
  );
};

export default Blog;

export async function getStaticProps() {
  const source = "some ndx text with a component <NavBar />";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
