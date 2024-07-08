import React from "react";
import "./LargeTextStyle.scss";

type LargeSectionsLabelprops = {
  text: string;
  textColor: string;
  fontSize: number;
  lineHeight: number;
};
function LargeText({
  text,
  textColor,
  fontSize,
  lineHeight,
}: LargeSectionsLabelprops) {
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
