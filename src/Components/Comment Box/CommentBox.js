import React from "react";
import styles from "./CommentBox.module.css";
import { ThreadAtom } from "../../Recoil State/Thread Atom/ThreadAtom";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import { useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ReplyAtom } from "../../Recoil State/Reply State/ReplyAtom";
import { MyReplyAtom } from "../../Recoil State/Reply State/MyReplyAtom";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function CommentBox({ handleClose }) {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));

  const [newReply, setNewReply] = useRecoilState(ReplyAtom);
  const [newMyReply, setMyNewReply] = useRecoilState(MyReplyAtom);
  const [tweetReply, setTweetRelpy] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  function handleTweet(e) {
    setTweetRelpy(e.target.value);
  }
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  function handleTweetPost() {
    let myReply = {
      name: `${matchedUserDetails.Email || matchedUserDetails.Phone}`,
      handlerName: `@${matchedUserDetails.Name}`,
      tweetReplyText: tweetReply,
      tweetPic: image,
      profilePic:
        "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
    };
    setNewReply([myReply, ...newReply]);
    setTweetRelpy("");
    setImage("");
    setMyNewReply([myReply, ...newMyReply]);
    handleClose();
  }

  return (
    <div className={styles.MiddleHomeTweetBoxContainer}>
      <div className={styles.MiddleHomeUserTweetBoxParentContainer}>
        <img
          src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
          alt=""
          className={styles.photo}
        />{" "}
        <input
          className={styles.MiddleHomeUserTweetBoxInput}
          placeholder="Enter your reply"
          value={tweetReply}
          onChange={handleTweet}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
          value=""
        />
        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <PermMediaOutlinedIcon
            onClick={handleImageClick}
            className={styles.DialogTweetIconStyle}
          />
          <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
          <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
          <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
          <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
          <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />
          <CustomButton
            className={styles.DialogTweetButtonStyle}
            buttonText="Reply"
            onClick={handleTweetPost}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
