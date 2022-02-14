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
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link href={"/"} passHref>
          <Image src="/icon.svg" alt="logo" width={40} height={40} />
        </Link>
        <Button isToggle isHollow onClick={themeChangeHandler}>
          <Image
            src={theme === "light" ? "/sun.png" : "/moon.png"}
            alt="logo"
            width={40}
            height={40}
          />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
