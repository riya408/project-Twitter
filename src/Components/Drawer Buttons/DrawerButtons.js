import React from "react";
import styles from "./DrawerButtons.module.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import { Link } from "react-router-dom";

const buttonData = [
  {
    title: "Profile",
    link: "/profile",
    icon: <PersonOutlineOutlinedIcon style={{ fontSize: "1.7rem" }} />,
  },
  {
    title: "Twitter Blue",
    link: "/twitterblue",
    icon: <FormatBoldOutlinedIcon style={{ fontSize: "1.7rem" }} />,
  },
  {
    title: "Topics",
    link: "/topics",
    icon: <TopicOutlinedIcon style={{ fontSize: "1.7rem" }} />,
  },

  {
    title: "Bookmarks",
    link: "/bookmarks",
    icon: <TurnedInNotRoundedIcon style={{ fontSize: "1.7rem" }} />,
  },
  {
    title: "Lists",
    link: "/lists",
    icon: <ListAltRoundedIcon style={{ fontSize: "1.7rem" }} />,
  },

  {
    title: "Twitter Circle",
    link: "/twittercircle",
    icon: <PeopleAltOutlinedIcon style={{ fontSize: "1.7rem" }} />,
  },
];

function DrawerButtons() {
  return (
    <div>
      {buttonData.map((button) => (
        <Link to={button.link} key={button.title}>
          <button className={styles.LeftSectionButtons}>
            <span className={styles.ButtonInformation}>
              {button.icon}
              {button.title}
            </span>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default DrawerButtons;
