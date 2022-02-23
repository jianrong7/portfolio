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
      <div className={styles.aboutDiv}>
        <div>
          <Heading level="h2">About me</Heading>
          <div className={styles.description}>
            <p>
              I am a full-stack developer based in Singapore with a passion for
              building digital services. I started my journey on web development
              since 2020. My main focus is in building high quality, performant
              and scalable code. I make sure to bring consistency in UX and
              tooling across my projects.
            </p>
            <p>
              I recently joined 99.co as a frontend engineer where my work will
              consist of constructing beautiful UI components to help 99% of
              people find their homes. When not online, I love working out and
              reading about all kinds of things.
            </p>
          </div>
          <Link href="/resume.pdf">
            <Button className={styles.resumeButton}>
              <span>Resume.pdf</span>
              <Image
                src={
                  theme === "light" ? "/download_light.png" : "/download.png"
                }
                width={24}
                height={24}
                alt="download"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
