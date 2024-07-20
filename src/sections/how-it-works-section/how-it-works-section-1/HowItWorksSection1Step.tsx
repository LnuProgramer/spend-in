import React from "react";
import "./HowItWorksSection1StepStyle.scss";
import MediumText from "../../../components/sections-texts/MediumText";
import MediumSmallText from "../../../components/sections-texts/MediumSmallText";

type HowItWorksSection1StepProps = {
  imgSrc: string;
  circleText: string;
  mediumSmallText: string;
};

function HowItWorksSection1Step({
  imgSrc,
  circleText,
  mediumSmallText,
}: HowItWorksSection1StepProps) {
  return (
    <div className="how-it-works-section-1-step-block-wrapper">
      <div className="how-it-works-section-1-step-circle">
        <MediumText
          text={circleText}
          textColor="white"
          fontSizeVw={1.66}
          lineHeightVw={2.5}
        />
      </div>
      <img
        src={imgSrc}
        alt="Step"
        className="how-it-works-section-1-step-img"
      />
      <div className="how-it-works-section-1-step-text">
        <MediumSmallText
          text={mediumSmallText}
          textColor="white"
          fontSizeVw={1.388}
          lineHeightVw={2.083}
        />
      </div>
    </div>
  );
}

export default HowItWorksSection1Step;
