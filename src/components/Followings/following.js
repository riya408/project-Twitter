import React from "react";
import FollowList from "../../atoms/Follow/follow";
import style from "../Followings/following.module.css";

export default function Following() {
  return (
    <div className={style.container}>
      <div className={style.heading}>Who to Follow</div>
      <div>
        <FollowList />
      </div>
      
    </div>
  );
}
