import React from "react";
import cx from "classnames";

import styles from "./Heading.module.css";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ children, level = "h1", className }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(level, props, children);
  return (
    <Heading className={cx(styles.heading, className)}>{children}</Heading>
  );
};

export default Heading;
