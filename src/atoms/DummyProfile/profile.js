import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import img from "../DummyProfile/image/3.jpg";
import profileStyle from "../DummyProfile/profile.module.css";
import Dialog from "@mui/material/Dialog";
import { useRecoilState } from "recoil";
import { userInfo } from "../../atom";
import { useNavigate } from "react-router-dom";



const CustomProfile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [LoggedIn,setLoggedIn] = useRecoilState(userInfo)
  const tweetData=JSON.parse(localStorage.getItem("tweetData")) || [] ;
  const [data,setData]=useState(tweetData)
  console.log(data,"From profile")

  let navigate =useNavigate();

// let customProfileArr=[]
  let userName = JSON.parse(localStorage.getItem("userData"));

  let customProfileArr = [
    {
      image: (
        <img src={img} alt="Image here" className={profileStyle.imgStyle} />
      ),
      name:userName[0].phoneNumber,
     
      handlerName: `@${userName[0].username}`,
           icon: <MoreHorizIcon />,
    },
  ];
console.log(customProfileArr)
   const profile = customProfileArr;

  function handleClick() {
    console.log(isDialogOpen)
    if (isDialogOpen) {
      setIsDialogOpen(false);}
    else {
       setIsDialogOpen(true);
    }
  }

function handleLogOut(){
  
setLoggedIn({...LoggedIn,isUserLoggedIn:false})
// console.log(LoggedIn.isUserLoggedIn)
navigate("/")

}


  // if (isDialogOpen) {
    return (
      <>
      {(isDialogOpen) ?
      <Dialog open={isDialogOpen}
      PaperProps={{
        style: {
          borderRadius: "20px",
          width:"25em",
          marginTop: "27em",
          marginRight:"72em",
          padding:"0.5em"
        },
      }}>
       
        <div className={profileStyle.headings}>
        <h4 className={profileStyle.h1}>Add an existing account</h4>
        <h4 className={profileStyle.h2} onClick={handleLogOut}> Log out </h4>
        </div>
      </Dialog> : ""}
      

    
  
  
    <div className={profileStyle.main} onClick={handleClick}>
      {profile.map((item) => (
        <div className={profileStyle.container}>
          <div className={profileStyle.image}>{item.image}</div>
          <div className={profileStyle.middle}>
            <div>{item.name}</div>
            <div>{item.handlerName}</div>
          </div>
          <div className={profileStyle.handleIcon}>{item.icon}</div>
        </div>
      ))}
    </div>
   </> )};

export default CustomProfile;
