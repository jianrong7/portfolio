import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import useSWR, { mutate } from "swr";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { readingTime } from "reading-time-estimator";
import Head from "next/head";
import { motion } from "framer-motion";

import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/shared/Heading/Heading";
import NavBar from "../../components/shared/NavBar/NavBar";
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar";

import styles from "../../styles/BlogPost.module.css";

const fetcher = (input: RequestInfo, init: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const floatingLike = {
  initial: {
    opacity: 0,
  },
  click: {
    opacity: 1,
    scale: 1.3,
    y: 0,
    transition: {
      duration: 0.01,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    y: -150,
    transition: {
      duration: 3,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export default function PostPage({
  frontmatter: { title, subtitle, date, updated, keywords },
  slug,
  children,
  timeToRead,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useSWR(`/api/likes?title=${title}`, fetcher, {
    revalidateOnFocus: false,
  });

  const addLike = async () => {
    await fetcher(`/api/likes?title=${title}`, {
      method: "PUT",
    });
    // await fetcher(`/api/likes?title=${title}&liked=${liked}`, {
    //   method: "PUT",
    // });

    mutate(`/api/likes?title=${title}`);
  };

  const tweetPost = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=https://jianrong-portfolio.vercel.app/blog/${slug}&text=${title}%20by%20@jrloh7&hashtags=${keywords[0]},${keywords[1]}`,
      "targetWindow",
      "toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=700,height=500"
    );
    return false;
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
            <span> • {new Date(updated).toDateString().slice(4)}</span>
            <div>
              {data?.likes ? JSON.stringify(data.likes).slice(1, -1) : "0"}{" "}
              likes
            </div>
          </div>
        </div>
        <ProgressBar />
        <article>
          <MDXRemote {...children} />
        </article>
        <div className={styles.buttons}>
          <motion.button
            onClick={async () => await addLike()}
            className={styles.likeButton}
            initial="initial"
            whileTap="click"
            animate="exit"
          >
            <motion.div variants={floatingLike} className={styles.floatingLike}>
              <Image src="/like.png" alt="like" width={16} height={16} />
            </motion.div>
            <Image src="/like.png" alt="like" width={16} height={16} />
          </motion.button>
          <button onClick={tweetPost}>
            <Image src="/twitter.svg" alt="twitter" width={16} height={16} />
          </button>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", params?.slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const timeToRead = readingTime(content);

  const children = await serialize(content);

  return {
    props: {
      frontmatter,
      slug: params?.slug,
      children,
      timeToRead,
    },
  };
};
