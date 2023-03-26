import React from "react";
import buttonStyle from "../button/button.module.css";
export default function CustomButton({
  buttonText,
  text,
  texted,
  texting,
  style,
  teext,
  onClicking,
  value,
  btnTitle,
  btnValue,
  followBtn,
  btnVal,
  id

}) {
  return (
    <button className={buttonStyle.btn} style={style} onClick={onClicking} id={id}>
      {buttonText}
      {text}
      {texted}
      {texting}
      {teext}
      {value}
      {btnTitle}
      {btnValue}
      {followBtn}
      {btnVal}
    </button>
  );
}
