import React from "react";
import "./LargeTextStyle.scss";

type LargeTextProps = {
  text: string;
  textColor: string;
  fontSize: number;
  lineHeight: number;
};
function LargeText({ text, textColor, fontSize, lineHeight }: LargeTextProps) {
  return (
    <h1
      className={`large-text ${textColor}`}
      style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}
    >
      {text}
    </h1>
  );
}

export default LargeText;
