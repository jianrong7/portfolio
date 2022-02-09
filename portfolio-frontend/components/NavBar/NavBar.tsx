import React from "react";
import Image from "next/image";

import Button from "../Button/Button";

import styles from "./NavBar.module.css";

const NavBar = () => (
  <div className={styles.navBar}>
    <Image src="/icon.svg" alt="logo" width={40} height={40} />
    <Button isToggle isHollow>
      <Image src="/darkmode.svg" alt="logo" width={40} height={40} />
    </Button>
  </div>
);

export default NavBar;
