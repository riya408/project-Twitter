import React from "react";
import LeftHomeButtons from "../../Components/Left Home Buttons/LeftHomeButtons";
import styles from "./LeftHomeSection.module.css";
import LeftHomeDialog from "../../Components/Left Home Dialog/LeftHomeDialog";
import LeftHomePopover from "../../Molecules/Left Home Popover/LeftHomePopover";

function LeftHomeSection() {
  return (
    <div className={styles.LeftHomeSectionMainContainer}>
      <LeftHomeButtons />
      <LeftHomeDialog />
      <LeftHomePopover />
    </div>
  );
}

export default LeftHomeSection;
