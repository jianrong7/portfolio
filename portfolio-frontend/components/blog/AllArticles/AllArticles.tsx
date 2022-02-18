import React from "react";

import Heading from "../../shared/Heading/Heading";
import Post from "../Post";

import styles from "./AllArticles.module.css";

export default function AllArticles({ posts }) {
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
