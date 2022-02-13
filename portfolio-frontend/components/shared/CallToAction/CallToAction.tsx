import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import cx from "classnames";
import { isMobile } from "react-device-detect";
import { useTheme } from "next-themes";
import Link from "next/link";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";

import styles from "./CallToAction.module.css";
interface CallToActionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isSmall?: boolean;
  title: string;
  subtitle: string;
  link: string;
  background: string;
}
//remember to wrap everything with Link

const CallToAction = ({
  isSmall = false,
  title,
  subtitle,
  link,
  background,
  className,
  children,
}: CallToActionProps) => {
  const { theme } = useTheme();
  const [arrowVariant, setArrowVariant] = useState<Variants | undefined>(
    undefined
  );

  useEffect(() => {
    if (theme === "light") {
      setArrowVariant({
        initial: {
          fill: "#0f0f1f",
          backgroundColor: "#fff7b3",
        },
        hover: {
          fill: "#fff7b3",
          backgroundColor: "#0f0f1f",
        },
      });
    } else {
      setArrowVariant({
        initial: {
          fill: "#f5e23c",
          backgroundColor: "#050520",
        },
        hover: {
          fill: "#050520",
          backgroundColor: "#f5e23c",
        },
      });
    }
    console.log(arrowVariant);
  });

  const containerVariant = {
    hover: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // const arrowVariant = {
  //   initial: {
  //     fill: theme === "light" ? "#0f0f1f" : "#f5e23c",
  //     backgroundColor: theme === "light" ? "#fff7b3" : "#050520",
  //   },
  //   hover: {
  //     fill: theme === "light" ? "#fff7b3" : "#050520",
  //     backgroundColor: theme === "light" ? "#0f0f1f" : "#f5e23c",
  //   },
  //   // exit: {
  //   //   fill: theme === "light" ? "#0f0f1f" : "#f5e23c",
  //   // },
  // };

  const coverVariant = {
    hover: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const dragConstraints = {
    top: -5,
    left: -5,
    right: 5,
    bottom: 5,
  };

  return (
    <Link href={link} passHref>
      <motion.div
        className={cx(styles.container, className, {
          [styles.isSmall]: isSmall,
        })}
        key={`cta_${link}`}
        // drag={!isMobile}
        // dragConstraints={dragConstraints}
        // dragElastic={0.2}
        initial="initial"
        whileHover="hover"
        whileTap={{
          scale: 0.95,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        variants={containerVariant}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.text}>
          <Heading level="h3" className={styles.title}>
            {title}
          </Heading>
          <p className={styles.subtitle}>{subtitle}</p>
          <Arrow variants={arrowVariant} />
        </div>
        <motion.div
          className={styles.cover}
          variants={coverVariant}
        ></motion.div>
      </motion.div>
    </Link>
  );
};

export default CallToAction;
