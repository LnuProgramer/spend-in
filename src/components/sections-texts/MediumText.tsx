import React from "react";
import "./MediumTextStyle.scss";

type SectionsLabelprops = {
  text: string;
  textColor: string;
  fontSize: number;
  lineHeight: number;
};

function MediumText({
  text,
  textColor,
  fontSize,
  lineHeight,
}: SectionsLabelprops) {
  return (
    <h2
      className={`medium-text ${textColor}`}
      style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}
    >
      {text}
    </h2>
  );
}

export default MediumText;
