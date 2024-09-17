import React from "react";
import "./HowItWorksSection2StepStyle.scss";
import MediumSmallText from "../../../components/sections-texts/MediumSmallText";
import MediumText from "../../../components/sections-texts/MediumText";

type HowItWorksSection2StepProps = {
  circleText: string;
  mediumSmallText: string;
  circleBg: string;
};

function HowItWorksSection2Step({
  circleText,
  mediumSmallText,
  circleBg,
}: HowItWorksSection2StepProps) {
  return (
    <div className="how-it-works-section-2-step-block-wrapper">
      <div className={`how-it-works-section-2-step-circle ${circleBg}`}>
        <MediumText
          text={circleText}
          textColor={`${circleBg === "white" ? "secondinary" : "white"}`}
          fontSizeVw={1.66}
          lineHeightVw={2.5}
        />
      </div>
      <MediumSmallText
        text={mediumSmallText}
        textColor="white"
        fontSizeVw={1.338}
        lineHeightVw={2.083}
      />
    </div>
  );
}

export default HowItWorksSection2Step;
