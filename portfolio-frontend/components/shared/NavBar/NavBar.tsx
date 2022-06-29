import React from "react";
import Image from "next/future/image";
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
            <Image
              src="/icon.svg"
              alt="Loh Jian Rong's Logo"
              width={32}
              height={32}
              priority
            />
          </a>
        </Link>
        <Button
          isToggle
          isHollow
          onClick={themeChangeHandler}
          title="Theme toggle"
        >
          <Image
            src={theme === "light" ? "/moon.png" : "/sun.png"}
            alt={theme === "light" ? "toggle dark mode" : "toggle light mode"}
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
