import React from "react";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleProfileSection from "../../Sections/Middle Profile Section/MiddleProfileSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.LeftHomeSectionContainer}>
        <LeftHomeSection />
      </div>{" "}
      <div className={styles.MiddleProfileSectionContainer}>
        <MiddleProfileSection />
      </div>
      <div className={styles.RightHomeSectionContainer}>
        <RightHomeSection />
      </div>{" "}
    </div>
  );
}

export default Profile;
