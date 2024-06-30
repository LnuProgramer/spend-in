import React from "react";
import "./SectionsLabelStyle.scss";

type SectionsLabelprops = {
  text: string;
};

function SectionsLabel({ text }: SectionsLabelprops) {
  return <h2 className="sections-label">{text}</h2>;
}

export default SectionsLabel;
