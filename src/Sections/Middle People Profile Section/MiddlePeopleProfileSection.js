import React from "react";
import styles from "./MiddlePeopleProfileSection.module.css";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserTweetTemplate from "../../Components/User Tweet Template/UserTweetTemplate";
import { Link } from "react-router-dom";
import CommentControl from "../../Molecules/Comment Control/CommentControl";
import RetweetControl from "../../Molecules/Retweet Control/RetweetControl";
import LikeControl from "../../Molecules/Like Control/LikeControl";
import ViewControl from "../../Molecules/View Control/ViewControl";
import FollowButton from "../../Molecules/Follow Button/FollowButton";
import FloatingActionButton from "../../Components/Floating Action Button/FloatingActionButton";

function MiddlePeopleProfileSection() {
  const UserTweets = JSON.parse(localStorage.getItem("otherUserDetails"));

  return (
    <div className={styles.ProfileMainContainer}>
      <div className={styles.ProfileHeadingContainer}>
        <h3 className={styles.ProfileHeading3Container}>
          {" "}
          <Link to="/home">
            <ArrowBackIcon className={styles.ArrowBackIconContainer} />
          </Link>
          {UserTweets.name}{" "}
        </h3>
        <p className={styles.ProfileHeadingParaContainer}>1 Tweet</p>
      </div>
      <span className={styles.ProfilePhotoContainer}>
        <img
          className={styles.ProfilePhotoImageContainer}
          src={UserTweets.profilePic}
          alt="snub"
        ></img>
      </span>
      <div className={styles.ProfileDetailsContainer}>
        <p className={styles.ProfileNameContainer}>{UserTweets.name} </p>
        <p className={styles.ProfileHandlerNameContainer}>
          {UserTweets.handlerName}
        </p>
        <div className={styles.CalenderDivContainer}>
          <CalendarMonthIcon
            className={styles.CalenderMonthIconContainer}
            style={{
              position: "relative",
              top: "1.1rem",
              marginLeft: "0.8rem",
              fontSize: "1.2rem",
            }}
          />
          <p className={styles.JoiningDateContainer}> Joined January 2023</p>
        </div>
        <div className={styles.FollowStatisticsContainer}>
          <p>
            <span style={{ fontWeight: "bolder" }}> 8</span> Following{" "}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bolder" }}> 0</span> Followers
          </p>
        </div>
        <CustomButton className={styles.FollowButton} buttonText="Follow" />{" "}
        <div className={styles.FourButtonCollectiveContainer}>
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Tweets"
          />
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Replies"
          />
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Media"
          />
          <CustomButton
            className={styles.ProfileTodoButton}
            buttonText="Likes"
          />
        </div>
      </div>

      <div className={styles.MiddleHomeTweetBoxButtonContainer}>
        <div className={styles.MiddleHomeTweetBoxGrid}>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "1.2rem", cursor: "pointer" }}>
              {" "}
              <img
                className={styles.userProfle}
                src={UserTweets.profilePic}
                alt="profilePic"
              />
            </div>
            <div className={styles.PeopleNameContainer}> {UserTweets.name}</div>
            <div className={styles.PeopleHandlerNameContainer}>
              {" "}
              {UserTweets.handlerName}
            </div>
          </div>
          {/* <div
                style={{
                  textAlign: "right",
                  marginTop: "0.8rem",
                  marginRight: "0.3rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                <MiddleHomePopover />
              </div> */}
        </div>

        <div className={styles.PeopleTweetTextContainer}>
          {" "}
          {UserTweets.tweets[0].tweetText}
        </div>
        <div className={styles.tweetPicContainer}>
          {" "}
          <img
            className={styles.tweetPic}
            src={UserTweets.tweets[0].tweetPic}
            alt="tweetPic"
          />
        </div>
        <div className={styles.ControlButtonsContainer}>
          <CommentControl />
          <RetweetControl style={{ fontSize: "5rem" }} />
          <LikeControl style={{ fontSize: "1.4rem" }} />
          <ViewControl />
        </div>
        <div className={styles.FloatingActionButton}>
        <FloatingActionButton />
      </div>
      </div>
    </div>
  );
}

export default MiddlePeopleProfileSection;
