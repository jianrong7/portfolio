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
        <Heading level="h3">2022</Heading>
        {posts.map((post) => {
          const date = new Date(post.frontmatter.date);
          const year = date.getFullYear();
          if (year === 2022) {
            return <Post key={post.slug} post={post} />;
          }
        })}
        <Heading level="h3">2021</Heading>
        {posts.map((post) => {
          const date = new Date(post.frontmatter.date);
          const year = date.getFullYear();
          if (year === 2021) {
            return <Post key={post.slug} post={post} />;
          }
        })}
      </ul>
    </section>
  );
}
