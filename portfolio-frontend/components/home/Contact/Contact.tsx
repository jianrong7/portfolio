import React from "react";

import Heading from "../../shared/Heading/Heading";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <Heading level="h2">Contact</Heading>
      <p className={styles.text}>Want to get in touch?</p>
      <p className={styles.text}>
        Write me at{" "}
        <a href="mailto:lohjianrong7@gmail.com">lohjianrong7@gmail.com</a>.
      </p>
    </section>
  );
};

export default Contact;
