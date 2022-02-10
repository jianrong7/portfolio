import React from "react";

import Heading from "../../shared/Heading/Heading";
import Button from "../../shared/Button/Button";

import styles from "./About.module.css";

const About = () => (
  <section id="about" className={styles.about}>
    <div>
      <Heading level="h2">About me</Heading>
      <p>
        I am a full-stack developer based in Singapore with a passion for
        building digital services. I started my journey on web development since
        2020. My main focus is in building high quality, performant and scalable
        code. I make sure to bring consistency in UX and tooling across my
        projects.
      </p>
      <p>
        I recently joined 99.co as a frontend engineer where my work will
        consist of constructing beautiful UI components to help 99% of people
        find their homes. When not online, I love working out and reading about
        all kinds of things.
      </p>
      <Button>Resume</Button>
    </div>
  </section>
);

export default About;
