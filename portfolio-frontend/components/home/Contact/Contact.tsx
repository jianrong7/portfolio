import React from "react";
import { motion } from "framer-motion";

import Heading from "../../shared/Heading/Heading";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <Heading level="h2">Contact</Heading>
      <p className={styles.text}>Want to get in touch?</p>
      <p className={styles.text}>
        Write me at{" "}
        <motion.a
          href="mailto:lohjianrong7@gmail.com"
          className={styles.email}
          whileHover={{ color: "#f5e23c" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          lohjianrong7@gmail.com
        </motion.a>
        .
      </p>
    </section>
  );
};

export default Contact;
