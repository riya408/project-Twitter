import "./App.css";
import Form from "./components/form/form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/signup/signup";
import Register from "./components/Register/Register";
import Home from "./components/Home/home";
import TweetProfile from "./components/TweetProfile/tweetProfile";
import ShowTweetReplies from "./components/TweetReply/tweetReplies";
import Profile from "./components/UserProfile/userprofile";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Form />,
    // },
    {
      path: "/signin",
      element: <Form />,

    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/tweetProfile",
      element:<TweetProfile/>
    },
    {
      path:"/tweetReplies",
      element:<ShowTweetReplies/>
    },
    {
      path:"/userProfile",
      element:<Profile/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
