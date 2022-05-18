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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "tween",
        }}
        className={styles.wave}
      >
        💡
      </motion.div>{" "}
      <span>Ideas to spread around.</span>
    </Heading>
    <Heading level="h2" className={styles.description}>
      <span>
        📝 Find the latest of my writing here. Shorter thoughts on{" "}
        <UnderlinedLink href="/twitter">Twitter</UnderlinedLink>.
      </span>
    </Heading>
    {/* Placeholder for Search bar when I actually need it. */}
    {/* Placeholder for tags when I actually need it. */}
  </section>
);

export default Intro;
