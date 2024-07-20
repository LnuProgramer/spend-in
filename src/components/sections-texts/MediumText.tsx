import React from "react";
import "./MediumTextStyle.scss";

type MediumTextProps = {
  text: string;
  textColor: string;
  fontSizeVw: number;
  lineHeightVw: number;
};

function MediumText({
  text,
  textColor,
  fontSizeVw,
  lineHeightVw,
}: MediumTextProps) {
  return (
    <h2
      className={`medium-text ${textColor}`}
      style={{ fontSize: `${fontSizeVw}vw`, lineHeight: `${lineHeightVw}vw` }}
    >
      {text}
    </h2>
  );
}

export default MediumText;
