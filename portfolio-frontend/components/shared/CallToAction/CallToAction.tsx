import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import Link from "next/link";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";

import styles from "./CallToAction.module.css";
interface CallToActionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isSmall?: boolean;
  title: string;
  subtitle: string;
  link: string;
  background: string;
}

const CallToAction = ({
  isSmall = false,
  title,
  subtitle,
  link,
  background,
  className,
  children,
}: CallToActionProps) => {
  const containerVariant = {
    hover: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: 200,
    },
  };

  const coverVariant = {
    hover: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Link href={link} passHref>
      <motion.div
        className={cx(styles.container, className, {
          [styles.isSmall]: isSmall,
        })}
        key={`cta_${link}`}
        whileHover="hover"
        initial="initial"
        whileInView="animate"
        exit="exit"
        whileTap="tap"
        viewport={{ once: true }}
        variants={containerVariant}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.text}>
          <Heading level="h3" className={styles.title}>
            {title}
          </Heading>
          <p className={styles.subtitle}>{subtitle}</p>
          <Arrow />
        </div>
        <motion.div
          className={styles.cover}
          variants={coverVariant}
        ></motion.div>
      </motion.div>
    </Link>
  );
};

export default CallToAction;
