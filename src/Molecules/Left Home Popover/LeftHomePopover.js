import React from "react";
import styles from "./LeftHomePopover.module.css";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useRecoilState, useSetRecoilState } from "recoil";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import { LoginState } from "../../Recoil State/Login State/LoginState";
import { useNavigate } from "react-router-dom";

function LeftHomePopover() {
  const removeAllUserPost = useSetRecoilState(UserPost);
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const navigate = useNavigate();

  function handleLogOut() {
    setIsLogin(false);
    navigate("/");
    removeAllUserPost([]);
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={styles.btn} {...bindTrigger(popupState)}>
            <img
              src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
              alt=""
              className={styles.photo}
            />{" "}
            <span style={{ marginLeft: "0.5rem" }}>
              {matchedUserDetails.Email || matchedUserDetails.Phone}{" "}
              <span style={{ fontWeight: "normal" }}>
                @{matchedUserDetails.Name}
              </span>
            </span>{" "}
            <MoreHorizOutlinedIcon style={{ marginLeft: "1rem" }} />
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography className={styles.PopoverOptions} sx={{ p: 2 }}>
              Add an existing account
            </Typography>
            <Typography
              className={styles.PopoverOptions}
              sx={{ p: 2 }}
              onClick={handleLogOut}
            >
              Log out{" "}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default LeftHomePopover;
