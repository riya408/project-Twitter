import React from "react";

function CustomButton({ buttonText, startIcon, onClick, className }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {startIcon}
        {buttonText}
      </button>
    </div>
  );
}

export default CustomButton;
