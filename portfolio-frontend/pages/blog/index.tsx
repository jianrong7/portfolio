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

interface BlogProps {
  posts: Array<{
    slug: string;
    frontmatter: frontmatter;
  }>;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <NavBar />
      <div>hello</div>
      <div>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </>
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
