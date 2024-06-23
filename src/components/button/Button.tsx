import React from "react";
import "./ButtonStyle.scss";

type ButtonProps = {
  bgColorClass: string;
  buttonText: string;
};

function Button({ bgColorClass, buttonText }: ButtonProps) {
  return (
    <button className={`main-button ${bgColorClass}`} type="button">
      {buttonText}
    </button>
  );
}

export default Button;
