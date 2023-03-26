import React, { useState,useEffect } from "react";
import profileStyle from "../UserProfile/userprofile.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerifiedIcon from "@mui/icons-material/Verified"
// import { Avatar } from "@mui/material";
import CustomButton from "../../atoms/button/button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import img from '../UserProfile/3.jpg'
import { useNavigate,useSearchParams } from "react-router-dom";
import Left from "../LeftSide/left";
import Right from "../Right/right";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Dialog from "@mui/material/Dialog";

import CustomInputFields from "../../atoms/InputFields/input";



function Profile() {
    
   const navigate= useNavigate()
   const tweetData = JSON.parse(localStorage.getItem("tweetData")) ||[] ;
   const [dataList, setDataList]=useState(tweetData)
   const [searchParam] = useSearchParams();
const [activeProfile,setActiveProfile] =useState([])
const [isopenComment, setIsOpenComment] = useState(false);


let userName = JSON.parse(localStorage.getItem("userData"));
useEffect(()=>{
    console.log(searchParam.get("handlerName"),"from userprofile")
    let clickingIndex=dataList.filter((ele)=>ele.handlerName == searchParam.get("handlerName"))
    console.log(clickingIndex,"from userProfile")
      setActiveProfile(clickingIndex )
  },[])
    
function handleArrow(){
   
    navigate("/")
}
function handleProfileIcon(){

}
function handleTweet(){
    
}





    function TabPanel(props) {
        const { children, value, index, } = props;

        return (
            <div>
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleComment(){
     setIsOpenComment(true)
    }
    function handleReply(){

    }
    function handleClose(){
         setIsOpenComment(false)
    }
    

    return (
      <>
        {isopenComment?

            <Dialog
              open={isopenComment}
              PaperProps={{
                style: {
                  borderRadius: "20px",
                  marginBottom: "18em",
                },
              }}
            >
              <div className={profileStyle.dailog}>
                <CustomInputFields
                  abc="Tweet Your Reply"
                  style={{
                    padding: "5rem",
                    border: "none",
                    outline: "none",
                    fontSize: "1.5rem",
                  }}
                  handleChange={handleReply}
                  // value={input}
                />
                <div className={profileStyle.btn}>
                  <CustomButton
                    btnVal="Reply"
                    style={{
                      backgroundColor: " rgb(11, 109, 220)",
                      color: "white",
                      width: "7rem",
                      borderRadius: "20px",
                    }}
                    
                  />
                </div>
                <CustomButton
                  btnVal="Close"
                  style={{ marginTop: "3rem", fontWeight: "800" }}
                  onClicking={handleClose}
                />
              </div>
            </Dialog> :""}



        <div className={profileStyle.container}>
            <Left/>
            <section className={profileStyle.section}>
                <div className={profileStyle.top}>
                    <div onClick={handleArrow}><ArrowBackIcon /></div>
                    
                    <h3>{userName[0].username}</h3>
                    <h6>0 tweets</h6>
                </div>
                <div className={profileStyle.maintop}>
                </div>

                <div className={profileStyle.mainbottom}>

                    <div>
                        <img src={img} 
                            style={{ width: "130px", height: "130px", border: "4px solid white", backgroundColor: "rgb(18, 80, 48)",
                                     borderRadius:"50%" }}
                            />
                    </div>

                    <h3><b>{userName[0].phoneNumber}</b></h3>
                    <h5>{userName[0].username}</h5>
                    <div className={profileStyle.calender}><CalendarMonthIcon /><h6>joined january 2023</h6></div>
                    <h6><b>186</b> Following  <b>188</b> Followers</h6>
                    <CustomButton text="Edit profile"
                        style={{
                            border: "1px solid black",
                            borderRadius: "20px", width: "7rem", marginTop: "0rem",
                            marginLeft: "32rem"
                        }}
                        type="file" 
                    />
                </div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}  >
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Tweets" />
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Tweets & replies" />
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Media" />
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Likes" />
                        </Tabs>
                    </Box>
                    <TabPanel sx={{ color: "red", }} value={value} index={0}>
                       {activeProfile.map((item,index)=>(
                          <div className={profileStyle.main}>
                          <div className={profileStyle.navContainer}>
                            <div className={profileStyle.container1}>
                              
                              <div onClick={()=>handleProfileIcon(index,item)}>
                              <img src={img} className={profileStyle.imgee}/>
                              </div>
                              <div className={profileStyle.name}>{item.name} </div>
                              <VerifiedIcon />
                              {item.handlerName}
                            </div>
                
                            <div className={profileStyle.more}><MoreHorizIcon/></div>
                          </div>
                          <div className={profileStyle.component2} onClick={()=>handleTweet(index,item)}>
                          <div className={profileStyle.img_caption}>
                            <div className={profileStyle.caption}>  <div> 
                               
                              <p>{item.tweetText}</p>
                              <img src={item.tweetPic} className={profileStyle.img}/>
                              <div className={profileStyle.icons}>
                              <div onClick={handleComment}> <ChatBubbleOutlineIcon/></div>
                           <SwapCallsIcon/>
                               <FavoriteBorderIcon/>
                              <EqualizerIcon/>
                             <IosShareIcon/>
                               </div>
                              
   
                              
   
   
                            </div>
                          
                            
                            </div>
                             
                            
                            
                          </div>
                          
                        </div>
                        </div>
                       ))}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Tweets & replies
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Media
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Like
                    </TabPanel>
                </Box>
            </section>
            <div className={profileStyle.right}> <Right/></div>
        </div>
        </>
    );
};

export default Profile;
