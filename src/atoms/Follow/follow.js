import React, { useState } from "react";
// import CustomButton from "../button/button";
import Avatar from "@mui/material/Avatar";
import followStyle from "../Follow/follow.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import FollowBtn from "../FollowBtn/FollowBtn";

export default function FollowList() {
  let list = [
    {
      image: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
      name: "Remy Sharp",
      handlerName: "@RemySharp",
      button: (
        <FollowBtn
          style={{
            color: "white",
            backgroundColor: "black",
            width: "5rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        />
      ),
    },
    {
      image: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      name: "Travis Howard",
      handlerName: "@TravisHoward",
      button: (
        <FollowBtn
          style={{
            color: "white",
            backgroundColor: "black",
            width: "5rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        />
      ),
    },
    {
      image: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
      name: "Cindy Baker",
      handlerName: "@CindyBaker",
      button: (
        <FollowBtn
          style={{
            color: "white",
            backgroundColor: "black",
            width: "5rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        />
      ),
    },
  ];
  const [listArr,setListArr] = useState(list.slice(0,2));
  const [isAskedforAllData,setIsAskedForAllData]=useState(false)
  
  
  function handeClickShow(){
    setIsAskedForAllData(!isAskedforAllData)
    if(isAskedforAllData){
      return setListArr(list.slice(0,2))
    }
    setListArr(list)
  }


  return (
    <>
    <div className={followStyle.Main}>
      {listArr.map((items, index) => (
        <div className={followStyle.container} key={items.name}>
          <div className={followStyle.container2}>
            <div className={followStyle.image}>{items.image}</div>
            <div className={followStyle.middle}>
              <div>
                {items.name}
                <VerifiedIcon />
              </div>
              <div className={followStyle.handlername}>{items.handlerName}</div>
            </div>
          </div>
          <div className={followStyle.btn}>{items.button}</div>
        </div>
      ))}
    </div>
    {
      <div onClick={handeClickShow} className={followStyle.show}> {isAskedforAllData ? "Show Less" : "Show More"}</div> 
    }
    </>
  );
}
