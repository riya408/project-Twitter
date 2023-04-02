import React from "react";
import styles from "./RetweetControl.module.css";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { AiOutlineRetweet } from "react-icons/ai";

function RetweetControl() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <AiOutlineRetweet
            style={{ fontSize: "1.5rem" }}
            {...bindTrigger(popupState)}
          />

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
              Retweet{" "}
            </Typography>
            <Typography className={styles.PopoverOptions} sx={{ p: 2 }}>
              Quote Tweet{" "}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default RetweetControl;
