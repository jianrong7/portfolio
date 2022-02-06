import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loh Jian Rong | Personal Portfolio</title>
        <meta
          name="description"
          content="Loh Jian Rong is a software engineer currently based in Singapore working with React and Express."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>
            Hello!{" "}
            <span>
              I&#39;m Jian Rong, a Singapore based tech enthusiast and frontend
              engineer working with React.
            </span>
          </h1>
          <div className={styles.headerDetails}>
            <div className={styles.headerDetailsButtons}>
              <a href="#about">
                <Button>About me</Button>
              </a>

              <a href="#work">
                <Button isHollow>Work</Button>
              </a>
            </div>
            <a href="https://twitter.com/jrloh7" className={styles.twitter}>
              @jrloh7
            </a>
          </div>
        </div>
        <section id="about">
          <div className={styles.about}>
            <div>
              <h2>About me</h2>
              <p>
                I am a full-stack developer based in Singapore with a passion
                for building digital services. I started my journey on web
                development since 2020. My main focus is in building high
                quality, performant and scalable code. I make sure to bring
                consistency in UX and tooling across my projects.
              </p>
              <p>
                I recently joined 99.co as a frontend engineer where my work
                will consist of constructing beautiful UI components to help 99%
                of people find their homes. When not online, I love working out
                and reading about all kinds of things.
              </p>
              <Button>Resume</Button>
            </div>
          </div>
        </section>
        <section id="work">
          <h2>Work</h2>
          <div>99.co</div>
          <div>DriveSG</div>
          <div>Traceify</div>
          <div>Where&#39;s Waldo</div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Want to get in touch?</p>
          <p>
            Write me at
            <a href="mailto:lohjianrong7@gmail.com">lohjianrong7@gmail.com</a>.
          </p>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
