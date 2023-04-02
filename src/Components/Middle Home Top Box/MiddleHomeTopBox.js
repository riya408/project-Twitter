import React from "react";
import styles from "./MiddleHomeTopBox.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LeftHomeButtons from "../Left Home Buttons/LeftHomeButtons";
import DrawerButtons from "../Drawer Buttons/DrawerButtons";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function MiddleHomeTopBox() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h3 className={styles.AccountInfoHeading}>
          Account info{" "}
          <span style={{ marginLeft: "5rem" }}>
            {" "}
            <CloseRoundedIcon onClick={toggleDrawer(anchor, false)} />
          </span>
        </h3>
        <Link to="/profile">
          <img
            className={styles.ProfilePhotoDrawerContainer}
            src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
            alt="snub"
          ></img>
        </Link>

        <p className={styles.UserPhoneOrEmailContainer}>
          {matchedUserDetails.Email || matchedUserDetails.Phone}{" "}
        </p>
        <p className={styles.UserNameContainer}>@{matchedUserDetails.Name}</p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginLeft: "1rem",
            fontSize: "0.88rem",
            position: "relative",
            bottom: "3.1rem",
          }}
        >
          <p>
            <span style={{ fontWeight: "bolder" }}> 8</span> Following{" "}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bolder" }}> 0</span> Followers
          </p>
        </div>
        <DrawerButtons />
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div className={styles.MiddleHomeTopBoxContainer}>
      <div className={styles.TwitterIconContainer}>
        <img
          onClick={toggleDrawer("left", true)}
          className={styles.ProfilePhotoImageContainer}
          src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
          alt="snub"
        ></img>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        <TwitterIcon
          className={styles.TwitterIcon}
          style={{
            fontSize: "1.68rem",
          }}
        />
      </div>

      <h3 className={styles.MiddleHomeTopBoxHeadingContainer}>Home</h3>
      <div className={styles.TwoButtonCollective} style={{ display: "flex" }}>
        <button className={styles.MiddleHomeTopBoxButtonContainer}>
          For you
        </button>
        <button className={styles.MiddleHomeTopBoxButtonContainer}>
          Following
        </button>
      </div>
    </div>
  );
}

export default MiddleHomeTopBox;
