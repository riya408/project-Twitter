import React from "react";
import styles from "./SearchBox.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
  return (
    <div className={styles.SearchBoxContainer}>
      <SearchIcon />
      <input
        className={styles.InputFieldContainer}
        placeholder="Search Twitter"
      ></input>
    </div>
  );
}

export default SearchBox;
