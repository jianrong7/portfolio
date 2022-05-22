import type { InferGetStaticPropsType } from "next";
import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import { motion } from "framer-motion";

import type { PostInterface } from "../../types/post";
import FeaturedPosts from "../../components/blog/FeaturedPosts/FeaturedPosts";
import AllArticles from "../../components/blog/AllArticles/AllArticles";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import NavBar from "../../components/shared/NavBar/NavBar";
import Intro from "../../components/blog/Intro/Intro";

import generateRSSFeed from "../../lib/generateRSSFeed";
import { blogMetaTags } from "../../lib/meta";

import styles from "../../styles/Blog.module.css";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 5 }}
    >
      <Head>
        <title>{blogMetaTags.title}</title>
        <meta name="description" content={blogMetaTags.description} />
        <meta name="keywords" content={blogMetaTags.keywords} />
        <meta name="image" content={blogMetaTags.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={blogMetaTags.url} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={blogMetaTags.title} />
        <meta property="og:description" content={blogMetaTags.description} />
        <meta property="og:url" content={blogMetaTags.url} />
        <meta property="og:image" content={blogMetaTags.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={blogMetaTags.title} />
        <meta name="twitter:description" content={blogMetaTags.description} />
        <meta name="twitter:image" content={blogMetaTags.image} />
        <meta name="twitter:alt" content={blogMetaTags.title} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
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
}

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
      } as PostInterface;
    });

    posts.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));

    generateRSSFeed(posts);

    return {
      props: {
        posts,
      },
    };
  } catch (e) {
    console.error(e);
  }
}
