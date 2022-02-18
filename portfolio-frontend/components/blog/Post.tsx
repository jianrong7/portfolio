import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import Heading from "../shared/Heading/Heading";

import styles from "./Post.module.css";

export default function Post({ post }) {
  const date = new Date(post.frontmatter.date);
  const { theme } = useTheme();

  const listVariants = {
    hover: {
      backgroundColor: theme === "light" ? "#f5e23c" : "#050520",
    },
    tap: {
      scale: 0.95,
    },
  };

  const keywordsVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <div className={styles.mobileContainer}>
        <div>
          <motion.li
            className={styles.container}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={listVariants}
          >
            <div className={styles.dateTitle}>
              <span className={styles.date}>
                {date.toDateString().slice(4, 10)}
              </span>
              <Heading level="h3" className={styles.title}>
                {post.frontmatter.title}
              </Heading>
            </div>

            <motion.ul className={styles.keywordsDesktop}>
              {post.frontmatter.keywords.map((keyword, index) =>
                index < 3 ? (
                  <motion.li
                    key={`${keyword}_${index}`}
                    className={styles.keyword}
                    transition={{ duration: 0.3 + index / 10 }}
                    variants={keywordsVariants}
                  >
                    {keyword}
                  </motion.li>
                ) : null
              )}
            </motion.ul>
          </motion.li>
        </div>
        <motion.ul className={styles.keywordsMobile}>
          {post.frontmatter.keywords.map((keyword, index) =>
            index < 3 ? (
              <motion.li
                key={`${keyword}_${index}`}
                className={styles.keyword}
                transition={{ duration: 0.3 + index / 10 }}
                variants={keywordsVariants}
              >
                {keyword}
              </motion.li>
            ) : null
          )}
        </motion.ul>
      </div>
    </Link>
  );
}
