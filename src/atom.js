import { atom } from "recoil";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import IosShareIcon from "@mui/icons-material/IosShare";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {nanoid} from 'nanoid'

export const userInfo = atom({
  key: "userInfo",
  default: { isUserLoggedIn: false },
});


export const updatedActiveProfile=atom({
  key:"updatedActiveProfile",
  default:[]
})


// export const tweetData =atom({ 
//   key: "tweetData",
//   default:[
//   {

//         id:nanoid(),
//     profileIcon: (
//               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
//             ),
//       name  : 'The White House',
//       handlerName : '@The White House' ,
//       organization : 'United States government organization',
//       followers : 200,
//       followings : 400,
//       joinedDate : '22 dec 2022',
//       icons1: <ChatBubbleOutlineIcon />,
//             icons2: <SwapCallsIcon />,
//             icons3: <FavoriteBorderIcon />,
//              icons4: <EqualizerIcon />,
//             icons5: <IosShareIcon />,
//              more: <MoreHorizIcon />,
//       tweets : [
//           {
//               tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//               tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
//               tweetCount : 100,
//               retweetCount : 100 ,
//               likesCount : 100,
//               viewsCount : '102k',
//               TweetReplies : [
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'vijaya sharma',
//                       handlerName : '@sharma545',
//                       tweetReplyText : 'it is nice'
//                   },
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'saniya mirza',
//                       handlerName : '@mirza',
//                       tweetReplyText : 'that is very intersting'
//                   },

//               ]
//           },
//           {
//             tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//             tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//             tweetCount : 100,
//             retweetCount : 100 ,
//             likesCount : 100,
//             viewsCount : '102k',
//             TweetReplies : [
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                     name : 'vijaya sharma',
//                     handlerName : '@sharma545',
//                     tweetReplyText : 'it is nice'
//                 },
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                     name : 'saniya mirza',
//                     handlerName : '@mirza',
//                     tweetReplyText : 'that is very intersting'
//                 },

//             ]
//         },
       
//       ],
//     },


  
//     {
//       id:nanoid(),
//       profileIcon: (
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       ),
//       name: "Mukund",
//       handlerName: "@kumarmukund",
//       organization: "",
//         followers : 200,
//         followings : 400,
//         joinedDate : '22 dec 2022',
//         icons1: <ChatBubbleOutlineIcon />,
//         icons2: <SwapCallsIcon />,
//         icons3: <FavoriteBorderIcon />,
//          icons4: <EqualizerIcon />,
//         icons5: <IosShareIcon />,
//          more: <MoreHorizIcon />,
//         tweets : [
//             {
//                 tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//                 tweetPic:"https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
                             

//                 tweetCount : 100,
//                 retweetCount : 100 ,
//                 likesCount : 100,
//                 viewsCount : '102k',
//                 TweetReplies : [
//                     {
//                       profileIcon: (
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                       ),
//                         name : 'virat kholi',
//                         handlerName : '@viratkho',
//                         tweetReplyText : 'very nice'
//                     },
//                     {
//                       profileIcon: (
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                       ),
//                         name : 'sam curran',
//                         handlerName : '@samcurran1234',
//                         tweetReplyText : 'woo..excellent'
//                     },
  
//                 ]
//             },{
//               tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//               tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//               tweetCount : 100,
//               retweetCount : 100 ,
//               likesCount : 100,
//               viewsCount : '102k',
//               TweetReplies : [
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'vijaya sharma',
//                       handlerName : '@sharma545',
//                       tweetReplyText : 'it is nice'
//                   },
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'saniya mirza',
//                       handlerName : '@mirza',
//                       tweetReplyText : 'that is very intersting'
//                   },
  
//               ]
//           },
           
