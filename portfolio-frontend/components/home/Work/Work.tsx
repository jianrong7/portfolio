import React from "react";
import { useTheme } from "next-themes";

import Heading from "../../shared/Heading/Heading";
import CallToAction from "../../shared/CallToAction/CallToAction";
import Project from "../../shared/Project/Project";
import { driveSg, traceify, cryptoWatchlist } from "./workContent";

import styles from "./Work.module.css";

const Work = () => {
  const { theme } = useTheme();

  return (
    <section id="work">
      <Heading level="h2">Featured Works</Heading>
      <ul className={styles.projects}>
        <Project data={driveSg} />
        <Project data={traceify} />
        <Project data={cryptoWatchlist} />
      </ul>
    </section>
  );
};

export default Work;
