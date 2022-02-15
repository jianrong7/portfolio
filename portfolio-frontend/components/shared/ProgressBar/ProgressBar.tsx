import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import cx from "classnames";

import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((latest) =>
      latest === 0
        ? setIsHidden(true)
        : latest === 1
        ? setIsHidden(true)
        : setIsHidden(false)
    );
  }, [scrollYProgress]);

  return (
    <aside className={styles.aside}>
      <motion.div
        className={cx(styles.progressBarDiv, {
          [styles.hide]: isHidden,
        })}
      >
        <motion.div
          className={styles.progressBar}
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
      </motion.div>
    </aside>
  );
};

export default ProgressBar;
