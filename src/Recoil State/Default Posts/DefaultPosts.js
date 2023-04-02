import { atom } from "recoil";

export const DefaultPosts = atom({
  key: "Post",
  default: [
    {
      id: 1,
      name: "Doctor Strange",
      handlerName: "@DoctorStrange",
      organization: "United States government organization",
      profilePic:
        "https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "Never tamper with the spell.",
          tweetPic: "https://giffiles.alphacoders.com/214/214285.gif",
          commentText: "Never tamper with the spell.",
          tweetCount: 100,
          retweetCount: 100,
          likesCount: 100,
          viewsCount: "102k",
          TweetReplies: [
            {
              name: "Christine Palmer",
              handlerName: "@Christine",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Ancient One",
              handlerName: "@Ancient1",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Scarlet Witch",
      handlerName: "@TheScarletWitch",
      profilePic:
        "https://www.sideshow.com/storage/product-images/909698/scarlet-witch_marvel_square.jpg",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "I have everything under control.",
          tweetPic:
            "https://media0.giphy.com/media/1Euph36tcV2KmmgGEC/giphy.gif",
          commentText: "I have everything under control.",
          tweetCount: 200,
          retweetCount: 200,
          likesCount: 200,
          viewsCount: "10k",
          hastags: ["#wildLife", "#photoGraphy"],
          TweetReplies: [
            {
              name: "Victor Shade",
              handlerName: "@TheVision",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Pietro Maximoff",
              handlerName: "@MaximoffPietro",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Spider Man",
      handlerName: "@SpiderMan",
      profilePic:
        "https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "With great power comes great responsibility.",
          tweetPic: "https://giffiles.alphacoders.com/155/15523.gif",
          commentText: "With great power comes great responsibility.",

          tweetCount: 700,
          retweetCount: 700,
          likesCount: 900,
          viewsCount: "100k",
          refLink: "https://www.globalwildlife.org/blog/",
          TweetReplies: [
            {
              name: "Peter One",
              handlerName: "@Peter1",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Peter Two",
              handlerName: "@Peter2",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Loki",
      handlerName: "@PrinceOfAsgard",
      profilePic:
        "https://c.sop.saavncdn.com/Off-The-Top-e489-Loki-episodes-1-2-English-2021-500x500.jpg",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "Trust me, I didn't do anything.",
          tweetPic:
            "https://thumbs.gfycat.com/HelplessImpeccableGuanaco-size_restricted.gif",
          commentText: "Trust me, I didn't do anything.",

          tweetCount: 400,
          retweetCount: 327,
          likesCount: 90,
          viewsCount: "7k",
          hastags: ["#sports", "#Winners"],
          TweetReplies: [
            {
              name: "Sylvie Laufeydottir",
              handlerName: "@LadyLoki",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Alligator Loki",
              handlerName: "@GatorLoki",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Natasha Romanoff",
      handlerName: "@BlackWidow",
      profilePic:
        "https://c.sop.saavncdn.com/Off-The-Top-8427-Black-Widow-English-2021-500x500.jpg",
      organization: "",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
      tweets: [
        {
          tweetText: "You should know, I'm a better shot when I'm pissed off.",
          tweetPic:
            "https://i.pinimg.com/originals/b0/6b/05/b06b05ba3402b9c482f900d75b18ac31.gif",
          commentText:
            "You should know, I'm a better shot when I'm pissed off.",

          tweetCount: 650,
          retweetCount: 699,
          likesCount: 900,
          viewsCount: "17k",
          hastags: ["#HockeyLover", "#Hockey", "#Team India"],
          TweetReplies: [
            {
              name: "Yelena Belova",
              handlerName: "@ЕленаБелова",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "Clint Barton",
              handlerName: "@Hawkeye",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    },
  ],
});
