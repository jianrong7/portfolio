import React from "react";
import Image from "next/future/image";

import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { WorkContentInterface } from "../../home/Work/workContent";

import styles from "./Project.module.css";

interface ProjectProps extends React.HTMLAttributes<HTMLLinkElement> {
  data: WorkContentInterface;
}

const Project = ({ data }: ProjectProps) => {
  const { title, description, technologies, githubLink, appLink, image } = data;
  return (
    <li className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={image.src}
            height={image.height}
            width={image.width}
            alt={image.alt}
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        <Heading level="h3" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
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
