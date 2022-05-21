import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";

import styles from "./Footer.module.css";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.crawler}>
          <div>
            <UnderlinedLink href="/twitter">Twitter</UnderlinedLink>
            <UnderlinedLink href="/github">Github</UnderlinedLink>
            <UnderlinedLink href="/">Portfolio</UnderlinedLink>
          </div>
          <div>
            <UnderlinedLink href="/rss.xml">RSS Link</UnderlinedLink>
            <UnderlinedLink href="/sitemap.xml">Sitemap Link</UnderlinedLink>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <span>&#169; {new Date().getFullYear()} Jian Rong —— 🇸🇬</span>
          </div>
          <div>
            <Image src="/icon.svg" alt="logo" width={32} height={32} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
