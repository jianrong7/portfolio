import React from "react";
import { motion, Variants } from "framer-motion";
import cx from "classnames";

import styles from "./Arrow.module.css";

interface ArrowProps extends React.HTMLAttributes<HTMLHeadingElement> {
  width?: string;
  height?: string;
  variants: Variants;
  color: string;
}
//remember to wrap everything with Link
const Arrow = ({
  width = "38",
  height = "24",
  variants,
  color = "black",
  children,
}: ArrowProps) => (
  <motion.div className={cx(styles.container)} variants={variants}>
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 38 24"
      // fill="red"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrow}
    >
      <motion.path
        d="M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807612 25.9792 0.807612 25.3934 1.3934C24.8076 1.97918 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM0 13.5H36V10.5H0V13.5Z"
        // fill={color}
        variants={variants}
        className={styles.arrowPath}
      />
    </motion.svg>
  </motion.div>
);

export default Arrow;
