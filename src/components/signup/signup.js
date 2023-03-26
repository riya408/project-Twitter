import React from "react";
import CustomButton from "../../atoms/button/button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TwitterIcon from "@mui/icons-material/Twitter";
// import CustomInputFields from "../../atoms/InputFields/input";
import SignupStyle from "../signup/signup.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function SignUp() {
  

  const navigate = useNavigate();
  const route = () => {
    let path = "/register";
    navigate(path);
  };
 const matches=useMediaQuery("(min-width:657px)")
//  console.log(matches)
  return (
    <Dialog open className={SignupStyle.dialog}
    
    BackdropProps={{ style: { backgroundColor:matches ? "grey" :"white"} }}
    
    PaperProps={{
      style: {
        borderRadius: "20px",
       boxShadow:matches ?"4px 4px 20px rgba(0,0,0.25)":"none"
      },
    }}>
      <div className={SignupStyle.icon}>
        <TwitterIcon className={SignupStyle.image} sx={{fontWeight:"900px" , fontSize:"2rem"}} />
      </div>

      <div className={SignupStyle.container}>
        <DialogTitle className={SignupStyle.title} sx={{fontWeight:"900px" , fontSize:"2rem" }}>
          Join Twitter Today
        </DialogTitle>
        <div className={SignupStyle.btn1}>
          <GoogleIcon />

          <CustomButton buttonText="Sign in with Google" />
        </div>

        <div className={SignupStyle.btn2}>
          <AppleIcon />
          <CustomButton text="Sign in with Apple" />
        </div>

       <h5 className={SignupStyle.heading1}>------------------------ or -------------------------</h5>
        <div className={SignupStyle.texxt}>
          <CustomButton
            teext="Sign with a phone number or email"
            onClicking={route}
          />
        </div>
        <div className={SignupStyle.para}>
          <p>
            By signing up, you agree to the{" "}
            <span style={{ color: " rgb(27, 123, 214)" }}>
              {" "}
              Terms of Service
            </span>{" "}
            and{" "}
            <span style={{ color: " rgb(27, 123, 214)" }}>
              {" "}
              Privacy Policy{" "}
            </span>{" "}
            , including{" "}
            <span style={{ color: " rgb(27, 123, 214)" }}> Cookie Use.</span>
          </p>
        </div>
        <div className={SignupStyle.login}>
          <p> Have an account already?</p>
          <Link to="/signin" className={SignupStyle.link}>
            Log in
          </Link>
        </div>
      </div>
    </Dialog>
  );
}
