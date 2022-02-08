import React from "react";
import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  children: string | JSX.Element;
  isHollow?: boolean;
  isToggle?: boolean;
}

const Button = ({ isHollow, isToggle, children }: ButtonProps) => (
  <button
    className={cx(styles.button, {
      [styles.isHollow]: isHollow,
      [styles.isToggle]: isToggle,
    })}
  >
    {children}
  </button>
);

export default Button;
