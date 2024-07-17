import React from "react";
import "./MediumSmallTextStyle.scss";

type MediumSmallTextProps = {
  text: string;
  textColor: string;
  fontSize: number;
  lineHeight: number;
};

function MediumSmallText({
  text,
  textColor,
  fontSize,
  lineHeight,
}: MediumSmallTextProps) {
  return (
    <h3
      className={`medium-small-text ${textColor}`}
      style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}
    >
      {text}
    </h3>
  );
}

export default MediumSmallText;
