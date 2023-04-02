import React, { useState, useEffect } from "react";
import styles from "./FollowButton.module.css";

function FollowButton({ id }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    localStorage.setItem(`isFollowing_${id}`, !isFollowing);
  };

  useEffect(() => {
    const savedFollowing = localStorage.getItem(`isFollowing_${id}`);
    if (savedFollowing === "true") {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [id]);

  return (
    <button className={styles.FollowButtonStyle} onClick={handleClick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;
