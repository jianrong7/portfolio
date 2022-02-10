import React from "react";
import { motion, Variants } from "framer-motion";
import cx from "classnames";

import styles from "./Arrow.module.css";
import Heading from "../Heading/Heading";

interface ArrowProps extends React.HTMLAttributes<HTMLHeadingElement> {
  width?: string;
  height?: string;
  variants: Variants;
}
//remember to wrap everything with Link
const Arrow = ({
  width = "61",
  height = "24",
  variants,
  children,
}: ArrowProps) => (
  <div className={cx(styles.container)}>
    <motion.svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrow}
      variants={variants}
    >
      <path d="M60.0607 13.0607C60.6464 12.4749 60.6464 11.5251 60.0607 10.9393L50.5147 1.3934C49.9289 0.807612 48.9792 0.807612 48.3934 1.3934C47.8076 1.97918 47.8076 2.92893 48.3934 3.51472L56.8787 12L48.3934 20.4853C47.8076 21.0711 47.8076 22.0208 48.3934 22.6066C48.9792 23.1924 49.9289 23.1924 50.5147 22.6066L60.0607 13.0607ZM0 13.5H59V10.5H0V13.5Z" />
    </motion.svg>
  </div>
);

export default Arrow;
