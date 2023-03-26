import React from "react";
import InputStyle from "../InputFields/input.module.css";
function CustomInputFields({ abc, handleChange, type , style,value}) {
  return (
    <input
      type={type}
      placeholder={abc}
      className={InputStyle.text}
      style={style}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default CustomInputFields;
