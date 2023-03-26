import React, { useState } from "react";
import CustomButton from "../../atoms/button/button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import registerStyle from "../Register/Register.module.css";
import CustomInputFields from "../../atoms/InputFields/input";
import {
  isValidEmail,
  isValidPass,
  isValidPhone,
  usernameValidation,
} from "../../Helper/validtion";
import { useRecoilState } from "recoil";
import { userInfo } from "../../atom";
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

const Register = () => {
  const [instead, setinstead] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useRecoilState(userInfo);
  const [month, setMonth] = useState("")
  const [date, setDate] = useState("")
  const [year, setYear] = useState("")

  const navigate = useNavigate()




  function handleEmail(inputEmail) {
    setEmail(inputEmail);
  }
  function handlePassword(inputPass) {
    setPassword(inputPass);
  }
  function handlePhone(inputPhone) {
    setPhone(inputPhone);
  }
  function handleUsername(inputUsername) {
    setUsername(inputUsername);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth.target.value)
    console.log(inputMonth.target.value)
  }
  function handleDate(inputDate) {
    setDate(inputDate.target.value)
    console.log(inputDate.target.value)
  }
  function handleYear(inputYear) {
    setYear(inputYear.target.value)
    console.log(inputYear.target.value)
  }
  let dob = month + "-" + date + "-" + year
  console.log(dob)

  let isEmailValid = isValidEmail(email);
  const isPasswordValid = isValidPass(password);
  const isUsernameValid = usernameValidation(username);
  let isPhoneNumberValid = isValidPhone(phone);
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const matches=useMediaQuery("(min-width:657px)")

  function handleSubmit() {


    if (email) {
      let flag = false;
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email == email) {
          flag = true;
        }
      }
      if (flag) {
        alert("Email is already existed , please use different email");
      } else {
        userData.push({
          email: email.toLowerCase(),
          password: password,
          username: username,
          DOB: dob,
          isUserLoggedIn: loggedIn.isUserLoggedIn,
        });
      }
    } else {
      let flag = false;
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].phoneNumber == phone) {
          flag = true;
        }
      }
      if (flag) {
        alert("Phone Number is already in use");
      } else {
        userData.push({
          password: password,
          phoneNumber: phone,
          username: username,
          DOB: dob,
          isUserLoggedIn: loggedIn.isUserLoggedIn,
        });
      }
    }

    console.log(email, password, phone, username);
    // let isEmailValid
    if (email) {
      isEmailValid = isValidEmail(email);
    }
    //   const isPasswordValid = isValidPass(password);
    // const isUsernameValid = usernameValidation(username);
    let isPhoneNumberValid;
    if (phone) {
      isPhoneNumberValid = isValidPhone(phone);
    }

    if (
      isUsernameValid == "Valid Username" &&
      isPasswordValid == "Valid Password" &&
      (isPhoneNumberValid == "Valid Phone number" ||
        isEmailValid == "Valid Email")
    ) {
      localStorage.setItem("userData", JSON.stringify(userData));
      setLoggedIn({ ...loggedIn, isUserLoggedIn: true });
      alert("you are successfully Registered");
      console.log(userData)
      navigate("/signin")


      setUsername("")
      setPassword("")
    } else if (
      isPasswordValid == "Invalid Password" ||
      isUsernameValid == "Invalid Username" ||
      (isPhoneNumberValid == "Invalid Phone number " &&
        isEmailValid == "Invalid email")
    ) {
      alert("Invalid Details");
    } else {
      alert("Enter details properly");
    }

  }
  const createDigits = () => {
    const digits = [];

    for (let i = 1903; i < 2006; i++) {
      digits.push(<option value={i}>{i}</option>);
    }

    return digits;
  };
  const createDigitsM = () => {
    const digitsm = [];

    for (let i = 1; i < 31; i++) {
      digitsm.push(<option value={i}>{i}</option>);
    }

    return digitsm;
  };
  return (
    <Dialog open
    BackdropProps={{ style: { backgroundColor:matches ? "grey" :"white"} }}
      PaperProps={{
        style: {
          borderRadius: "20px",
          boxShadow:matches ?"4px 4px 20px rgba(0,0,0.25)":"none",

          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        },
      }}>
      <DialogTitle className={registerStyle.title} sx={{ fontWeight: "900", fontSize: "2rem" }}>
        Create Your Account
      </DialogTitle>
      <div className={registerStyle.inputDiv}>
        <CustomInputFields
          abc="Enter Username "
          handleChange={handleUsername}
          type="text"
          value={username}
        />
        {isUsernameValid}

        <CustomInputFields
          abc="Password "
          handleChange={handlePassword}
          value={password}
          type="password"
        />
        {isPasswordValid}

        {instead === true ? (
          <CustomInputFields
            type="phonenumber"
            abc="Phone"
            handleChange={handlePhone}
          />
        ) : (
          <CustomInputFields
            type="text"
            abc="Email"
            value={email}
            handleChange={handleEmail}
          />
        )}
        <p
          onClick={() => {
            setinstead(!instead);
          }}
        >
          <u>
            {instead === true ? (
              <p style={{ color: "rgb(11, 109, 220)" }}>Use Email Instead</p>
            ) : (
              <p style={{ color: "rgb(11, 109, 220)" }}>Use Phone Instead</p>
            )}
          </u>
        </p>
      </div>
      <div className={registerStyle.dob}>
        <h4>Date of Birth</h4>
        <p>
          This will not be shown publicly. confirm your own age, even if this
          account is for a bussiness, a pet, or something else.
        </p>
      </div>
      <div className={registerStyle.month} >
        <select name="Month" onChange={handleMonth}>
          <option value="Month">Month</option>
          <option value="January">January</option>
          <option value="February">february</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select name="Day" onChange={handleDate}>
          <option value="Day">Day</option>
          {createDigitsM()}
        </select>
        <select name="Year" onChange={handleYear}>
          <option value="Year">Year</option>
          {createDigits()}
        </select>
      </div>
      <div className={registerStyle.next}>
        <CustomButton value="Register" onClicking={handleSubmit} />
      </div>
    </Dialog>
  );
};

export default Register;
