import React from "react";
import "./MediumSmallTextStyle.scss";

type MediumSmallTextPVwrops = {
  text: string;
  textColor: string;
  fontSizeVw: number;
  lineHeightVw: number;
};

function MediumSmallText({
  text,
  textColor,
  fontSizeVw,
  lineHeightVw,
}: MediumSmallTextPVwrops) {
  return (
    <h3
      className={`medium-small-text ${textColor}`}
      style={{ fontSize: `${fontSizeVw}vw`, lineHeight: `${lineHeightVw}vw` }}
    >
      {text}
    </h3>
  );
}

export default MediumSmallText;
