import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isHollow?: boolean;
  isToggle?: boolean;
  onClick?: React.MouseEventHandler;
  title?: string;
  href?: string;
}

const Button = ({
  isHollow,
  isToggle,
  onClick,
  className,
  children,
  title,
}: ButtonProps) => {
  return (
    <motion.button
      className={cx(styles.button, className, {
        [styles.isHollow]: isHollow,
        [styles.isToggle]: isToggle,
      })}
      whileTap={{ scale: 0.98, y: 2 }}
      onClick={onClick}
      title={title}
    >
      {children}
    </motion.button>
  );
};
const LinkWrapper = ({
  isHollow,
  isToggle,
  onClick,
  className,
  children,
  title,
  href,
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <a target="_blank" href={href} rel="noopener noreferrer">
          <Button
            isHollow={isHollow}
            isToggle={isToggle}
            onClick={onClick}
            className={className}
            title={title}
          >
            {children}
          </Button>
        </a>
      ) : (
        <Button
          isHollow={isHollow}
          isToggle={isToggle}
          onClick={onClick}
          className={className}
          title={title}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default LinkWrapper;
