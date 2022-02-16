import React from "react";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.subtitle}</h2>
      </div>
    </Link>
  );
}