//         ],
//       },
  


  
//     {
//       id:nanoid(),
//       profileIcon: (
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       ),
//       name: "Usain St. Leo Bolt",
//       handlerName: "@usainbolt",
//       organization: "",
//         followers : 200,
//         followings : 400,
//         joinedDate : '22 dec 2022',
//         icons1: <ChatBubbleOutlineIcon />,
//         icons2: <SwapCallsIcon />,
//         icons3: <FavoriteBorderIcon />,
//          icons4: <EqualizerIcon />,
//         icons5: <IosShareIcon />,
//          more: <MoreHorizIcon />,
//         tweets : [
//             {
//                 tweetText : "Earned..Not Given.",
//                 tweetPic : "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
//                 tweetCount : 700,
//                 retweetCount : 700 ,
//                 likesCount : 900,
//                 viewsCount : '102k',
//                 TweetReplies : [
//                     {
//                       profileIcon: (
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                       ),
//                         name : 'arya patil',
//                         handlerName : '@aryap',
//                         tweetReplyText : 'what a hardworking person'
//                     },
//                     {
//                       profileIcon: (
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                       ),
//                         name : 'rinku',
//                         name : 'sam curran',
//                         handlerName : '@samcurran1234',
//                         tweetReplyText : 'woo..excellent'
//                     },
  
//                 ]
//             },
//             {
//               tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//               tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//               tweetCount : 100,
//               retweetCount : 100 ,
//               likesCount : 100,
//               viewsCount : '102k',
//               TweetReplies : [
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'vijaya sharma',
//                       handlerName : '@sharma545',
//                       tweetReplyText : 'it is nice'
//                   },
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'saniya mirza',
//                       handlerName : '@mirza',
//                       tweetReplyText : 'that is very intersting'
//                   },
  
//               ]
//           },
          
//         ],
//       },
  


  
//     {
//       id:nanoid(),
//       profileIcon: (
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       ),
//       name: "Andrew Elliott",
//       handlerName: "@andrewje_home",
//       organization: "",
//         followers : 200,
//         followings : 400,
//         joinedDate : '22 dec 2022',
//         icons1: <ChatBubbleOutlineIcon />,
//         icons2: <SwapCallsIcon />,
//         icons3: <FavoriteBorderIcon />,
//          icons4: <EqualizerIcon />,
//         icons5: <IosShareIcon />,
//          more: <MoreHorizIcon />,
//         tweets : [
//             {
//                 tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//                 tweetPic : "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
//                 tweetCount : 100,
//                 retweetCount : 100 ,
//                 likesCount : 100,
//                 viewsCount : '102k',
//                 TweetReplies : [
//                     {
//                       profileIcon: (
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                       ),
//                       name : 'rinku',
//                       name : 'sam curran',
//                       handlerName : '@samcurran1234',
//                       tweetReplyText : 'woo..excellent'
//                     },
//                     {
//                       profileIcon: (
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                       ),
//                       name : 'rinku',
//                       name : 'sam curran',
//                       handlerName : '@samcurran1234',
//                       tweetReplyText : 'woo..excellent'
//                     },
  
//                 ]
//             },
//             {
//               tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//               tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//               tweetCount : 100,
//               retweetCount : 100 ,
//               likesCount : 100,
//               viewsCount : '102k',
//               TweetReplies : [
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'vijaya sharma',
//                       handlerName : '@sharma545',
//                       tweetReplyText : 'it is nice'
//                   },
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                       name : 'saniya mirza',
//                       handlerName : '@mirza',
//                       tweetReplyText : 'that is very intersting'
//                   },
  
//               ]
//           },
           
//         ],
//       },
  


//   {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "RVCJ Media",
//     handlerName: "@RVCJ_FB",
//     organization: "",
//       followers : 200,
//       followings : 400,
//       joinedDate : '22 dec 2022',
//       icons1: <ChatBubbleOutlineIcon />,
//       icons2: <SwapCallsIcon />,
//       icons3: <FavoriteBorderIcon />,
//        icons4: <EqualizerIcon />,
//       icons5: <IosShareIcon />,
//        more: <MoreHorizIcon />,
//       tweets : [
//           {
//               tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//               tweetPic : "https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080",
//               tweetCount : 100,
//               retweetCount : 100 ,
//               likesCount : 100,
//               viewsCount : '102k',
//               TweetReplies : [
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                     name : 'rinku',
//                     name : 'sam curran',
//                     handlerName : '@samcurran1234',
//                     tweetReplyText : 'woo..excellent'
//                   },
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                     name : 'rinku',
//                     name : 'sam curran',
//                     handlerName : '@samcurran1234',
//                     tweetReplyText : 'woo..excellent'
//                   },

