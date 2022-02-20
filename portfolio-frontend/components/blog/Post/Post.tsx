import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import Heading from "../../shared/Heading/Heading";

import styles from "./Post.module.css";

export default function Post({ post }) {
  const date = new Date(post.frontmatter.date);
  const { theme } = useTheme();

  const divVariants = {};

  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      backgroundColor: theme === "light" ? "#f5e23c" : "#050520",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const keywordsVariants = {
    hover: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <motion.div className={styles.mobileContainer} variants={divVariants}>
        <div>
          <motion.li
            className={styles.container}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true }}
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
                    initial={{ x: 700, opacity: 0 }}
                    whileInView={{ x: 700, opacity: 0 }}
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
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 + index / 10 }}
                // variants={keywordsVariants}
              >
                {keyword}
              </motion.li>
            ) : null
          )}
        </motion.ul>
      </motion.div>
    </Link>
  );
}
