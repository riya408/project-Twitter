import React, { useState } from "react";

import tweetStyle from "../TrendingTweets/TrendingTweet.module.css";
import { trendsArr } from "../../constData";

export default function CustomTweets() {
  const [isopen, setIsopen] = useState(false);


  const [trendsList, setTrendList] = useState(trendsArr.slice(0, 2));

  function handleClick(i) {
    setIsopen(true);
  }
  function handleInterest(i) {
    trendsList.splice(i, 1);
    setTrendList([...trendsList]);
    // console.log(i)
    // const clickedIndex=trendsArr.map((ele)=>ele.activityHandler===items.activityHandler)
    // console.log(clickedIndex)
    //  find index of clicked item
    //    clickedIndex[0]=false
  }
  // const [trending,setTrending]=useState(trendsArr.slice(0,2))
  const [isShowingAllTrends, setIsShowingAllTrends] = useState(false);

  function handleRequestAll() {
    setIsShowingAllTrends(!isShowingAllTrends);
    if (isShowingAllTrends) {
      return setTrendList(trendsList.slice(0, 2));
    }
    setTrendList(trendsArr);
  }

  return (
    <>
      {/* {isopen?
        <div className={tweetStyle.box}>
         <div onClick={()=>handleInterest()} > Not Interested</div>
         <div>This trend is harmful or spammy</div>
         </div>
         
         
         :""} */}

      <div className={tweetStyle.container}>
        {trendsList.map(
          (items, i) =>
            // console.log(i,"========")
            items.isNotInterested && (
              <div key={items.id} className={tweetStyle.list}>
                <div className={tweetStyle.data}>
                  <div className={tweetStyle.lowerContainer}>
                    <div>
                      <div className={tweetStyle.para}>{items.activity}</div>
                      <div className={tweetStyle.heading}>
                        {items.activityHandler}
                      </div>
                      <div className={tweetStyle.text}>{items.tweeted}</div>
                    </div>

                    <div
                      onClick={() => handleClick(i)}
                      className={tweetStyle.icon}
                    >
                      {items.icon}
                    </div>
                    {isopen && (
                      <div className={tweetStyle.box}>
                        <div
                          onClick={() => handleInterest(i)}
                          className={tweetStyle.interest}
                        >
                          {" "}
                          Not Interested
                        </div>
                        {/* {console.log(i,"kfjfkdfh")} */}
                        <div>This trend is harmful or spammy</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {trendsList.length && (
        <div className={tweetStyle.show} onClick={handleRequestAll}>
          {isShowingAllTrends ? "Show Less" : "Show More"}
        </div>
      )}
    </>
  );
}
