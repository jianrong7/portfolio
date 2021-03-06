import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import Link from "next/link";

import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";
import UnderlinedLink from "../../shared/UnderlinedLink/UnderlinedLink";

import styles from "./Intro.module.css";

const Intro = () => (
  <section className={styles.header}>
    <Heading level="h1" className={styles.intro}>
      <span className={styles.introHello}>
        Hello!{" "}
        <span lang="zh" className={styles.introHello}>
          δ½ ε₯½
        </span>
        !
      </span>
      <motion.div
        animate={{ rotate: 20 }}
        transition={{
          repeat: 13,
          repeatType: "reverse",
          duration: 0.2,
          ease: "easeInOut",
          type: "tween",
        }}
        className={styles.wave}
      >
        π
      </motion.div>{" "}
      <span>I&#39;m Jian Rong.</span>
    </Heading>
    <Heading level="h2" className={styles.description}>
      A Singapore <span className={cx(styles.singapore, styles.emoji)}>πΈπ¬</span>{" "}
      based tech enthusiast{" "}
      <span className={cx(styles.computer, styles.emoji)}>π»</span> and frontend
      engineer working with React{" "}
      <span className={cx(styles.react, styles.emoji)}>βοΈ</span>.
    </Heading>
    <div className={styles.headerDetails}>
      <div className={styles.headerDetailsButtons}>
        <a href="#about">
          <Button isHollow>About me</Button>
        </a>

        <a href="#work">
          <Button isHollow>Work</Button>
        </a>
        <Link href="/blog">
          <a>
            <Button>Blog</Button>
          </a>
        </Link>
      </div>
      <UnderlinedLink openInNewTab href="/twitter">
        @jianrong7_
      </UnderlinedLink>
    </div>
  </section>
);

export default Intro;
