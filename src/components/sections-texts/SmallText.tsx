import React from "react";
import "./SmallTextStyle.scss";

type SectionDescriptionprops = {
  text: string;
  textColor: string;
  fontSize: number;
  lineHeight: number;
};

function SmallText({
  text,
  textColor,
  fontSize,
  lineHeight,
}: SectionDescriptionprops) {
  return (
    <p
      className={`small-text ${textColor}`}
      style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}
    >
      {text}
    </p>
  );
}

export default SmallText;
