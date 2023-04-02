// import React, { useState, useRef } from "react";
// import CustomButton from "../../Molecules/Custom Button/CustomButton";
// import styles from "./MiddleTweetBox.module.css";
// import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
// import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
// import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
// import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
// import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import { DefaultPosts } from "../../Recoil State/Default Posts/DefaultPosts";
// import { UserPost } from "../../Recoil State/User Post/UserPost";
// import { useRecoilState } from "recoil";

// function MiddleTweetBox() {
//   const [tweetPost, setTweetPost] = useRecoilState(UserPost);

//   const [tweet, setTweet] = useState("");
//   const [image, setImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleImageUpload = (event) => {
//     setImage(URL.createObjectURL(event.target.files[0]));
//     console.log(event.target.files[0]);
//   };

//   function handleTweet(e) {
//     setTweet(e.target.value);
//   }

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   function handleTweetPost() {
//     let tweetText = {
//       name: "Sushant Hire",
//       handlerName: "@reachbarsonist",
//       tweetText: tweet,
//       tweetPic: image,
//       profilePic:
//         "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
//     };
//     setTweetPost([tweetText, ...tweetPost]);
//     setTweet("");
//     setImage("");

//   }

//   return (
//     <div
//       className={styles.MiddleHomeTweetBoxContainer}
//     >
//       <div className={styles.MiddleHomeUserTweetBoxParentContainer}>
//         <img
//           src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
//           alt=""
//           className={styles.photo}
//         />{" "}
//         <input
//           className={styles.MiddleHomeUserTweetBoxInput}
//           placeholder="What's happening?"
//           value={tweet}
//           onChange={handleTweet}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           ref={fileInputRef}
//           onChange={handleImageUpload}
//           style={{ display: "none" }}
//           value=""
//         />
//         <div
//           style={{
//             display: "flex",
//             position: "relative",
//             justifyContent: "center",
//             alignItems: "center",
//             marginBottom: "1rem",
//           }}
//         >
//           <PermMediaOutlinedIcon
//             onClick={handleImageClick}
//             className={styles.DialogTweetIconStyle}
//           />
//           <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
//           <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
//           <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
//           <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
//           <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />
//           <CustomButton
//             className={styles.DialogTweetButtonStyle}
//             buttonText="Tweet"
//             onClick={handleTweetPost}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MiddleTweetBox;

import React, { useState, useRef, useEffect } from "react";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import styles from "./MiddleTweetBox.module.css";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { DefaultPosts } from "../../Recoil State/Default Posts/DefaultPosts";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import { useRecoilState } from "recoil";

function MiddleTweetBox() {
  const [tweetPost, setTweetPost] = useRecoilState(UserPost);
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));

  const storedTweetPost = JSON.parse(localStorage.getItem("tweetPost"))
    ? JSON.parse(localStorage.getItem("tweetPost"))
    : [];
  useEffect(() => {
    setTweetPost(storedTweetPost);
  }, []);

  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  function handleTweet(e) {
    setTweet(e.target.value);
  }

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  function handleTweetPost() {
    let tweetText = {
      name: matchedUserDetails.Email || matchedUserDetails.Phone,
      handlerName: `@${matchedUserDetails.Name}`,
      tweetText: tweet,
      tweetPic: image,
      profilePic:
        "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
    };
    setTweetPost([tweetText, ...tweetPost]);

    localStorage.setItem(
      "tweetPost",
      JSON.stringify([tweetText, ...tweetPost])
    );
    setTweet("");
    setImage("");
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
          placeholder="What's happening?"
          value={tweet}
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
            buttonText="Tweet"
            onClick={handleTweetPost}
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleTweetBox;
