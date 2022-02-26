import Link from "next/link";

import NavBar from "../components/shared/NavBar/NavBar";
import Button from "../components/shared/Button/Button";
import Heading from "../components/shared/Heading/Heading";

import styles from "../styles/Home.module.css";

export default function Custom404() {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.fourOFour}>
          <Heading level="h1">
            Oh no! You arrived at an unknown place. Don&#39;t worry, I will get
            you back!
          </Heading>
          <div className={styles.fourOFourButtons}>
            <Link href="/" passHref>
              <Button>Back to Portfolio</Button>
            </Link>
            <Link href="/blog" passHref>
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
