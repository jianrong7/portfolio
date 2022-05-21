import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { readingTime } from "reading-time-estimator";
import Head from "next/head";
import { useTheme } from "next-themes";

import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/shared/Heading/Heading";
import NavBar from "../../components/shared/NavBar/NavBar";
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar";

import styles from "../../styles/BlogPost.module.css";
import BlogPost from "../../components/mdx/BlogPost/BlogPost";

export default function PostPage({
  frontmatter: { title, subtitle, date, updated, keywords },
  slug,
  children,
  timeToRead,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { theme } = useTheme();

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
        <meta name="keywords" content={keywords.join(",")} />
        {/* <meta name="image" content={image} /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://jianrong.dev/${slug}`} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:url" content={`https://jianrong.dev/${slug}`} />
        {/* <meta property="og:image" content={image} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        {/* <meta name="twitter:image" content={image} /> */}
        <meta name="twitter:alt" content={title} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
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
            <span>{timeToRead.text}</span>
          </div>
        </div>
        <ProgressBar />
        <BlogPost>{children}</BlogPost>
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
