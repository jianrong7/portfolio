import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { readingTime } from "reading-time-estimator";

import type { frontmatter } from "../../types/post";
import StickyHeader from "../../components/shared/StickyHeader/StickyHeader";

import styles from "../../styles/BlogPost.module.css";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/shared/Heading/Heading";
import NavBar from "../../components/shared/NavBar/NavBar";

interface PostPageProps {
  frontmatter: frontmatter;
  slug: string;
  children: MDXRemoteSerializeResult;
}

const PostPage: NextPage<PostPageProps> = ({
  frontmatter: { title, date, updated },
  slug,
  children,
  timeToRead,
}) => {
  console.log(new Date(updated).toISOString());
  return (
    <>
      <NavBar />
      <Breadcrumbs
        breadcrumbs={[
          { url: "/", title: "Home" },
          { url: "/blog", title: "Blog" },
          { url: `/blog/${slug}`, title },
        ]}
      />
      <main className={styles.container}>
        <div className={styles.hero}>
          <Heading level="h1" className={styles.title}>
            {title}
          </Heading>
          <div className={styles.details}>
            <span>{new Date(date).toDateString().slice(4)} • </span>
            <span className={styles.timeToRead}>{timeToRead.text}</span>
            <span> • {new Date(updated).toDateString().slice(4)}</span>
          </div>
        </div>

        <MDXRemote {...children} />
      </main>
    </>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface getStaticPropsTypes {
  params: { slug: string };
}

export async function getStaticProps({
  params: { slug },
}: getStaticPropsTypes) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const timeToRead = readingTime(content);

  const children = await serialize(content);

  return {
    props: {
      frontmatter,
      slug,
      children,
      timeToRead,
    },
  };
}
