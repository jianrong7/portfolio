import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import Link from "next/link";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";
import { containerVariant, coverVariant } from "./animationVariant";

import styles from "./CallToAction.module.css";

interface CallToActionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isSmall?: boolean;
  title: string;
  subtitle: string;
  background: string;
  link?: string;
}

const CallToAction = ({
  isSmall = false,
  title,
  subtitle,
  background,
  className,
  link,
}: CallToActionProps) => (
  <motion.div
    className={cx(styles.container, className, {
      [styles.isSmall]: isSmall,
    })}
    key={`cta_${title}`}
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
      {link && <Arrow />}
    </div>
    <motion.div className={styles.cover} variants={coverVariant}></motion.div>
  </motion.div>
);

const LinkWrapper = ({
  isSmall = false,
  title,
  subtitle,
  link,
  background,
  className,
}: CallToActionProps) => {
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <CallToAction
            isSmall={isSmall}
            title={title}
            subtitle={subtitle}
            background={background}
            className={className}
            link={link}
          />
        </Link>
      ) : (
        <CallToAction
          isSmall={isSmall}
          title={title}
          subtitle={subtitle}
          background={background}
          className={className}
        />
      )}
    </>
  );
};

export default LinkWrapper;
