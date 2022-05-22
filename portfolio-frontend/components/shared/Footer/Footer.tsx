import React from "react";
import Image from "next/image";

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
            <UnderlinedLink href="/twitter">Twitter</UnderlinedLink>
            <UnderlinedLink href="/github">Github</UnderlinedLink>
            <UnderlinedLink href="/linkedin">LinkedIn</UnderlinedLink>
          </div>
          <div>
            <UnderlinedLink href="/rss.xml">RSS Link</UnderlinedLink>
            <UnderlinedLink href="/sitemap.xml">Sitemap Link</UnderlinedLink>
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
            <Image src="/icon.svg" alt="logo" width={32} height={32} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
