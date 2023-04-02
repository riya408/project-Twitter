import React, { useRef, useState, useEffect } from "react";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import styles from "./FloatingActionButton.module.css";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRecoilState } from "recoil";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CustomButton from "../../Molecules/Custom Button/CustomButton";

function FloatingActionButton() {
  const [open, setOpen] = React.useState(false);
  const [tweet, setTweet] = useState("");
  const [tweetPost, setTweetPost] = useRecoilState(UserPost);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  const storedTweetPost = JSON.parse(localStorage.getItem("tweetPost"))
    ? JSON.parse(localStorage.getItem("tweetPost"))
    : [];
  useEffect(() => {
    setTweetPost(storedTweetPost);
  }, []);

  const matches = useMediaQuery("(max-width:376px)");

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    setOpen(false);
    localStorage.setItem(
      "tweetPost",
      JSON.stringify([tweetText, ...tweetPost])
    );
    setTweet("");
    setImage("");
  }
  return (
    <div>
      <Box onClick={handleClickOpen} sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          style={{ color: "white", backgroundColor: "#00acee" }}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
        BackdropProps={{
          style: { backgroundColor: matches ? "gray" : "white" },
        }}
        PaperProps={{
          style: {
            boxShadow: matches ? "4px 4px 20px rgba(0, 0, 0, 0.25)" : "none",
          },
        }}
      >
        <CloseRoundedIcon
          onClick={handleClose}
          style={{
            position: "relative",
            left: "0.5rem",
            top: "0.5rem",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2.5, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <input
            className={styles.MiddleHomeUserTweetBoxInput}
            id="outlined-multiline-static"
            placeholder="What's happening?"
            multiline
            rows={8}
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </Box>
        <DialogActions>
          <PermMediaOutlinedIcon
            onClick={handleImageClick}
            className={styles.DialogTweetIconStyle}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
            value=""
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
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FloatingActionButton;
