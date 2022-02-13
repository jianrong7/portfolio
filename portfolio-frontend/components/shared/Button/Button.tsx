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
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95, y: 5 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
