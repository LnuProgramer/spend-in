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
          fontSize={24}
          lineHeight={36}
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
          fontSize={20}
          lineHeight={30}
        />
      </div>
    </div>
  );
}

export default HowItWorksSection1Step;
