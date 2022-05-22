import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Headroom from "react-headroom";
import { useTheme } from "next-themes";

import Button from "../Button/Button";

import styles from "./StickyHeader.module.css";
import Heading from "../Heading/Heading";

interface StickyHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

const StickyHeader = ({ title }: StickyHeaderProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const themeChangeHandler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <Headroom>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <div className={styles.logoDiv}>
            <Link href={"/"} passHref>
              <a>
                <Image src="/icon.svg" alt="logo" width={32} height={32} />
              </a>
            </Link>
            <Heading level="h1" className={styles.title}>
              {title}
            </Heading>
          </div>

          <Button isToggle isHollow onClick={themeChangeHandler}>
            <Image
              src={theme === "light" ? "/sun.png" : "/moon.png"}
              alt="logo"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </Headroom>
  );
};

export default StickyHeader;
