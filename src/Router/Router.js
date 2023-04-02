import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/Sign Up/SignUp";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import PeopleProfile from "../Pages/People Profile/PeopleProfile";
import Thread from "../Pages/Thread/Thread";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/peopleprofile/:name" element={<PeopleProfile />}></Route>
        <Route path="/thread" element={<Thread />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
