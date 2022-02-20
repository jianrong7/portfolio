import React from "react";

import type { PostInterface } from "../../../types/post";
import Heading from "../../shared/Heading/Heading";
import FeaturedPost from "../FeaturedPost/FeaturedPost";

import styles from "./FeaturedPosts.module.css";

interface FeaturedPostsProps {
  posts: PostInterface[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section>
      <Heading level="h2">Featured</Heading>
      <ul className={styles.list}>
        {posts.map((post) => (
          <FeaturedPost key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
