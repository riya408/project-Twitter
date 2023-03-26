import React, { useEffect } from "react";
import Left from "../LeftSide/left";
import homeStyle from "../Home/home.module.css";
import Middle from "../Middle/middle";
import Right from "../Right/right";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../atom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isUserLoggedIn = useRecoilValue(userInfo);
  console.log(isUserLoggedIn.isUserLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn.isUserLoggedIn === false) {
      navigate("/signin");
    }
  }, [isUserLoggedIn.isUserLoggedIn]);

  return (
    <div className={homeStyle.wrapper}>
      <Left className={homeStyle.Left}/>
      <Middle/>
      <Right className={homeStyle.right}/>
    </div>
  );
}

export default Home;
