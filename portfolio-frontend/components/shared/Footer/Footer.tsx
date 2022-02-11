import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.footer}>
      <div>&#169; {new Date().getFullYear()} Jian Rong —— SG</div>
      <div>
        <Image src="/icon.svg" alt="logo" width={40} height={40} />
      </div>
    </div>
  </footer>
);

export default Footer;
