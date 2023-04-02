import React from "react";
import styles from "./Home.module.css";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleHomeSection from "../../Sections/Middle Home Section/MiddleHomeSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import { LoginState } from "../../Recoil State/Login State/LoginState";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function Home() {
  const [islogin, setIsLogin] = useRecoilState(LoginState);
  const navigate = useNavigate();
  useEffect(() => {
    if (islogin === false) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.LeftHomeSectionContainer}>
        <LeftHomeSection />
      </div>
      <div className={styles.MiddleHomeSectionContainer}>
        <MiddleHomeSection />
      </div>
      <div className={styles.RightHomeSectionContainer}>
        <RightHomeSection />
      </div>
    </div>
  );
}

export default Home;
