import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import Link from "next/link";

import Heading from "../Heading/Heading";
import Arrow from "../Arrow/Arrow";

import styles from "./Project.module.css";

const keywords = ["React Native", "Tesseract.js", "Firebase"];

interface ProjectProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Project = ({}: ProjectProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.image}>picture</div>
      <div className={styles.content}>
        <Heading level="h3">DriveSG</Heading>
        <p>
          Mobile quiz application for drivers-to-be to ace their theory tests
        </p>
        <ul>
          {keywords.map((keyword, i) => (
            <li key={`${keyword}_${i}`}>{keyword}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Project;
