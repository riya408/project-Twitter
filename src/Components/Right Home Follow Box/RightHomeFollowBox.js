import React, { useState } from "react";
import styles from "./RightHomeFollowBox.module.css";
import FollowButton from "../../Molecules/Follow Button/FollowButton";

const whotofollowData = [
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
        alt="drstrange"
      />
    ),
    title1: "Doctor Strange ",
    title2: "@DoctorStrange",
    button: <FollowButton id={1} />,
    isFollowed: false,
  },
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/909698/scarlet-witch_marvel_square.jpg"
        alt="scarletwitch"
      />
    ),
    title1: "Scarlet Witch",
    title2: "@ScarletWitch",
    button: <FollowButton id={2} />,
    isFollowed: false,
  },
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
        alt="spidey"
      />
    ),
    title1: "Spider Man",
    title2: "@SpiderMan",
    button: <FollowButton id={3} />,
    isFollowed: false,
  },
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/3002082/the-incredible-hulk_marvel_square.jpg"
        alt="hulk"
      />
    ),
    title1: "Incredible Hulk",
    title2: "@HulkSmash",
    button: <FollowButton id={4} />,
    isFollowed: false,
  },
];

function RightHomeFollowBox() {
  const [isShowing, setIsShowing] = useState(false);
  const [followData, setFollowData] = useState(whotofollowData);

  const handleShowMore = () => {
    setIsShowing(!isShowing);
  };

  const handleFollow = (id) => {
    const updatedFollowData = followData.map((data) => {
      if (data.id === id) {
        return { ...data, isFollowed: !data.isFollowed };
      }
      return data;
    });
    setFollowData(updatedFollowData);
  };

  return (
    <div className={styles.FollowBoxMainContainer}>
      <h3 className={styles.FollowBoxHeadingContainer}>Who to follow</h3>
      {whotofollowData
        .slice(0, isShowing ? whotofollowData.length : 2)
        .map((user, index) => (
          <button key={index} className={styles.FollowBoxButtonContainer}>
            <div style={{ marginLeft: "0.5rem" }}>{user.photo}</div>
            <div className={styles.FollowBox}>
              <div style={{ fontWeight: "bold" }}>{user.title1}</div>
              <div>{user.title2}</div>
            </div>
            <div>
              <FollowButton
                id={index}
                isFollowed={user.isFollowed}
                onFollowToggle={() => handleFollow(index)}
              />
            </div>
          </button>
        ))}
      <p className={styles.FollowBoxShowMoreContainer} onClick={handleShowMore}>
        {isShowing ? "Show Less" : "Show More"}
      </p>
    </div>
  );
}

export default RightHomeFollowBox;
