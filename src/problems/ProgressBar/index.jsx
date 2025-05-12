import React from "react";
import styles from "./styles.module.css";
import ProgressBar from "./components/ProgressBar";

// we've to create a progress bar component which shows progress like 50%, 70% etc
// the progress bar should have animation on load
// the progress bar should properly show the percentage in all the cases: 0%, < 5%, > 95%

const progressList = [0, 10, 25, 50, 99, 75];

const index = () => {
  return (
    <div className={styles.container}>
      <h1>Progress Bar</h1>

      {progressList.map((item) => (
        <ProgressBar progress={item} />
      ))}
    </div>
  );
};

export default index;
