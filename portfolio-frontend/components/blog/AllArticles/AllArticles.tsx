import React from "react";

import type { PostInterface } from "../../../types/post";
import Heading from "../../shared/Heading/Heading";
import Post from "../Post/Post";

import styles from "./AllArticles.module.css";

interface AllArticlesProps {
  posts: PostInterface[];
}

export default function AllArticles({ posts }: AllArticlesProps) {
  return (
    <section>
      <Heading level="h2">All articles</Heading>
      <ul className={styles.list}>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
