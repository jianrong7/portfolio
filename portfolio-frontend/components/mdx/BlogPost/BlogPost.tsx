import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/future/image";

import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";

import styles from "./BlogPost.module.css";

const components = { UnderlinedLink, Image };

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
