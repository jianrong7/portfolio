import React from "react";

import Heading from "../../shared/Heading/Heading";
import FeaturedPost from "../FeaturedPost/FeaturedPost";

import styles from "./FeaturedPosts.module.css";

export default function FeaturedPosts({ posts }) {
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