//               ]
//           },
//           {
//             tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//             tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//             tweetCount : 100,
//             retweetCount : 100 ,
//             likesCount : 100,
//             viewsCount : '102k',
//             TweetReplies : [
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                     name : 'vijaya sharma',
//                     handlerName : '@sharma545',
//                     tweetReplyText : 'it is nice'
//                 },
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                     name : 'saniya mirza',
//                     handlerName : '@mirza',
//                     tweetReplyText : 'that is very intersting'
//                 },

//             ]
//         },
         
//       ],
//     },


//   {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "BJP",
//     handlerName: "@BJP4India",
//     organization: "",
//       followers : 200,
//       followings : 400,
//       joinedDate : '22 dec 2022',
//       icons1: <ChatBubbleOutlineIcon />,
//       icons2: <SwapCallsIcon />,
//       icons3: <FavoriteBorderIcon />,
//        icons4: <EqualizerIcon />,
//       icons5: <IosShareIcon />,
//        more: <MoreHorizIcon />,
//       tweets : [
//           {
//               tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//               tweetPic : "https://lh3.googleusercontent.com/gt2P-cr6YN3T1bBsebU90SaZHJGZ1V2cfkb-bLvHu2MDYYt_69e-nkr-Ih6TLG1AB9YRLspbZLHPuUdrMOybhcRKnCzQlox5Mf6UPdm9CLqkNyRiC3iSYSs_MlZLDfCJBP1QX2UUAg=w1920-h1080",
//               tweetCount : 100,
//               retweetCount : 100 ,
//               likesCount : 100,
//               viewsCount : '102k',
//               TweetReplies : [
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
//                     name : 'sam curran',
//                     handlerName : '@samcurran1234',
//                     tweetReplyText : 'woo..excellent'
//                   },
//                   {
//                     profileIcon: (
//                       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                     ),
                   
//                     name : 'sam curran',
//                     handlerName : '@samcurran1234',
//                     tweetReplyText : 'woo..excellent'
//                   },

//               ]
//           },
//           {
//             tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//             tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//             tweetCount : 100,
//             retweetCount : 100 ,
//             likesCount : 100,
//             viewsCount : '102k',
//             TweetReplies : [
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                     name : 'vijaya sharma',
//                     handlerName : '@sharma545',
//                     tweetReplyText : 'it is nice'
//                 },
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                     name : 'saniya mirza',
//                     handlerName : '@mirza',
//                     tweetReplyText : 'that is very intersting'
//                 },

//             ]
//         },
         
//       ],
//     },

//    {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "Sudarsan Pattnaik",
//     handlerName: "@sudarsansand",
//     organization: "",
//     followers : 200,
//     followings : 400,
//     joinedDate : '22 dec 2022',
//     icons1: <ChatBubbleOutlineIcon />,
//     icons2: <SwapCallsIcon />,
//     icons3: <FavoriteBorderIcon />,
//      icons4: <EqualizerIcon />,
//     icons5: <IosShareIcon />,
//      more: <MoreHorizIcon />,
//     tweets : [
//         {
//             tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//             tweetPic : "https://lh3.googleusercontent.com/mTTckc-jkREvxkSdJAdrDXlRb6rSl0yP4DAUwXbMg1jzWclpLBhp7LNEDs2kIAd70tD25DSoOjbxJvPdrbLrMdEtcIa-xwt7srCZ1CDtGyysE5F8Y3Txo-ZKSMJekFC5U6ZNLJxPkA=w1920-h1080",
//             tweetCount : 100,
//             retweetCount : 100 ,
//             likesCount : 100,
//             viewsCount : '102k',
//             TweetReplies : [
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                   name : 'sam curran',
//                   handlerName : '@samcurran1234',
//                   tweetReplyText : 'woo..excellent'
//                 },
//                 {
//                   profileIcon: (
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                   ),
//                   name : 'sam curran',
//                   handlerName : '@samcurran1234',
//                   tweetReplyText : 'woo..excellent'
//                 },

