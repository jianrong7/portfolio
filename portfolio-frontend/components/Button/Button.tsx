import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isHollow?: boolean;
  isToggle?: boolean;
}

const Button = ({ isHollow, isToggle, children }: ButtonProps) => (
  <motion.button
    className={cx(styles.button, {
      [styles.isHollow]: isHollow,
      [styles.isToggle]: isToggle,
    })}
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { duration: 0.4, ease: "easeOut" },
    }}
    whileTap={{ scale: 0.95, y: 5 }}
  >
    {children}
  </motion.button>
);

export default Button;
