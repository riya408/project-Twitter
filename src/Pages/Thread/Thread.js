import React from "react";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleThreadSection from "../../Sections/Middle Thread Section/MiddleThreadSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import styles from "./Thread.module.css";

function Thread() {
  return (
    <div className={styles.ThreadContainer}>
      <div className={styles.LeftHomeSectionContainer}>
        <LeftHomeSection />
      </div>
      <div className={styles.MiddleThreadSectionContainer}>
        <MiddleThreadSection />
      </div>
      <div className={styles.RightHomeSectionContainer}>
        <RightHomeSection />
      </div>
    </div>
  );
}

export default Thread;
