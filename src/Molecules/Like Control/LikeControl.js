import styles from "./LikeControl.module.css";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function LikeControl() {
  const [color, setColor] = useState(<FavoriteBorderIcon />);
  const [isFavorited, setIsFavorited] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setColor(<FavoriteIcon style={{ color: "red" }} />);
    setIsFavorited(!isFavorited);
    setCounter(counter === 0 ? 1 : 0);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {isFavorited ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
      <p className={styles.CounterParaStyle}>{counter === 0 ? "" : "1"}</p>
    </div>
  );
}

export default LikeControl;
