import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";

import styles from "./About.module.css";

const About = () => {
  const { theme } = useTheme();
  return (
    <section id="about" className={styles.about}>
      <Heading level="h2">About me</Heading>
      <div className={styles.description}>
        <p>
          Recently inspired by the Learn in Public movement, I am hoping to
          publish more of my thoughts on the web. You can find them on Twitter,
          Github and my blog! I hope to bring my learnings throughout my journey
          as a student in the National University of Singapore.
        </p>
        <p>
          I recently joined 99.co as a frontend engineer where my work will
          consist of constructing beautiful UI components to help 99% of people
          find their homes. When not online, I love working out and reading
          about all kinds of things.
        </p>
      </div>
      <Link href="/resume.pdf" passHref>
        <Button className={styles.resumeButton}>
          <span>Resume.pdf</span>
          <Image
            src={theme === "light" ? "/download_light.png" : "/download.png"}
            width={24}
            height={24}
            alt="download"
          />
        </Button>
      </Link>
    </section>
  );
};

export default About;
