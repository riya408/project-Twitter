import React,{useState,useEffect} from 'react'
import img from '../../components/Cards/3.jpg'
import style from '../TweetReply/tweetReply.module.css'
import VerifiedIcon from "@mui/icons-material/Verified"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useSearchParams } from 'react-router-dom'
import Left from '../LeftSide/left'
import Right from '../Right/right'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { tweetComment } from '../../constData';
import imgg from '../TweetReply/pro.jpg'

export default function ShowTweetReplies(){
  const tweetData = JSON.parse(localStorage.getItem("tweetData")) ||[] ;
const [dataList, setDataList]=useState(tweetData)
const [searchParam] = useSearchParams();
const [activeProfile,setActiveProfile] =useState([])
const [likes, setLikes] = useState(100);
const navigate=useNavigate()

useEffect(()=>{
  console.log(searchParam.get("handlerName"))
  let clickingIndex=dataList.filter((ele)=>ele.id == searchParam.get("id"))
  console.log(clickingIndex)
  setActiveProfile(clickingIndex)
},[])
    

  // function handleLike(index,item) {
  //   // console.log("hi")
  //   if(likes==101){
  //     setLikes(likes-1)
  //   }
  //   else{
  //     setLikes(likes+1)
  //   }
  //   // console.log(likes)
    
  // }
  // function handleComment(index) {
  //   setClickedIndex(index)
  //   setIsOpenComment(true);
  // }


function handleViews(){
    
}
function handleIcon(){
navigate("/")
}
    return(
      <div className={style.maincontainer}>
    <Left/>
    <div className={style.mid}>
    <div onClick={handleIcon}><ArrowBackIcon /></div>
    <h2>Tweet</h2>
      {activeProfile.map((item) => (
        <div>
        <div className={style.topitems}>
        <div className={style.top}>
        <img src={img} className={style.proImg}/>
          <b> {item.name}</b>
          {item.handlerName}
          </div>
          <div className={style.more}>
        <MoreHorizIcon/>
          </div>
          </div>
          
            <div className={style.miditems} >
              <p>{item.tweetText}</p>
              <img src={item.tweetPic} />
              <div className={style.icons}>
              <ChatBubbleOutlineIcon />
               <SwapCallsIcon/>
                <FavoriteBorderIcon/>
                <EqualizerIcon/>
                <IosShareIcon/>
              </div>
              {
                tweetComment.map((ele)=>(
                  <div className={style.comment}>
               <div className={style.reply}>
               <div className={style.replytop}>
                 <img src={imgg} className={style.comntPro}/>
                <h3><b>{ele.name}</b></h3>
                {ele.handlerName}
                </div>
                <div className={style.more}>
              <MoreHorizIcon/>
                </div>
               </div>
               <div className={style.text} >
                {ele.reply}
              </div>
               </div>

                ))
              }
                {/*  */}
          
            </div>

    
        </div>

      ))}
      </div>
      <Right/>
    </div>
       
      
    )
}