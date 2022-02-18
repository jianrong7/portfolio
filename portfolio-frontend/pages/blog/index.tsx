import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import { motion } from "framer-motion";

import NavBar from "../../components/shared/NavBar/NavBar";
import Post from "../../components/blog/Post";
import { sortByDate } from "../../utils";

import styles from "../../styles/Blog.module.css";
import Link from "next/link";

import type { frontmatter } from "../../types/post";
import Heading from "../../components/shared/Heading/Heading";
import FeaturedPost from "../../components/blog/FeaturedPost";
import FeaturedPosts from "../../components/blog/FeaturedPosts/FeaturedPosts";
import AllArticles from "../../components/blog/AllArticles/AllArticles";
import Breadcrumb from "../../components/shared/Breadcrumbs/Breadcrumb";

interface BlogProps {
  posts: Array<{
    slug: string;
    frontmatter: frontmatter;
  }>;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
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

      <main className={styles.main}>
        <Breadcrumb breadcrumbs={[{ url: "/", title: "Home" }]} />
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
        posts: posts.sort(sortByDate),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
