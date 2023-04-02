import React from "react";
import { useNavigate } from "react-router-dom";
import { ReplyAtom } from "../../Recoil State/Reply State/ReplyAtom";
import styles from "./MiddleThreadSection.module.css";
import { ThreadAtom } from "../../Recoil State/Thread Atom/ThreadAtom";
import { useRecoilValue } from "recoil";
import CommentBox from "../../Components/Comment Box/CommentBox";
import CommentControl from "../../Molecules/Comment Control/CommentControl";
import RetweetControl from "../../Molecules/Retweet Control/RetweetControl";
import LikeControl from "../../Molecules/Like Control/LikeControl";
import ViewControl from "../../Molecules/View Control/ViewControl";
import UserCommentTemplate from "../../Components/User Comment Template/UserCommentTemplate";
import FloatingActionButton from "../../Components/Floating Action Button/FloatingActionButton";

function MiddleThreadSection() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));

  let navigate = useNavigate();
  const threadReadDetails = useRecoilValue(ThreadAtom);
  const postComment = useRecoilValue(ReplyAtom);

  function redirectToPeopleProfile(element) {
    // setTweetDetailsProfile(element)
    localStorage.setItem("otherUserDetails", JSON.stringify(element));
    navigate("/peopleprofile");
  }

  return (
    <div className={styles.MiddleHomeTopBoxContainer}>
      <h3 className={styles.MiddleHomeTopBoxHeadingContainer}>Tweet</h3>
      <div className={styles.MiddleHomeTweetBoxButtonContainer}>
        <div className={styles.MiddleHomeTweetBoxGrid}>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "1.2rem", cursor: "pointer" }}>
              {" "}
              <img
                onClick={() => redirectToPeopleProfile()}
                className={styles.userProfle}
                src={threadReadDetails.profilePic}
                alt="profilePic"
              />
            </div>
            <div
              style={{
                fontWeight: "bold",
                marginTop: "1.2rem",
                fontSize: "0.9375rem",
                cursor: "pointer",
                position: "relative",
                right: "0.4rem",
              }}
            >
              {" "}
              {threadReadDetails.name}
            </div>
            <div
              style={{
                marginTop: "1.2rem",
                fontSize: "0.9375rem",
                marginLeft: "0.3rem",
                cursor: "pointer",
                position: "relative",
                right: "0.4rem",
              }}
            >
              {" "}
              {threadReadDetails.handlerName}
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

        <div
          onClick={() => redirectToPeopleProfile()}
          style={{
            fontSize: "1rem",
            textAlign: "left",
            marginLeft: "5.55rem",
            position: "relative",
            bottom: "3.2rem",
            cursor: "pointer",
          }}
        >
          {" "}
          {threadReadDetails.tweets[0].tweetText}
        </div>
        <div className={styles.tweetPicContainer}>
          {" "}
          <img
            onClick={() => redirectToPeopleProfile()}
            className={styles.tweetPic}
            src={threadReadDetails.tweets[0].tweetPic}
            alt="tweetPic"
          />
        </div>
        <div
        className={styles.ControlButtonsContainer}
         
        >
          <CommentControl />
          <RetweetControl style={{ fontSize: "5rem" }} />
          <LikeControl style={{ fontSize: "1.4rem" }} />
          <ViewControl />
        </div>
        <CommentBox />

        {postComment.map((element, index) => (
          <button
            key={index}
            className={styles.MiddleHomeTweetBoxButtonContainer}
          >
            <div className={styles.MiddleHomeTweetBoxGrid}>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "0.7rem", cursor: "pointer" }}>
                  {" "}
                  <img
                    className={styles.userProfle}
                    src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
                    alt="profilePic"
                  />
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "0.9rem",
                    fontSize: "0.9375rem",
                    marginLeft: "0.2rem",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  {element.name}
                </div>
                <div
                  style={{
                    marginTop: "0.9rem",
                    fontSize: "0.9375rem",
                    marginLeft: "0.3rem",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  {element.handlerName}
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

            <div
              style={{
                fontSize: "1rem",
                textAlign: "left",
                marginLeft: "5.1rem",
                position: "relative",
                bottom: "2.4rem",
              }}
            >
              {" "}
              {element.tweetReplyText}
            </div>
            <div
              style={{
                marginLeft: "1rem",
                position: "relative",
                left: "1rem",
                bottom: "1.2rem",
                cursor: "pointer",
              }}
            >
              {" "}
              {element.tweetPic ? (
                <img
                  className={styles.tweetPic}
                  src={element.tweetPic}
                  alt="tweetPic"
                />
              ) : (
                ""
              )}
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
          </button>
        ))}
      </div>
      {/* <UserCommentTemplate /> */}
    </div>
  );
}

export default MiddleThreadSection;
