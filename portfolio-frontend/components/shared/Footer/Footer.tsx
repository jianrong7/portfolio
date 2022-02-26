import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Footer.module.css";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div>
          <span className={styles.copyright}>
            &#169; {new Date().getFullYear()} Jian Rong —— 🇸🇬
          </span>
          {router.pathname.includes("/blog") && (
            <div className={styles.crawler}>
              <Link href="/rss.xml">RSS Link</Link>
              <Link href="/sitemap.xml">Sitemap Link</Link>
            </div>
          )}
        </div>
        <div>
          <Image src="/icon.svg" alt="logo" width={40} height={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
