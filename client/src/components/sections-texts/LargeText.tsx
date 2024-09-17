import React from "react";
import "./LargeTextStyle.scss";

type LargeTextProps = {
  text: string;
  textColor: string;
  fontSizeVw: number;
  lineHeightVw: number;
};
function LargeText({
  text,
  textColor,
  fontSizeVw,
  lineHeightVw,
}: LargeTextProps) {
  return (
    <h1
      className={`large-text ${textColor}`}
      style={{ fontSize: `${fontSizeVw}vw`, lineHeight: `${lineHeightVw}vw` }}
    >
      {text}
    </h1>
  );
}

export default LargeText;
