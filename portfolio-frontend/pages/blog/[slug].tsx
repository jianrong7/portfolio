import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import useSWR, { Fetcher, mutate } from "swr";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { readingTime } from "reading-time-estimator";

import styles from "../../styles/BlogPost.module.css";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/shared/Heading/Heading";
import NavBar from "../../components/shared/NavBar/NavBar";
import Head from "next/head";
import { useState } from "react";
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar";

const fetcher = (input: RequestInfo, init: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export default function PostPage({
  frontmatter: { title, subtitle, date, updated },
  slug,
  children,
  timeToRead,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [liked, setLiked] = useState<boolean>(false);
  const { data } = useSWR(`/api/likes?title=${title}`, fetcher, {
    revalidateOnFocus: false,
  });

  const addLike = async () => {
    if (liked) {
      await fetcher(`/api/likes?title=${title}`, {
        method: "PUT",
      });
      setLiked(false);
    } else {
      await fetcher(`/api/likes?title=${title}&liked=${liked}`, {
        method: "PUT",
      });
      setLiked(true);
    }

    mutate(`/api/likes?title=${title}`);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content={`https://jianrong-portfolio.vercel.app/blog/${slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jrloh7" />
        <meta name="twitter:creator" content="@jrloh7" />
      </Head>
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
            <span> • {new Date(updated).toDateString().slice(4)} • </span>
            <span>
              {data?.likes ? JSON.stringify(data.likes).slice(1, -1) : "0"}{" "}
              likes
            </span>
          </div>
          <button onClick={async () => await addLike()}>
            {liked ? "remove like" : "add like"}
          </button>
        </div>
        <ProgressBar />
        <MDXRemote {...children} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", params?.slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const timeToRead = readingTime(content);

  const children = await serialize(content);

  const ipAddress = req.headers["x-real-ip"] || req.connection.remoteAddress;

  return {
    props: {
      frontmatter,
      slug: params?.slug,
      children,
      timeToRead,
      ipAddress,
    },
  };
};
