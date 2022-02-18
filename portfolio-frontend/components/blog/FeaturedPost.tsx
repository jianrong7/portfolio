import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Heading from "../shared/Heading/Heading";

import styles from "./FeaturedPost.module.css";

const listVariants: Variants = {
  hover: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export default function FeaturedPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <motion.li
        className={styles.container}
        whileHover="hover"
        whileTap="tap"
        variants={listVariants}
      >
        <Heading level="h3" className={styles.title}>
          {post.frontmatter.title}
        </Heading>
        <Heading level="h3" className={styles.subtitle}>
          {post.frontmatter.subtitle}
        </Heading>
      </motion.li>
    </Link>
  );
}
