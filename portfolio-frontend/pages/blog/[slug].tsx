import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { readingTime } from "reading-time-estimator";
import Head from "next/head";

import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/shared/Heading/Heading";
import StickyHeader from "../../components/shared/StickyHeader/StickyHeader";
// import NavBar from "../../components/shared/NavBar/NavBar";
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar";
import BlogPost from "../../components/mdx/BlogPost/BlogPost";
import { personSchema } from "../../lib/schema";
import { frontmatter } from "../../types/post";

import styles from "../../styles/BlogPost.module.css";

const blogPostingSchema = ({
  slug,
  subtitle,
  title,
  image,
  keywords,
}: frontmatter) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://jianrong.dev/blog/${slug}`,
  },
  author: personSchema,
  description: subtitle,
  image,
  headline: title,
  url: `https://jianrong.dev/blog/${slug}`,
  keywords,
});

export default function PostPage({
  frontmatter,
  slug,
  children,
  timeToRead,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, subtitle, date, updated, keywords, image, imageAlt } =
    frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={subtitle} />
        <meta name="keywords" content={keywords.join(",")} />
        {image && <meta name="image" content={image} />}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://jianrong.dev/${slug}`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:url" content={`https://jianrong.dev/${slug}`} />
        {image && (
          <>
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={imageAlt} />
          </>
        )}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://jianrong.dev/${slug}`} />
        <meta property="twitter:site" content="@jianrong7_" />
        <meta property="twitter:creator" content="@jianrong7_" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={subtitle} />
        {image && (
          <>
            <meta property="twitter:image" content={image} />
            <meta property="twitter:image:alt" content={imageAlt} />
          </>
        )}

        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostingSchema(frontmatter)),
          }}
        />
      </Head>
      {/* <NavBar /> */}
      <StickyHeader title={title} />
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
