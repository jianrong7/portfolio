import React from "react";
import Link from "next/link";

import type { PostInterface } from "../../../types/post";
import Heading from "../../shared/Heading/Heading";
import styles from "./FeaturedPost.module.css";

interface FeaturedPostProps {
  post: PostInterface;
}

// const listVariants: Variants = {
//   hover: {
//     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//     scale: 1.05,
//     transition: {
//       duration: 0.4,
//       ease: "easeInOut",
//     },
//   },
//   tap: {
//     scale: 0.95,
//     transition: { duration: 0.4, ease: "easeInOut" },
//   },
// };

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const date = new Date(post.frontmatter.date);
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <li className={styles.container}>
        <Heading level="h3" className={styles.title}>
          {post.frontmatter.title}
        </Heading>
        <p className={styles.subtitle}>{post.frontmatter.subtitle}</p>
        <p className={styles.time}>
          {date.toDateString().slice(4)}
          {/* — {post.frontmatter.readTime} */}
        </p>
      </li>
    </Link>
  );
}
