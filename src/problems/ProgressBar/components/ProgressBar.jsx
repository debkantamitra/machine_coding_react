import { useEffect, useState } from "react";
import styles from "./../styles.module.css";

// TODO: improve perf by using tranform instead of width for animation
const ProgressBar = ({ progress }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(progress);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.outer}>
      <div
        className={styles.inner}
        style={{
          color: animationProgress < 5 ? "black" : "white",
          width: `${animationProgress}%`,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={animationProgress}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
