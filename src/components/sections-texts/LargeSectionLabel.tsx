import React from "react";
import "./LargeSectionLabelStyle.scss";

type LargeSectionsLabelprops = {
  text: string;
  textColor: string;
};
function LargeSectionLabel({ text, textColor }: LargeSectionsLabelprops) {
  return <h1 className={`large-section-label ${textColor}`}>{text}</h1>;
}

export default LargeSectionLabel;
