import React from "react";
import styles from "./UserCommentTemplate.module.css";
import { useRecoilValue } from "recoil";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import CommentControl from "../../Molecules/Comment Control/CommentControl";
import RetweetControl from "../../Molecules/Retweet Control/RetweetControl";
import LikeControl from "../../Molecules/Like Control/LikeControl";
import ViewControl from "../../Molecules/View Control/ViewControl";

function UserCommentTemplate() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));

  const UserPostData = useRecoilValue(UserPost);

  return (
    <div>
      {UserPostData.map((element, index) => (
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
                {matchedUserDetails.Email || matchedUserDetails.Phone}
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
                @{matchedUserDetails.Name}
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
            {element.commentText}
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
                width="450rem"
              />
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.5rem",
              marginLeft: "7rem",
              marginRight: "4rem",
              cursor: "pointer",
              position: "relative",
              bottom: "0.8rem",
              cursor: "pointer",
            }}
          >
            <CommentControl />
            <RetweetControl style={{ fontSize: "5rem" }} />
            <LikeControl style={{ fontSize: "1.4rem" }} />
            <ViewControl />
          </div>
        </button>
      ))}
    </div>
  );
}

export default UserCommentTemplate;