//             ]
//         },
//         {
//           tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//           tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//           tweetCount : 100,
//           retweetCount : 100 ,
//           likesCount : 100,
//           viewsCount : '102k',
//           TweetReplies : [
//               {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                   name : 'vijaya sharma',
//                   handlerName : '@sharma545',
//                   tweetReplyText : 'it is nice'
//               },
//               {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                   name : 'saniya mirza',
//                   handlerName : '@mirza',
//                   tweetReplyText : 'that is very intersting'
//               },

//           ]
//       },
       
//       ],
//     },


//   {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "Arvind Kumar",
//       handlerName: "@arvindtw",
//       organization: "",
//    followers : 200,
//    followings : 400,
//    joinedDate : '22 dec 2022',
//    icons1: <ChatBubbleOutlineIcon />,
//    icons2: <SwapCallsIcon />,
//    icons3: <FavoriteBorderIcon />,
//     icons4: <EqualizerIcon />,
//    icons5: <IosShareIcon />,
//     more: <MoreHorizIcon />,
//    tweets : [
//        {
//            tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//            tweetPic :  "https://lh3.googleusercontent.com/kz4VelwgiZ13GRb399l_q9THO2vsDQUMZveP8cGVRDVs68JPkzy8cIyv0KIv6mDWhOxOwjacsar27MlBa05du9Vdzlg5GIgwW2qQjN7rBacdIxr17wo_dpj7OuaXs0NhSRTJissedA=w1920-h1080",
//            tweetCount : 100,
//            retweetCount : 100 ,
//            likesCount : 100,
//            viewsCount : '102k',
//            TweetReplies : [
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'sam curran',
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },
//                { 
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'sam curran',
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },

//            ]
//        },
//        {
//         tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//         tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//         tweetCount : 100,
//         retweetCount : 100 ,
//         likesCount : 100,
//         viewsCount : '102k',
//         TweetReplies : [
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'vijaya sharma',
//                 handlerName : '@sharma545',
//                 tweetReplyText : 'it is nice'
//             },
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'saniya mirza',
//                 handlerName : '@mirza',
//                 tweetReplyText : 'that is very intersting'
//             },

//         ]
//     },
      
//       ],
//     },


//   {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "kimkk",
//     handlerName: "@ippittipapitti",
//     organization: "",
//    followers : 200,
//    followings : 400,
//    joinedDate : '22 dec 2022',
//    icons1: <ChatBubbleOutlineIcon />,
//    icons2: <SwapCallsIcon />,
//    icons3: <FavoriteBorderIcon />,
//     icons4: <EqualizerIcon />,
//    icons5: <IosShareIcon />,
//     more: <MoreHorizIcon />,
//    tweets : [
//        {
//            tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//            tweetPic : "https://lh3.googleusercontent.com/CL56HTt6Gs_Yq_AXRzINUBKSTEk6inm4vf52hTAEWS3ZxHj2uDy3SBvAh6mDw0CMAVVzxmA11jys5rWGFU5a8oA7A0MSq4SI6ScAHjaiagG5IC_M_iA_7OkQhNMZBQuXCMX-StMHIg=w1920-h1080",
//            tweetCount : 100,
//            retweetCount : 100 ,
//            likesCount : 100,
//            viewsCount : '102k',
//            TweetReplies : [
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'sam curran',
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'sammy',
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },

//            ]
//        },
//        {
//         tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//         tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//         tweetCount : 100,
//         retweetCount : 100 ,
//         likesCount : 100,
//         viewsCount : '102k',
//         TweetReplies : [
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'vijaya sharma',
//                 handlerName : '@sharma545',
//                 tweetReplyText : 'it is nice'
//             },
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'saniya mirza',
//                 handlerName : '@mirza',
//                 tweetReplyText : 'that is very intersting'
//             },

