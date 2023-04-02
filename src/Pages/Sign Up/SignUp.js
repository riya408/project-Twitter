import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import NameValidations from "../../Helper/Name Validations/NameValidations";
import PasswordValidations from "../../Helper/Password Validations/PasswordValidations";
import EmailValidations from "../../Helper/Email Validations/EmailValidations";
import NumberValidations from "../../Helper/Number Validations/NumberValidations";
import { useRecoilState } from "recoil";
import { LoginState } from "../../Recoil State/Login State/LoginState";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import CustomInput from "../../Molecules/Custom Input/CustomInput";
import CustomSelect from "../../Molecules/Custom Select/CustomSelect";
import { dateArray, monthArray, yearArray } from "../../Fixtures/BirthDate";
import Style from "./SignUp.module.css";
import Dialog from "@mui/material/Dialog";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { nanoid } from "nanoid";  

function SignUp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [allUserDetails, setAllUserDetails] = useState([]);
  const [islogin, setIsLogin] = useRecoilState(LoginState);
  const navigate = useNavigate();

  const matches = useMediaQuery("(min-width:657px)");

  useEffect(() => {
    if (localStorage.getItem("UsersDetails")) {
      let usersDetails = JSON.parse(localStorage.getItem("UsersDetails"));
      console.log(usersDetails, "i am from local storage data");
      setAllUserDetails(usersDetails);
    }
  }, []);

  function handleNext() {
    setShow(true);
  }

  function handleName(e) {
    setName(e.target.value);
    let nameValid = NameValidations(name);
    setNameError(nameValid);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    let emailValid = EmailValidations(email);
    setEmailError(emailValid);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
    let phoneValid = NumberValidations(phone);
    setPhoneError(phoneValid);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    let passwordValid = PasswordValidations(password);
    setPasswordError(passwordValid);
  }

  function handleDate(inputDate) {
    setDate(inputDate);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth);
  }
  function handleYear(inputYear) {
    setYear(inputYear);
  }

  function showEmailInput() {
    if (!showEmail) setShowEmail(true);
    else setShowEmail(false);
  }

  function handleSubmit() {
    const alreadyRegister = allUserDetails.find(
      (x) => x.Email === email && x.Phone === phone
    );
    if (alreadyRegister) {
      alert(
        `${alreadyRegister.Name} you are already Register You can go to login Page`
      );
      navigate("/");
    } else {
      if ((email === "" && phone === "") || password === "" || name === "") {
        alert("Please fill the input box");
      } else if ((emailError && phoneError) || nameError || passwordError) {
        alert(`You have enter wrong details`);
      } else {
        const userData = {
          id: nanoid(),
          Name: name,
          Email: email,
          Phone: phone,
          Password: password,
          DOB: date + " " + month + " " + year,
        };
        allUserDetails.push(userData);
        setAllUserDetails([...allUserDetails]);
        localStorage.setItem("UsersDetails", JSON.stringify(allUserDetails));
        alert(`${name}, you are successfully registered!`);
        setIsLogin(true);
        navigate("/");
        localStorage.setItem("matchedUser", JSON.stringify(userData));
      }
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
                  <h1 className={Style.heading1}>Create your account</h1>
                  <CustomInput
                    className={
                      nameError ? Style.inputUser : Style.inputUserName
                    }
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                  />
                  <span className={Style.error}>{nameError}</span>
                  {showEmail ? (
                    <>
                      <CustomInput
                        className={
                          emailError ? Style.inputUser : Style.inputUserName
                        }
                        type="text"
                        value={email}
                        onChange={handleEmail}
                        placeholder="Email"
                      />
                      <span className={Style.error}>{emailError}</span>
                    </>
                  ) : (
                    <>
                      <CustomInput
                        className={
                          phoneError ? Style.inputUser : Style.inputUserName
                        }
                        type="text"
                        value={phone}
                        onChange={handlePhone}
                        placeholder="Phone Number"
                      />
                      <span className={Style.error}>{phoneError}</span>
                    </>
                  )}
                  <span onClick={showEmailInput} className={Style.ForgotText}>
                    {showEmail
                      ? "Use Phone Number Instead"
                      : " Use Email Instead"}
                  </span>
                  <span className={Style.ForgotText}></span>
                  <span>
                    <CustomInput
                      value={password}
                      onChange={handlePassword}
                      className={
                        passwordError ? Style.inputUser : Style.inputUserName
                      }
                      type={showing ? "text" : "password"}
                      placeholder="Password"
                    />
                  </span>
                  <span className={Style.error}>{passwordError}</span>
                  <div className={Style.dobContainer}>
                    <span className={Style.maindobText}>
                      When's your birthday?
                    </span>
                    <span className={Style.dobText}>
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </span>
                  </div>
                  <div className={Style.selectBox}>
                    <CustomSelect
                      className={Style.select}
                      data={dateArray}
                      handleSelect={handleDate}
                      defaultOption="Date"
                    />
                    <CustomSelect
                      className={Style.select}
                      data={monthArray}
                      handleSelect={handleMonth}
                      defaultOption="Month"
                    />
                    <CustomSelect
                      className={Style.select}
                      data={yearArray}
                      handleSelect={handleYear}
                      defaultOption="Year"
                    />
                  </div>
                </div>

                <CustomButton
                  onClick={handleSubmit}
                  className={
                    password && name && (email || phone)
                      ? Style.btnLogin
                      : Style.btnLoginDisable
                  }
                  buttonText="Sign up"
                />
              </div>
            </>
          ) : (
            <>
              <h1 className={Style.heading}>Join Twitter today</h1>
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

              <CustomButton
                className={Style.buttonStyleSignUp}
                onClick={handleNext}
                buttonText="Create Account"
              />
              <p
                className={Style.TermsSignup}
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  // marginLeft: "9.5rem",
                  // marginRight: "9.5rem",
                  marginBottom: "3rem",
                }}
              >
                By signing up, you agree to the{" "}
                <span className={Style.TermsDecoration}>Terms of Service</span>{" "}
                and{" "}
                <span className={Style.TermsDecoration}>Privacy Policy</span>,
                including{" "}
                <span className={Style.TermsDecoration}>Cookie Use</span>.
              </p>
            </>
          )}
          <span className={Style.FooterSpan}>
            Have an account already?{" "}
            <Link className={Style.FooterRouter} to="/">
              {" "}
              Login
            </Link>
            .
          </span>
        </div>
      </Dialog>
    </div>
  );
}

export default SignUp;
