import Link from "next/link";
import React from "react";
import cx from "classnames";

import styles from "./UnderlinedLink.module.css";

interface UnderlinedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function UnderlinedLink({
  href,
  className,
  children,
}: UnderlinedLinkProps) {
  return (
    <Link href={href}>
      <a>
        <span className={cx(styles.link, className)}>{children}</span>
      </a>
    </Link>
  );
}
