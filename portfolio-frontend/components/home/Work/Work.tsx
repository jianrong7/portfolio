import React from "react";
import { useTheme } from "next-themes";

import Heading from "../../shared/Heading/Heading";
import CallToAction from "../../shared/CallToAction/CallToAction";

import styles from "./Work.module.css";

const Work = () => {
  const { theme } = useTheme();

  return (
    <section id="work">
      <Heading level="h2">Work</Heading>
      <div className={styles.work}>
        <div className={styles.cta_left}>
          <CallToAction
            title="99.co"
            subtitle="Helping the 99% find their way home."
            link="99co"
            background={theme === "light" ? "/99-co_light.png" : "/99-co.png"}
          />
          <CallToAction
            title="DriveSG"
            subtitle="Your best bet in passing your theory test."
            isSmall
            link="drivesg"
            background={
              theme === "light" ? "/drivesg_light.png" : "/drivesg.png"
            }
          />
        </div>
        <div className={styles.cta_right}>
          <CallToAction
            title="Traceify"
            subtitle="A Spotify clone using the TraceTogether theme"
            isSmall
            link="traceify"
            background={
              theme === "light" ? "/traceify_light.png" : "/traceify.png"
            }
          />
          <CallToAction
            title="Where&#39;s Waldo"
            subtitle="Spot Waldo game"
            className={styles.lastItem}
            link="where-is-waldo"
            background={
              theme === "light"
                ? "/where-is-waldo_light.png"
                : "/where-is-waldo.png"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
