import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import Link from "next/link";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";

import styles from "./Project.module.css";
import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";
import Button from "../Button/Button";
import { WorkContentInterface } from "../../home/Work/workContent";

const keywords = ["React Native", "Tesseract.js", "Firebase"];

interface ProjectProps extends React.HTMLAttributes<HTMLHeadingElement> {
  data: WorkContentInterface;
}

const Project = ({ data }: ProjectProps) => {
  const { title, description, technologies, githubLink, appLink } = data;
  return (
    <li className={styles.container}>
      <div className={styles.image}>picture</div>
      <div className={styles.content}>
        <Heading level="h3" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>
          {description}
          {/* Mobile quiz application for drivers-to-be to ace their theory tests.
          Available on{" "}
          <UnderlinedLink
            openInNewTab
            href="https://play.google.com/store/apps/details?id=com.jianrong7.drivesg"
          >
            Google Play Store
          </UnderlinedLink>
          . */}
        </p>
        <ul className={styles.keywords}>
          {technologies.map((technology, i) => (
            <li key={`${technology}_${i}`} className={styles.keyword}>
              {technology}
            </li>
          ))}
        </ul>
        <div className={styles.ctas}>
          {githubLink && (
            <Button href={githubLink} isHollow>
              GitHub
            </Button>
          )}
          {appLink && (
            <Button href={appLink} isHollow>
              Open app
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Project;
