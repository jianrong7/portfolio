import React from "react";

import Heading from "../../shared/Heading/Heading";
import CallToAction from "../../shared/CallToAction/CallToAction";

import styles from "./Work.module.css";

const Work = () => (
  <section id="work">
    <Heading level="h2">Work</Heading>
    <div className={styles.work}>
      <div className={styles.cta_left}>
        <CallToAction
          title="99.co"
          subtitle="Helping the 99% find their way home."
        />
        <CallToAction
          title="DriveSG"
          subtitle="Your best bet in passing your theory test."
          isSmall
        />
      </div>
      <div className={styles.cta_right}>
        <CallToAction
          title="Traceify"
          subtitle="A Spotify clone using the TraceTogether theme"
          isSmall
        />
        <CallToAction
          title="Where&#39;s Waldo"
          subtitle="Spot Waldo game"
          className={styles.lastItem}
        />
      </div>
    </div>
  </section>
);

export default Work;
