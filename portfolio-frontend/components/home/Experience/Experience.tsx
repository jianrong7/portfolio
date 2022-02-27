import React, { useState } from "react";
import { useTheme } from "next-themes";
import { isMobile } from "react-device-detect";

import Heading from "../../shared/Heading/Heading";

import styles from "./Experience.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    title: "Learning",
    company: "The Odin Project",
    companyUrl: "https://www.theodinproject.com/",
    time: "Mar 2021 - Jun 2021",
    points: [
      "Learnt the basics of HTML and CSS here",
      "Built several projects from scratch",
      "Deeply understand how the browser works with vanilla JavaScript",
      "Built several projects using modern React and Firebase",
      "Utilised Express to built backend servers with MongoDB",
    ],
    technologies: [
      { src: "/javascript.png", alt: "javascript" },
      { src: "/react.png", alt: "react" },
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "99.co",
    companyUrl: "https://www.99.co/",
    time: "Jan 2022 - Present",
    points: [
      "Worked in the SEO scrum team to boost the site's organic search performance",
      "Used React and Redux to create modern and performant functional components",
      "Modernized components by making them more readable using hooks",
      "Organic search result improved from 6th spot to 2nd spot, increasing traffic by 9% week-on-week",
      "SEO became number 1 source of traffic among organic sources",
    ],
    technologies: [
      { src: "/javascript.png", alt: "javascript" },
      { src: "/react.png", alt: "react" },
      { src: "/redux.svg", alt: "redux" },
    ],
  },
];

const description = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 0,
    y: -30,
    scale: 0.1,
  },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const Experience = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section id="experience" className={styles.container}>
      <Heading level="h2">Experience</Heading>
      <div className={styles.experience}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.company : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            <Heading level="h2" className={styles.title}>
              {selectedTab.title}{" "}
              <a
                className={styles.company}
                href={selectedTab.companyUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                @ {selectedTab.company}
              </a>
            </Heading>
            <p className={styles.time}>{selectedTab.time}</p>
            <ul className={styles.list}>
              {selectedTab.points.map((point, index) => (
                <li key={`${point}_${index}`}>{point}</li>
              ))}
            </ul>
            <Heading level="h3" className={styles.techTitle}>
              Tech stack:
            </Heading>
            <div className={styles.iconsDiv}>
              {selectedTab.technologies.map((technology, index) => (
                <motion.div
                  key={`${technology}_${index}`}
                  className={styles.icon}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <Image
                    src={
                      theme === "light"
                        ? technology.src.slice(0, -4) +
                          "_light" +
                          technology.src.slice(-4)
                        : technology.src
                    }
                    alt={technology.alt}
                    width={36}
                    height={36}
                  />
                  {isMobile ? (
                    <span className={styles.iconDescription}>
                      {technology.alt}
                    </span>
                  ) : (
                    <motion.span
                      className={styles.iconDescription}
                      variants={description}
                    >
                      {technology.alt}
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <ul className={styles.tabs}>
          {tabs.map((tab, index) => (
            <li
              onClick={() => setSelectedTab(tab)}
              key={`${tab}_${index}`}
              className={styles.tab}
            >
              {tab.company}
              {tab === selectedTab && (
                <motion.div className={styles.underline} layoutId="underline" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
