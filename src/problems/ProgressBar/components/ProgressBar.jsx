import { useEffect, useState } from "react";
import styles from "./../styles.module.css";

// TODO: improve perf by using tranform instead of width for animation - done
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
      <span
        className={styles.progress}
        style={{
          color: animationProgress < 60 ? "black" : "white",
        }}
      >
        {animationProgress}%
      </span>

      <div
        className={styles.inner}
        style={{
          transform: `scaleX(${animationProgress}%)`,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={animationProgress}
      />
    </div>
  );
};

export default ProgressBar;
