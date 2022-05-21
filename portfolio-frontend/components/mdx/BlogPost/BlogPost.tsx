import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";

import styles from "./BlogPost.module.css";

const components = { UnderlinedLink };

interface BlogPostProps {
  children: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export default function BlogPost({ children }: BlogPostProps) {
  return (
    <article className={styles.article}>
      <MDXRemote components={components} {...children} />
    </article>
  );
}