//         ]
//     },
      
//       ],
//     },


//   {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "Dainik Bhaskar",
//     handlerName: "@DainikBhaskar",
//     organization: "Tv News",
//    followers : 200,
//    followings : 400,
//    joinedDate : '22 dec 2022',
//    icons1: <ChatBubbleOutlineIcon />,
//    icons2: <SwapCallsIcon />,
//    icons3: <FavoriteBorderIcon />,
//     icons4: <EqualizerIcon />,
//    icons5: <IosShareIcon />,
//     more: <MoreHorizIcon />,
//    tweets : [
//        {
//            tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//            tweetPic : "https://lh3.googleusercontent.com/9qfuVqMrGUGsmOWlloXw9xqonA1btjoBRVFGMZxIZkYANGZGoQpeQuCVSVxAQYjggYOT8kyTlsf-I4I2Ar4-izKrH8Gps7xDNq_9GJ4QyI5tERgrWH2HgB7bt1Cp65UfkZwVrpcC9A=w1920-h1080",
//            tweetCount : 100,
//            retweetCount : 100 ,
//            likesCount : 100,
//            viewsCount : '102k',
//            TweetReplies : [
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'rinku',
                
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'rinku',
//                  name : 'sam curran',
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },

//            ]
//        },
//        {
//         tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//         tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//         tweetCount : 100,
//         retweetCount : 100 ,
//         likesCount : 100,
//         viewsCount : '102k',
//         TweetReplies : [
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'vijaya sharma',
//                 handlerName : '@sharma545',
//                 tweetReplyText : 'it is nice'
//             },
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'saniya mirza',
//                 handlerName : '@mirza',
//                 tweetReplyText : 'that is very intersting'
//             },

//         ]
//     },
      
//       ],
//     },

 
//   {
//     id:nanoid(),
//     profileIcon: (
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//     ),
//     name: "Madhya Pradesh Tourism",
//       handlerName: "@MPTourism",
//       organization: "Mp tourism",
//    followers : 200,
//    followings : 400,
//    joinedDate : '22 dec 2022',
//    icons1: <ChatBubbleOutlineIcon />,
//    icons2: <SwapCallsIcon />,
//    icons3: <FavoriteBorderIcon />,
//     icons4: <EqualizerIcon />,
//    icons5: <IosShareIcon />,
//     more: <MoreHorizIcon />,
//    tweets : [
//        {
//            tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//            tweetPic : "https://lh3.googleusercontent.com/gyVQi-t5YrzlIrjmHfngOfmDKQOnICIwp3fHGjesIVQ8JCj-A0IU7GU9xc0PUS1bqr_uXIbsWLApie_FMq4kEqc7HZ789NrrZxghtedBFl1VfN5owv8nYoWT4ZYAXpWUojS2Xnfv6w=w1920-h1080",
//            tweetCount : 100,
//            retweetCount : 100 ,
//            likesCount : 100,
//            viewsCount : '102k',
//            TweetReplies : [
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'rinku',
                 
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },
//                {
//                 profileIcon: (
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 ),
//                  name : 'rinku',
//                  name : 'sam curran',
//                  handlerName : '@samcurran1234',
//                  tweetReplyText : 'woo..excellent'
//                },

//            ]
//        },
//        {
//         tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
//         tweetPic : "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//         tweetCount : 100,
//         retweetCount : 100 ,
//         likesCount : 100,
//         viewsCount : '102k',
//         TweetReplies : [
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'vijaya sharma',
//                 handlerName : '@sharma545',
//                 tweetReplyText : 'it is nice'
//             },
//             {
//               profileIcon: (
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//               ),
//                 name : 'saniya mirza',
//                 handlerName : '@mirza',
//                 tweetReplyText : 'that is very intersting'
//             },

//         ]
//     },
      
//       ],
//     },
//   ]
// })

export const profileAtom = atom({
  key: "profileData",
  default: { isProfileOpen: false },
});
