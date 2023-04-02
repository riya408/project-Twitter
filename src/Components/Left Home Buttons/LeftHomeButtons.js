import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import styles from "./LeftHomeButtons.module.css";

const buttonData = [
  {
    title: "Home",
    link: "/home",
    icon: <HomeRoundedIcon style={{ fontSize: "2rem" }} />,
  },
  { title: "Explore", link: "/explore", icon: <TagRoundedIcon style={{ fontSize: "2rem" }} /> },
  {
    title: "Notifications",
    link: "/notifications",
    icon: <NotificationsNoneRoundedIcon style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Messages",
    link: "/messages",
    icon: <EmailOutlinedIcon style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Bookmarks",
    link: "/bookmarks",
    icon: <TurnedInNotRoundedIcon style={{ fontSize: "2rem" }} />,
  },
  { title: "Lists", link: "/lists", icon: <ListAltRoundedIcon style={{ fontSize: "2rem" }} /> },
  {
    title: "Profile",
    link: "/profile",
    icon: <PersonOutlineOutlinedIcon style={{ fontSize: "2rem" }} />,
  },
  {
    title: "More",
    link: "/more",
    icon: <ExpandCircleDownOutlinedIcon style={{ fontSize: "2rem" }} />,
  },
];

function LeftHomeButtons() {
  return (
    <>
      <Link to="/home">
        <TwitterIcon
          className={styles.TwitterIconStyle}
          style={{
            fontSize: "2rem",
          }}
        />
      </Link>

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
    </>
  );
}

export default LeftHomeButtons;
