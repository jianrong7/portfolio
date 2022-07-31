import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import Heading from "../../shared/Heading/Heading";
import Project from "../../shared/Project/Project";
import { driveSg, traceify, cryptoWatchlist } from "./workContent";

import styles from "./Work.module.css";

const Work = () => {
  return (
    <section id="work">
      <Heading level="h2">Featured Works</Heading>
      <ul className={styles.projects}>
        <Project data={cryptoWatchlist} />
        <Project data={traceify} />
        <Link href="/blog/drivesg-reflections">
          <a>
            <Project data={driveSg} />
          </a>
        </Link>
      </ul>
    </section>
  );
};

export default Work;
