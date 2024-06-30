import React from "react";
import "./SectionDescriptionStyle.scss";

type SectionDescriptionprops = {
  text: string;
};

function SectionDescription({ text }: SectionDescriptionprops) {
  return <p className="section-description">{text}</p>;
}

export default SectionDescription;
