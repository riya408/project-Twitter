import React from "react";

function CustomInput({ type, placeholder, className, onChange, value }) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}

export default CustomInput;
