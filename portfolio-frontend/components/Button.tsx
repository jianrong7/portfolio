import React from "react";
import cx from "classnames";

import styles from "../styles/components/Button.module.css";

interface ButtonProps {
  children: string;
  isHollow?: boolean;
}

const Button = ({ isHollow, children }: ButtonProps) => (
  <button className={cx(styles.button, { [styles.isHollow]: isHollow })}>
    {children}
  </button>
);

export default Button;
