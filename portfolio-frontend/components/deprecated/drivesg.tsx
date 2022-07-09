import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Heading from "../shared/Heading/Heading";
import ProgressBar from "../shared/ProgressBar/ProgressBar";
import StickyHeader from "../shared/StickyHeader/StickyHeader";

import { driveSgMetaTags } from "../../lib/meta";

import styles from "../styles/WorkPage.module.css";

const DriveSg: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{driveSgMetaTags.title}</title>
        <meta name="description" content={driveSgMetaTags.description} />
        <meta name="keywords" content={driveSgMetaTags.keywords} />
        <meta name="image" content={driveSgMetaTags.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={driveSgMetaTags.url} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={driveSgMetaTags.title} />
        <meta property="og:description" content={driveSgMetaTags.description} />
        <meta property="og:url" content={driveSgMetaTags.url} />
        <meta property="og:image" content={driveSgMetaTags.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={driveSgMetaTags.title} />
        <meta
          name="twitter:description"
          content={driveSgMetaTags.description}
        />
        <meta name="twitter:image" content={driveSgMetaTags.image} />
        <meta name="twitter:alt" content={driveSgMetaTags.title} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <StickyHeader title="DriveSG" />
      <main className={styles.main}>
        <div className={styles.header}>
          <Heading level="h2">
            Your best bet in passing your driving theory tests.
          </Heading>
          <Image
            src="/drivesg/drivesg_banner.png"
            alt="DriveSG, your best bet at passing the driving theory tests in Singapore."
            width={700}
            height={341}
          />
        </div>
        <div>
          <Heading level="h3">🔑 Why I started building this app</Heading>
          <p>
            I wanted to work on a project using my newly learnt{" "}
            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              React Native
            </a>{" "}
            skills from{" "}
            <a
              href="https://fullstackopen.com/en/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Full Stack Open
            </a>
            . At that time, I was also practising for driving theory tests in
            Singapore. The process was pretty boring. It goes something like
            this.
          </p>
          <ol>
            <li>Read the Highway Code book.</li>
            <li>
              Search up the Internet for{" "}
              <a
                href="https://www.tptest.sg/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                practice resources
              </a>
              .
            </li>
            <li>Sign up for practice tests.</li>
            <li>Go for the test.</li>
          </ol>
          <p>
            Since I managed to get additional resources, I thought I could make
            them into extra practice for people like me, who want to do the test
            at the convenience of their home or anywhere they are. That would
            give people more confidence when they were actually going to do the
            actual test.
          </p>
          <p>
            I thought that this app would be a great combination of both worlds.
            I get to practice my RN skills while helping out others who wanted
            to get their driving license.
          </p>
        </div>
        <div>
          <Heading level="h3">🏗️ How I built it</Heading>
          <Heading level="h4">Front End</Heading>
          <p>
            I built this using{" "}
            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              React Native
            </a>
            , through the{" "}
            <a
              href="https://expo.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Expo CLI
            </a>
            . I have been learning frontend development for almost half a year
            now. When I heard that I could use my{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              React.js
            </a>{" "}
            skills to create a mobile app, I got very excited. However, after
            going through some tutorials, I realize the limitations of that but
            I decided that it was still good enough for my not-so-complicated
            app. I wanted to use it to showcase my skills after going through{" "}
            <a
              href="https://www.tptest.sg/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              The Odin Project
            </a>{" "}
            and{" "}
            <a
              href="https://fullstackopen.com/en/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Full Stack Open
            </a>
            .
          </p>
          <p>
            The routing and navigation were largely handled by{" "}
            <a
              href="https://reactnavigation.org/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              React Navigation
            </a>
            . Although it offered pretty good UI and functionality out of the
            box, I was a bit limited by its customizability. I still stuck with
            it because I felt like the trade-off was fair and it got the app up
            and running very quickly. In the end, I am glad I used the library,
            my experience with it was generally positive although I still cannot
            remove the border from the header after scrolling through countless
            of{" "}
            <a
              href="https://github.com/react-navigation/react-navigation/issues/865"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Github threads
            </a>
            .
          </p>
          <Heading level="h4">Back End</Heading>
          <p>
            When I was deciding what to use for my backend, I originally wanted
            to build my own REST API using{" "}
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Express
            </a>{" "}
            and{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              MongoDB
            </a>
            . I thought that it would be helpful because others could
            potentially fetch data from the API in the future when they want to
            create their own application. I even thought about using{" "}
            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              GraphQL
            </a>
            . In the end, however, I used neither. GraphQL was overkill because
            this app did not require me to worry about over or under fetching of
            data. I only needed to fetch 50 questions and answers every time the
            user attempts a test.
          </p>
          <p>
            Keeping in mind that I wanted the application quickly up and
            running, I decided to use{" "}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Firebase
            </a>
            . Its simplicity made the development process a breeze and I am glad
            I picked a BaaS to complete this project. In the future, maybe I
            will look into creating my own REST API which can be more flexible.
          </p>
        </div>
        <div>
          <Heading level="h3">😔 Problems I faced</Heading>
          <Heading level="h4">Extracting text from the image</Heading>
          <p>
            One of the biggest problems I faced was extracting the text from
            images. Originally all my questions are in image format. This meant
            that I had to find a way to extract text from images. Naturally,
            Google told me to use Optical Character Recognition (OCR)
            technology. My first thought was to go find a JS library that does
            just that. In the end, I used{" "}
            <a
              href="https://tesseract.projectnaptha.com/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Tesseract.js
            </a>
            . I thought the magical AI tools can help me extract my text
            perfectly. Boy, how wrong was I.
          </p>
          <p>
            The text extracted had lots of empty spaces and gibberish because
            the text was sparse and their fonts were also inconsistent. I went
            to search up on how to improve the accuracy of my results and
            several suggestions pointed me to use OpenCV. I thought about diving
            down the rabbit hole of Artificial Intelligence, but I realised that
            was not my goal. My goal was to create a working prototype quickly
            and it did not need to be 100% accurate.
          </p>
          <p>
            In the end, I used a very crude method of dividing all the images
            into several rectangles and used Tesseract.js to extract the text
            for me. The results, though not perfect, were much better.
          </p>
          <Heading level="h4">Cropping images from an image</Heading>
          <p>
            Another problem I faced was trying to get the images from the
            questions. As some questions had images, I had to do a mass cropping
            of the images. I thought about using CropperJS but in the end, I
            found a shorter workaround of using Photoshop’s Automate Batch jobs.
            It did the trick after watching a tutorial video.
          </p>
          <Heading level="h4">
            Linking pictures from Storage to Firestore
          </Heading>
          <p>
            As Firebase Storage did not support NodeJS, I faced a problem in
            linking the images from Firebase Storage to my questions in Cloud
            Firestore. In the end, I found a workaround whereby I listed all the
            files in Firebase Storage and then used NodeJS to update the
            documents in Firestore with the image links.
          </p>
        </div>
        <div>
          <Heading level="h3">📕 What I learnt</Heading>
          <p>
            Applying the technology in real life isn’t as straightforward as I
            thought. There are many problems that will come up unexpectedly
            along the way. As much as possible, plan out the architecture of the
            project, but be mentally ready and flexible enough to learn new
            technologies (Photoshop, Figma) to solve the problems at hand.
          </p>
          <p>
            This project also taught me that one developer alone can actually
            complete a lot but it is also not the most ideal because I kept
            asking my friends for opinions, whether it was related to its design
            or its functionality.
          </p>
          <p>
            Also, the last 10% of the project took up 90% of my time. Things
            like fixing bugs, removing input errors, making the buttons
            recognize a touch slightly out of the button. These things take up
            the most time. Although they do not add significantly to the core
            functionality of the app, they contribute massively to the user
            experience.
          </p>
          <p>
            This was also my first time pushing an application to the Google
            Play Store. Thanks to Expo CLI, I got the App Bundle relatively
            quickly, however, the process of reviewing the app and getting the
            actual working product uploaded to the app store was relatively
            slow. It taught me the importance of planning as well as the
            emphasis on testing the application before actually publishing the
            application.
          </p>
        </div>
        <div>
          <Heading level="h3">🤔 What’s next?</Heading>
          <p>
            DriveSG is definitely not a complete product. There are still
            certain places that I will touch up here and there. But it is mostly
            usable and can be considered a Minimum Viable Product (MVP).
          </p>
          <p>Like what Sheryl Sandberg said, “Done is better than perfect.”</p>
          <p>
            I am glad to be able to ship the app to production. The job is done,
            but it is far from perfect.
          </p>
          <ul>
            <li>Implement my own backend using Express.js and MongoDB</li>
            <li>
              User authentication system to save the history of user attempts
            </li>
          </ul>
        </div>
        <div>
          <Heading level="h3">🍎 Getting the iOS version running</Heading>
          <p>
            One of the main reasons I used React Native was because I wanted a
            mobile application that worked on both Android and iOS devices while
            sharing a common codebase. Thankfully, the process was very smooth,
            largely because this application is not too complicated but also
            because the Expo CLI made the process much smoother with their
            detailed guides. Within an hour, I could get the production
            application up and running on the iOS simulator. It was really
            fascinating to see my application working on two completely
            different platforms.
          </p>
          <p>
            The React Native team is doing a great job and I would definitely
            use React Native more in the future. Being able to transfer my React
            and JavaScript knowledge directly into building a mobile application
            is really convenient, and I think most developers believe that
            developer experience triumphs all.
          </p>
          <p>
            Although the React Native hype is no longer as great, the RN team
            has still been very active, keeping RN updated and consistently
            posting their vision for RN. It is also nice to see that RN is being
            used by parts of the Facebook application, showing that it is still
            feasible to use RN for a large scale application across platforms.
            In tandem with Facebook’s vision to become{" "}
            <a
              href="https://www.theverge.com/22588022/mark-zuckerberg-facebook-ceo-metaverse-interview"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              ‘a metaverse company’,
            </a>
            the RN developers are also trying to make RN for VR. With the
            competition from Flutter, the RN team continues to show their
            determination to continuously innovate on their framework and
            improve it.
          </p>
        </div>
        <div>
          <Heading level="h3">Technologies used</Heading>
          <ul>
            <li>React Native</li>
            <li>React Navigation</li>
            <li>React Native Progress</li>
            <li>Expo CLI</li>
            <li>Firebase</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Tesseract.js</li>
          </ul>
        </div>
      </main>
      <ProgressBar />
    </div>
  );
};

export default DriveSg;
