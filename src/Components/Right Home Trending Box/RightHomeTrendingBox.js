import React, { useState, useEffect } from "react";
import styles from "./RightHomeTrendingBox.module.css";
import RightHomeMoreButtonPopover from "../../Molecules/Right Home More Button Popover/RightHomeMoreButtonPopover";

const trendinsData = [
  {
    title1: "Trending in India",
    title2: "#Corruption 💸",
    title3: "Trending with #AchheDin",
    isNotInterested: false,
    id: 1,
  },
  {
    title1: "Trending in Vidarbha",
    title2: "#WaterNotComing 💧",
    title3: "Trending with #Drought",
    isNotInterested: false,
    id: 2,
  },
  {
    title1: "Trending in Jharkhand",
    title2: "#MahuaAddictionGoneBad 🍺",
    title3: "Trending with #HemantSoren",
    isNotInterested: false,
    id: 3,
  },
  {
    title1: "Trending in Hyderabad",
    title2: "#KauvvaBiryaani 🐧",
    title3: "Trending with #VijayRaaz",
    isNotInterested: false,
    id: 4,
  },
  {
    title1: "Trending in Bihar",
    title2: "#BoycottExams 📋",
    title3: "Trending with #LaluJiYadav",
    isNotInterested: false,
    id: 5,
  },
];

function RightHomeTrendingBox() {
  const [trending, setTrendings] = useState(
    JSON.parse(localStorage.getItem("trendingData")) || trendinsData
  );
  const [deletedItems, setDeletedItems] = useState(
    JSON.parse(localStorage.getItem("deletedItems")) || []
  );
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);

  function handleRequestSeeAll() {
    setIsShowingAllTrendings(!isShowingAllTrendings);
  }

  const updateIsNotInterested = (itemId) => {
    const updatedList = trending.filter((item) => item.id !== itemId);
    setTrendings(updatedList);
    setDeletedItems([...deletedItems, itemId]);
    localStorage.setItem("trendingData", JSON.stringify(updatedList));
    localStorage.setItem(
      "deletedItems",
      JSON.stringify([...deletedItems, itemId])
    );
  };

  return (
    <div className={styles.TrendingBoxMainContainer}>
      <h3 className={styles.TrendingBoxHeadingContainer}>What's happening?</h3>
      {trending
        .filter((item) => !deletedItems.includes(item.id))
        .slice(0, isShowingAllTrendings ? trending.length : 2)
        .map((item) => (
          <button key={item.id} className={styles.TrendingBoxButtonContainer}>
            <div className={styles.TrendingBox}>
              <div> {item.title1}</div>
              <div style={{ fontWeight: "bold" }}> {item.title2}</div>
              <div> {item.title3}</div>
            </div>
            <RightHomeMoreButtonPopover
              updateIsNotInterested={updateIsNotInterested}
              id={item.id}
            />
          </button>
        ))}
      <p
        className={styles.TrendingBoxShowMoreContainer}
        onClick={handleRequestSeeAll}
      >
        {isShowingAllTrendings ? "Show Less" : "Show More"}{" "}
      </p>
    </div>
  );
}

export default RightHomeTrendingBox;
