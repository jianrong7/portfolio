import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isHollow?: boolean;
  isToggle?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button = ({
  isHollow,
  isToggle,
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <motion.button
      className={cx(styles.button, className, {
        [styles.isHollow]: isHollow,
        [styles.isToggle]: isToggle,
      })}
      whileTap={{ scale: 0.98, y: 2 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
