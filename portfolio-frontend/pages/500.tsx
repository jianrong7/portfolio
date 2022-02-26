import Link from "next/link";

import NavBar from "../components/shared/NavBar/NavBar";
import Button from "../components/shared/Button/Button";
import Heading from "../components/shared/Heading/Heading";

import styles from "../styles/Home.module.css";

export default function Custom500() {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.fourOFour}>
          <Heading level="h1">
            Hmmm... Our servers seem to be having some problems. No worries, let
            me fix it up! In the meantime, you can get back to where you were.
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
