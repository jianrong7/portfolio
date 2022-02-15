import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import cx from "classnames";

import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    function updateState(latest: number) {
      if (latest === 0 || latest === 1) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    }
    const unsubscribeY = scrollYProgress.onChange((latest) =>
      updateState(latest)
    );

    return () => {
      unsubscribeY();
    };
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
