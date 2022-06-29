import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import Button from "../Button/Button";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const themeChangeHandler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <nav className={styles.container}>
      <div className={styles.navBar}>
        <Link href="/" passHref>
          <a>
            <Image src="/icon.svg" alt="logo" width={32} height={32} priority />
          </a>
        </Link>
        <Button isToggle isHollow onClick={themeChangeHandler}>
          <Image
            src={theme === "light" ? "/sun.png" : "/moon.png"}
            alt="logo"
            width={24}
            height={24}
            priority
          />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
