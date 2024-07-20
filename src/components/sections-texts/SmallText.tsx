import React from "react";
import "./SmallTextStyle.scss";

type SmallTextProps = {
  text: string;
  textColor: string;
  fontSizeVw: number;
  lineHeightVw: number;
};

function SmallText({
  text,
  textColor,
  fontSizeVw,
  lineHeightVw,
}: SmallTextProps) {
  return (
    <p
      className={`small-text ${textColor}`}
      style={{ fontSize: `${fontSizeVw}vw`, lineHeight: `${lineHeightVw}vw` }}
    >
      {text}
    </p>
  );
}

export default SmallText;
