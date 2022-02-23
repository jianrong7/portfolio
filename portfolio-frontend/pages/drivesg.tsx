import type { NextPage } from "next";
import Head from "next/head";

import Heading from "../components/shared/Heading/Heading";
import ProgressBar from "../components/shared/ProgressBar/ProgressBar";
import StickyHeader from "../components/shared/StickyHeader/StickyHeader";

import styles from "../styles/drivesg.module.css";

const DriveSg: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DriveSG | Work</title>
        <meta
          name="description"
          content="DriveSG is a mobile application aimed to help Singaporeans with their driving theory test."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://jianrong-portfolio.vercel.app/drivesg"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="DriveSG | Work" />
        <meta
          property="og:description"
          content="DriveSG is a mobile application aimed to help Singaporeans with their driving theory test."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jrloh7" />
        <meta name="twitter:creator" content="@jrloh7" />
      </Head>
      <StickyHeader title="DriveSG" />
      <main className={styles.main}>
        <div>
          <Heading level="h2">
            Your best bet in passing your driving theory tests.
          </Heading>
        </div>
        <div>
          <Heading level="h3">The Project</Heading>
          <p>
            DriveSG is my first ever cross-platform application using React
            Native. This project was targed at myself. Initially, I had a
            question bank of driving theory test problems, so I wanted a way to
            convert it into a quiz app. I want it to be a bit more interactive,
            so I decided to use my newly learnt React Native skills to build the
            app.
          </p>
          <p>
            Being my first ever &#39;original&#39; project, I tasked myself to
            do everything. This included brainstorming, designing, wireframing,
            building out the frontend, the backend as well as the deployment. I
            had to make several tricky choices throughout the way such as
            deciding how to build out my backend.
          </p>
        </div>
        <div>
          <Heading level="h3">Technical details</Heading>
          <p>
            The frontend is built using React Native, while the backend is being
            hosted on Firebase. This application works on both iOS and Android.
            However, due to the fees required to publish your app in iOS, I have
            only published it in the Google Play Store.
          </p>
        </div>
        <div>
          <Heading level="h3">Personal growth</Heading>
          <p>
            This application made me learnt that building out something useful
            is actually not as straightforward as it seems. This gave me an
            inside look on what it is to be a CEO, a CTO, a designer as well as
            a marketer of your own project.
          </p>
        </div>
        <div>
          <Heading level="h3">Challenges</Heading>
          <p>
            The biggest challenge was to get my scrape the data from the images
            to become JSON data. This meant I had to learn an OCR library. The
            result was not as ideal as I thought at the start. But in the end,
            after several workarounds, I managed to create the JSON data and fix
            it.
          </p>
        </div>
      </main>
      <ProgressBar />
    </div>
  );
};

export default DriveSg;
