import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import type { frontmatter } from "../../types/post";

interface PostPageProps {
  frontmatter: frontmatter;
  slug: string;
  children: MDXRemoteSerializeResult;
}

const PostPage: NextPage<PostPageProps> = ({
  frontmatter: { title, date },
  slug,
  children,
}) => {
  return (
    <>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <div>{title}</div>
      <MDXRemote {...children} />
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

  const children = await serialize(content);

  return {
    props: {
      frontmatter,
      slug,
      children,
    },
  };
}
