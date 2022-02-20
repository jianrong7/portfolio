import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import { motion } from "framer-motion";

import type { PostInterface } from "../../types/post";
import FeaturedPosts from "../../components/blog/FeaturedPosts/FeaturedPosts";
import AllArticles from "../../components/blog/AllArticles/AllArticles";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import NavBar from "../../components/shared/NavBar/NavBar";
import Intro from "../../components/blog/Intro/Intro";

import styles from "../../styles/Blog.module.css";

interface BlogProps {
  posts: PostInterface[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  console.log(posts);
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 5 }}
    >
      <Head>
        <title>Loh Jian Rong&#39;s Blog</title>
        <meta
          name="description"
          content="Loh Jian Rong is a software engineer currently based in Singapore working with React and Express."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Breadcrumbs
        breadcrumbs={[
          { url: "/", title: "Home" },
          { url: "/blog", title: "Blog" },
        ]}
      />
      <main className={styles.main}>
        <Intro />
        <FeaturedPosts posts={posts} />
        <AllArticles posts={posts} />
      </main>
    </motion.div>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    // get files from 'content' dir
    const files = fs.readdirSync(path.join("content"));

    // get slug and frontmatter from posts
    const posts = files.map((file) => {
      // create slug
      const slug = file.replace(".mdx", "");

      // get frontmatter
      const markdownWithMeta = fs.readFileSync(
        path.join("content", file),
        "utf-8"
      );

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        slug,
        frontmatter,
      };
    });

    return {
      props: {
        posts: posts,
      },
    };
  } catch (e) {
    console.error(e);
  }
}
