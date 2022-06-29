import React from "react";
import Image from "next/future/image";

import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";

import styles from "./Footer.module.css";

const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.crawler}>
          <div>
            <UnderlinedLink openInNewTab href="/twitter">
              Twitter
            </UnderlinedLink>
            <UnderlinedLink openInNewTab href="/github">
              Github
            </UnderlinedLink>
            <UnderlinedLink openInNewTab href="/linkedin">
              LinkedIn
            </UnderlinedLink>
          </div>
          <div>
            <UnderlinedLink openInNewTab href="/rss.xml">
              RSS
            </UnderlinedLink>
            <UnderlinedLink openInNewTab href="/sitemap.xml">
              Sitemap
            </UnderlinedLink>
            <UnderlinedLink href="/now">Now</UnderlinedLink>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <span>&#169; {new Date().getFullYear()} Jian Rong —— 🇸🇬</span>
          </div>
          <div className={styles.buttonWithLogo}>
            <span className={styles.backToTop} onClick={topFunction}>
              ^
            </span>
            <Image
              src="/icon.svg"
              alt="Loh Jian Rong's Logo"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
