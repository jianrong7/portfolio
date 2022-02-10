import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";

import styles from "./CallToAction.module.css";

interface CallToActionProps extends React.HTMLAttributes<HTMLHeadingElement> {}
//remember to wrap everything with Link

const CallToAction = ({ children }: CallToActionProps) => (
  <motion.div
    className={cx(styles.container)}
    // drag
    whileHover={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}
    whileTap={{
      scale: 0.95,
    }}
    // whileDrag={{
    //   scale: 1.1,
    // }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <Heading level="h3">99.co</Heading>
    <p>Helping the 99% find their way home.</p>
    <Arrow />
  </motion.div>
);

export default CallToAction;
