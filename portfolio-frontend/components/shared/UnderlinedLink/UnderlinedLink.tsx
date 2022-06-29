import Link from "next/link";
import React from "react";
import cx from "classnames";

import styles from "./UnderlinedLink.module.css";

interface UnderlinedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
}

export default function UnderlinedLink({
  href,
  className,
  children,
  openInNewTab = false,
}: UnderlinedLinkProps) {
  if (openInNewTab) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <span className={cx(styles.link, className)}>{children}</span>
      </a>
    );
  }
  return (
    <Link href={href}>
      <a>
        <span className={cx(styles.link, className)}>{children}</span>
      </a>
    </Link>
  );
}
