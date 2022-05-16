import Link from "next/link";
import React from "react";

import styles from "./UnderlinedLink.module.css";

interface UnderlinedLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function UnderlinedLink({
  href,
  children,
}: UnderlinedLinkProps) {
  return (
    <Link href={href} passHref>
      <span className={styles.link}>{children}</span>
    </Link>
  );
}
