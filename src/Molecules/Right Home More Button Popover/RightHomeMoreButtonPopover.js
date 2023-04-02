import React from "react";
import styles from "./RightHomeMoreButtonPopover.module.css";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function RightHomeMoreButtonPopover({ updateIsNotInterested, id }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <MoreHorizIcon {...bindTrigger(popupState)} />

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
            <Typography
              className={styles.PopoverOptions}
              sx={{ p: 2 }}
              onClick={() => updateIsNotInterested(id, true)}
            >
              Not interested in this
            </Typography>
            <Typography className={styles.PopoverOptions} sx={{ p: 2 }}>
              This trend is harmful or spammy
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default RightHomeMoreButtonPopover;
