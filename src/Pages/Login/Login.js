import React from "react";
import Style from "./Login.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import CustomInput from "../../Molecules/Custom Input/CustomInput";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../Recoil State/Login State/LoginState";
import AppleIcon from "@mui/icons-material/Apple";
import useMediaQuery from "@mui/material/useMediaQuery";

function Login() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [password, setPassword] = useState("");
  const [mixed, setMixed] = useState("");
  const navigate = useNavigate();
  const [detailsMatched, setDetailsMatched] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(LoginState);

  const matches = useMediaQuery("(min-width:657px)");

  let usersDetails = JSON.parse(localStorage.getItem("UsersDetails"));

  function passwordShow() {
    if (showing) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleMixed(e) {
    setMixed(e.target.value);
  }

  function handleNext() {
    if (mixed === "") {
      alert("Please enter your email, phone or name");
    } else {
      let matchedUserData = usersDetails.filter(
        (element) =>
          element.Email === mixed ||
          element.Phone === mixed ||
          element.Name === mixed
      );
      console.log(matchedUserData, "matchedUserData login page");
      if (matchedUserData.length !== 0) {
        setDetailsMatched(matchedUserData[0]);
        setShow(true);
      } else {
        alert("User not found!");
        // eslint-disable-next-line no-restricted-globals
        let userDecission = confirm("You need to register yourself first!");
        if (userDecission) {
          // setIsLogin(true)
          navigate("/signup");
        }
      }
    }
  }

  function handleLogin() {
    console.log(detailsMatched, "matched obj");
    if (detailsMatched.Password === password) {
      alert(`Hey ${detailsMatched.Name}, welcome to Twitter!`);
      localStorage.setItem("matchedUser", JSON.stringify(detailsMatched));

      setIsLogin(true);
      navigate("/home");
    } else {
      alert("Invalid password!");
    }
  }
  console.log(matches, "This is from matches");

  return (
    <div>
      <Dialog
        BackdropProps={{
          style: { backgroundColor: matches ? "gray" : "white" },
        }}
        PaperProps={{
          style: {
            borderRadius: 20,
            boxShadow: matches ? "4px 4px 20px rgba(0, 0, 0, 0.25)" : "none",
          },
        }}
        open={true}
      >
        <div className={Style.container}>
          <TwitterIcon
            className={Style.icon}
            fontSize="large"
            sx={{ color: "#00acee" }}
          />
          {show ? (
            <>
              <div className={Style.mainNextContainer}>
                <div className={Style.nextContainer}>
                  <h1 className={Style.heading}>Enter your password</h1>
                  <CustomInput
                    className={Style.inputUserName}
                    type="text"
                    placeholder=""
                    value={mixed}
                  />
                  <CustomInput
                    value={password}
                    onChange={handlePassword}
                    className={Style.inputUserName}
                    type={showing ? "text" : "password"}
                    placeholder="Password"
                  />
                  <span className={Style.ForgotText1}>Forgot password?</span>
                </div>

                <CustomButton
                  onClick={handleLogin}
                  className={
                    password ? Style.btnLogin1 : Style.btnLoginDisable1
                  }
                  buttonText="Log in"
                />
              </div>
              <span className={Style.FooterSpan1}>
                Don't have an account?{" "}
                <Link className={Style.FooterRouter1} to="/signup">
                  {" "}
                  Sign up
                </Link>
              </span>
            </>
          ) : (
            <>
              <h1 className={Style.heading}>Sign in to Twitter</h1>
              <CustomButton
                startIcon={
                  <FcGoogle
                    style={{ fontSize: "1.35rem", marginRight: "0.5rem" }}
                  />
                }
                buttonText="Sign in with Google"
                className={Style.buttonStyleGoogle}
              />
              <CustomButton
                startIcon={<AppleIcon style={{ marginRight: "0.5rem" }} />}
                buttonText="Sign in with Apple"
                className={Style.buttonStyleApple}
              />
              <p className={Style.para}>
                <span className={Style.paraSpan}>or</span>
              </p>
              <CustomInput
                value={mixed}
                onChange={handleMixed}
                className={Style.input}
                type="text"
                placeholder="Phone, email, or name"
              />
              <CustomButton
                className={Style.buttonStyleNext}
                onClick={handleNext}
                buttonText="Next"
              />
              <CustomButton
                className={Style.buttonStyleFP}
                buttonText="Forgot Password?"
              />
              <span className={Style.FooterSpan}>
                Don't have an account?{" "}
                <Link className={Style.FooterRouter} to="/signup">
                  {" "}
                  Sign up
                </Link>
                .
              </span>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default Login;
