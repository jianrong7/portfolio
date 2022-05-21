import React from "react";

import Heading from "../../shared/Heading/Heading";
import UnderlinedLink from "../../shared/UnderlinedLink/UnderlinedLink";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <Heading level="h2">Contact</Heading>
      <p className={styles.text}>Want to get in touch?</p>
      <p className={styles.text}>
        Write me at{" "}
        <UnderlinedLink href="mailto:hello@jianrong.dev">
          hello@jianrong.dev
        </UnderlinedLink>
        .
      </p>
    </section>
  );
};

export default Contact;
