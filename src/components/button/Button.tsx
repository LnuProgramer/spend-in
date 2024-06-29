import React, { useState } from "react";
import "./ButtonStyle.scss";

type ButtonProps = {
  buttonColor: string;
  buttonText: any;
};

function Button({ buttonColor, buttonText }: ButtonProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleonClick = () => {
    setIsFocused(true);
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };
  return (
    <button
      className={`main-button ${buttonColor} ${
        isFocused ? "focus-temporary" : ""
      }`}
      type="button"
      onClick={handleonClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
