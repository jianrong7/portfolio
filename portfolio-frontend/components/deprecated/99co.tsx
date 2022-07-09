import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";

import Heading from "../shared/Heading/Heading";
import StickyHeader from "../shared/StickyHeader/StickyHeader";
import ProgressBar from "../shared/ProgressBar/ProgressBar";

import { ninetyNineCoMetaTags } from "../../lib/meta";

import styles from "../styles/WorkPage.module.css";

const NinetyNineCo: NextPage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <Head>
        <title>{ninetyNineCoMetaTags.title}</title>
        <meta name="description" content={ninetyNineCoMetaTags.description} />
        <meta name="keywords" content={ninetyNineCoMetaTags.keywords} />
        <meta name="image" content={ninetyNineCoMetaTags.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={ninetyNineCoMetaTags.url} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={ninetyNineCoMetaTags.title} />
        <meta
          property="og:description"
          content={ninetyNineCoMetaTags.description}
        />
        <meta property="og:url" content={ninetyNineCoMetaTags.url} />
        <meta property="og:image" content={ninetyNineCoMetaTags.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jianrong7_" />
        <meta name="twitter:creator" content="@jianrong7_" />
        <meta name="twitter:title" content={ninetyNineCoMetaTags.title} />
        <meta
          name="twitter:description"
          content={ninetyNineCoMetaTags.description}
        />
        <meta name="twitter:image" content={ninetyNineCoMetaTags.image} />
        <meta name="twitter:alt" content={ninetyNineCoMetaTags.title} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <StickyHeader title="99.co" />

      <main className={styles.main}>
        <div>
          <Heading level="h2" className={styles.subtitle}>
            To build the simplest and most trusted platform to help
            un-complicate the property journey and help the 99% find their way
            home.
          </Heading>
        </div>
        <div>
          <Heading level="h3">The Project</Heading>
          <p>
            99.co is my first ever foray into professional development. Being a
            self taught developer, it was daunting to find my first professional
            opportunity to make real world impact. This was my first ever
            opportunity to make such an impact. I was grateful for 99.co for
            giving me the opportunity to learn and develop for home-seekers in
            the region.
          </p>
          <p>
            Throughout my stint as a frontend engineer, I was building
            performant and modern code using the best practices I learnt. Along
            the way, it deepened my understanding of tools that were rarely
            needed for smaller projects. This includes using Redux very
            extensively. Although there was a lot of hate for Redux in the
            community, only when I started working on a larger codebase like
            99.co&#39;s, was I able to understand and appreciate the usefulness
            of Redux.
          </p>
        </div>
        <div>
          <Heading level="h3">Technical details</Heading>
          <p>
            This internship stint got me to relook at my Redux knowledge and the
            Flux architecture. Throughout the coding process, I also tried my
            best to adopt modern code practices like using Redux hooks such as{" "}
            <code>useSelector</code>. I also got to take a peek at how
            production grade code handles caching, does Dockerization as well as
            build out robust bash scripts for deployment. Being the first time
            working with multiple developers, I also got to truly utilise the
            powers of Git and GitHub. Being able to split up our work into
            different branches and then merging it for the final product is so
            amazing.
          </p>
        </div>
        <div>
          <Heading level="h3">Personal growth</Heading>
          <p>
            To be done at a later date when I have more things to talk about.
            But for now, I learnt a lot about being a good communicator,
            especially when talking to both engineers and non-technical people.
            It is important for them to be able to understand the context, and
            that is what makes a programmer productive and useful in the working
            environment.
          </p>
        </div>
        <div>
          <Heading level="h3">Challenges</Heading>
          <p>
            Probably the most challenging part of the internship was dealing
            with legacy code. Being a rather old codebase and in a fast paced
            environment, it is regular for me to traverse through old class
            components with not much splitting of code. Think 700 lines of code
            in one file. Often times, this leads to several unwanted styling
            bugs, and it makes it hard for others to read.
          </p>
        </div>
      </main>
      <ProgressBar />
    </motion.div>
  );
};

export default NinetyNineCo;
