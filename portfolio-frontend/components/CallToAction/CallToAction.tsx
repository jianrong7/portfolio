import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";

import styles from "./CallToAction.module.css";

const containerVariant = {
  hover: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const arrowVariant = {
  hover: {
    fill: "red",
    stroke: "red",
    scale: 1.2,
  },
};
interface CallToActionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isSmall?: boolean;
  title: string;
  subtitle: string;
}
//remember to wrap everything with Link

const CallToAction = ({
  isSmall = false,
  title,
  subtitle,
  children,
}: CallToActionProps) => {
  const dragConstraints = {
    top: -10,
    left: -10,
    right: 10,
    bottom: 10,
  };
  return (
    <motion.div
      className={cx(styles.container, { [styles.isSmall]: isSmall })}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.2}
      whileHover="hover"
      whileTap={{
        scale: 0.95,
      }}
      // whileDrag={{
      //   scale: 1.1,
      // }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      variants={containerVariant}
    >
      <Heading level="h3" className={styles.title}>
        {title}
      </Heading>
      <p className={styles.subtitle}>{subtitle}</p>
      <Arrow width="40" variants={arrowVariant} />
    </motion.div>
  );
};

export default CallToAction;
