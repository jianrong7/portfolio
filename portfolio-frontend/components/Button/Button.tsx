import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  children: string | JSX.Element;
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
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.button>
);

export default Button;
