import React, { useState, useRef } from "react";
import leftStyle from "../LeftSide/left.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomButton from "../../atoms/button/button";
import Dialog from "@mui/material/Dialog";
import CustomProfile from "../../atoms/DummyProfile/profile";
import CustomInputFields from "../../atoms/InputFields/input";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import IosShareIcon from "@mui/icons-material/IosShare";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { nanoid } from 'nanoid'
import img from "../LeftSide/Image/3.jpg";
import { useNavigate } from "react-router-dom";

function Left() {
  const navigate = useNavigate();
  const tweetData = JSON.parse(localStorage.getItem("tweetData")) ||[] ;
  const [newTweetText, setNewTweetText] = useState(tweetData)
  const [isopen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const inputRef = useRef(null);
  // console.log(inputRef);

  function handleNewTweet(inputTweet) {
    setInput(inputTweet);
    console.log(inputTweet);
  }
  let userName = JSON.parse(localStorage.getItem("userData"));
  function handleClick() {
     const newTweet = 
    tweetData.push({
        id: nanoid(),
        profileIcon: <img src={img} className={leftStyle.img} />,
        name: `${userName[0].phoneNumber}`,
        handlerName: `@${userName[0].username}`,
        tweetText: input,
        tweetPic: image,
        icons1: <ChatBubbleOutlineIcon />,
        icons2: <SwapCallsIcon />,
        icons3: <FavoriteBorderIcon />,
        icons4: <EqualizerIcon />,
        icons5: <IosShareIcon />,
        more: <MoreHorizIcon />
     })

  // console.log(newTweet,"----------------newtweeeet")

  setNewTweetText([newTweet, ...newTweetText]);
  localStorage.setItem("tweetData", JSON.stringify(tweetData))

  setInput("")
  setImage("")
  inputRef.current.value = ""
}
  function handleClose() {
    setIsOpen(false);
  }
  const [list, setList] = useState([
    {
      icon: <HomeIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Home",
    },
    {
      icon: <TagIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Explore",
    },
    {
      icon: (
        <NotificationsNoneIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />
      ),
      text: "Notifications",
    },
    {
      icon: <MailOutlineIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Messages",
    },
    {
      icon: (
        <BookmarkBorderIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />
      ),
      text: "Bookmarks",
    },
    {
      icon: <ListAltIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Lists",
    },
    {
      icon: <PermIdentityIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Profile",
    },
    {
      icon: <MoreHorizIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "More",
    },
  ]);

 

  function handleProfile(index, item) {
    
    const clicked = list.map((item) => item.text === "Profile");
    console.log(clicked);

    if (clicked[index] === true) {
      
      // navigate('/userProfile')
      navigate(`/userProfile?handlerName=${`@${userName[0].username}`}`)
    }

    const homeIndex = list.map((item) => item.text === "Home");

    console.log(homeIndex);
    if (homeIndex[index] === true) {
      
      navigate("/")
    }
  }

  function handleIcon() {
    
    navigate("/")
  }

  function handleTweet() {
    setIsOpen(true);
  }
  const iconList = [
    {
      icon: <CollectionsIcon className={leftStyle.icon} />,
      action: "pickImage",
    },
    {
      icon: <GifBoxOutlinedIcon className={leftStyle.icon} />,
    },
    {
      icon: <ListOutlinedIcon className={leftStyle.icon} />,
    },
    {
      icon: <EmojiEmotionsOutlinedIcon className={leftStyle.icon} />,
    },
    {
      icon: <LocationOnOutlinedIcon className={leftStyle.icon} />,
    },
  ];
  function handleOnClickIcon(action) {
    if (action === "pickImage") {
      inputRef.current.click();
    }
  }
  function handleOnSelectImage(e) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      //inputRef.current=null
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <>
      {isopen ? (
        <Dialog
          open={isopen}
          PaperProps={{
            style: {
              borderRadius: "20px",
              marginBottom: "25em",
            },
          }}
        >
          <div className={leftStyle.dailogTweet}>
            <div className={leftStyle.top}>
              <img src={img} className={leftStyle.img} />
              <CustomInputFields
                abc="Whats's happening?"
                style={{
                  padding: "3rem",
                  border: "none",
                  outline: "none",
                  fontSize: "1.6rem",
                }}
                handleChange={handleNewTweet}
                value={input}
              />
              {image && (
                <div className={leftStyle.imageWrapper}>
                  <img src={image} height="100%" width="100%" alt="IMAGE" />
                </div>
              )}
            </div>
            <div className={leftStyle.btn}>
              {iconList.map(({ icon, action }, index) => (
                <div onClick={() => handleOnClickIcon(action)}> {icon}</div>
              ))}
              <CustomButton
                btnValue="Tweet"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  backgroundColor: "#00acee",
                  width: "fit-content",
                  borderRadius: "30px",
                  color: "white",
                }}
                onClicking={handleClick}
              />
            </div>

            {/* hidden input */}
            <input
              type="file"
              hidden
              ref={inputRef}
              onChange={handleOnSelectImage}
              name="tweetPic"
            />
            <div className={leftStyle.close}>
              <CustomButton
                btnValue="close"
                onClicking={handleClose}
                style={{ fontSize: "1rem", fontWeight: "700" }}
              />
            </div>
          </div>
        </Dialog>
      ) : (
        ""
      )}

      <div className={leftStyle.mainSectionContainer}>
        <section className={leftStyle.section1}>
          <div className={leftStyle.twitterIcon} onClick={handleIcon}>
            <TwitterIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />
          </div>

          {list.map((ele, index) => (
            <div
              className={leftStyle.div1}
              onClick={() => handleProfile(index, ele)}
            >
              <div className={leftStyle.iconContainer}>
                <div className={leftStyle.icons}>{ele.icon}</div>
              </div>
              <div className={leftStyle.text}>{ele.text}</div>
            </div>
          ))}
          <div className={leftStyle.btnTweet}>
            <CustomButton
              btnTitle="Tweet"
              onClicking={handleTweet}
              style={{
                backgroundColor: "#00acee",
                borderRadius: "40px",
                width: "14rem",
                textAlign: "center",
                hover: "#008abe",
                color: "white",
                padding: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
        </section>
        <div className={leftStyle.profile}>
          <CustomProfile />
        </div>
      </div>
    </>
  );
}

export default Left;
