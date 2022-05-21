import UnderlinedLink from "../../shared/UnderlinedLink/UnderlinedLink";
import cx from "classnames";

import styles from "./UnderlinedLink.module.css";

interface MdxUnderlinedLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export default function MdxUnderlinedLink({
  className,
  children,
  href,
}: MdxUnderlinedLinkProps) {
  return (
    <UnderlinedLink
      className={cx(styles.underlinedLink, className)}
      href={href}
    >
      {children}
    </UnderlinedLink>
  );
}
