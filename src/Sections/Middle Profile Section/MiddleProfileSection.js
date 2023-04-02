import React from "react";
import styles from "./MiddleProfileSection.module.css";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserTweetTemplate from "../../Components/User Tweet Template/UserTweetTemplate";
import { Link } from "react-router-dom";
import FloatingActionButton from "../../Components/Floating Action Button/FloatingActionButton";

function MiddleProfileSection() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  return (
    <div className={styles.ProfileMainContainer}>
      <div className={styles.ProfileHeadingContainer}>
        <h3 className={styles.ProfileHeading3Container}>
          {" "}
          <Link to="/home">
            <ArrowBackIcon
              style={{
                marginRight: "1.5rem",
                position: "relative",
                top: "0.7rem",
              }}
            />
          </Link>
          {matchedUserDetails.Email || matchedUserDetails.Phone}{" "}
        </h3>
        <p className={styles.ProfileHeadingParaContainer}>3 Tweets</p>
      </div>
      <span className={styles.ProfilePhotoContainer}>
        <img
          className={styles.ProfilePhotoImageContainer}
          src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
          alt="snub"
        ></img>
      </span>
      <div className={styles.ProfileDetailsContainer}>
        <p
          style={{
            position: "relative",
            top: "4.2rem",
            marginLeft: "1rem",
            fontSize: "large",
            fontWeight: "bolder",
          }}
        >
          {matchedUserDetails.Email || matchedUserDetails.Phone}{" "}
        </p>
        <p
          style={{
            position: "relative",
            top: "3rem",
            marginLeft: "0.9rem",
            fontSize: "0.96rem",
          }}
        >
          @{matchedUserDetails.Name}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            position: "relative",
            top: "2.4rem",
          }}
        >
          <CalendarMonthIcon
            style={{
              position: "relative",
              top: "1.1rem",
              marginLeft: "0.8rem",
              fontSize: "1.2rem",
            }}
          />
          <p
            style={{
              position: "relative",
              right: "0.6rem",
              fontSize: "1rem",
            }}
          >
            {" "}
            Joined January 2023
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginLeft: "1rem",
            fontSize: "0.9rem",
            position: "relative",
            top: "1rem",
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
        <CustomButton
          className={styles.ProfileEditButton}
          buttonText="Edit Profile"
        />{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            borderBottom: "1px solid gainsboro",
          }}
        >
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
      <UserTweetTemplate />
      <div className={styles.FloatingActionButton}>
        <FloatingActionButton />
      </div>
    </div>
  );
}

export default MiddleProfileSection;
