import React from "react";
import "./IncreaseProductivityBenefitsStyle.scss";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import LargeText from "../../components/sections-texts/LargeText";

type IncreaseProductivityBenefitsProps = {
  id: string;
  imgSrc: string;
  largeText: string;
  benegit1Text: string;
  benegit2Text: string;
  benegit3Text: string;
};

function IncreaseProductivityBenefits({
  id,
  imgSrc,
  largeText,
  benegit1Text,
  benegit2Text,
  benegit3Text,
}: IncreaseProductivityBenefitsProps) {
  return (
    <div
      className="increase-productivity-section-benefits-block-wrapper"
      id={id}
    >
      <LargeText
        text={largeText}
        textColor="black"
        fontSizeVw={1.66}
        lineHeightVw={2.5}
      />
      <div className="increase-productivity-section-benefit-wrapper">
        <img
          src={imgSrc}
          alt="success-cancel circle"
          className="increase-productivity-section-benefit-img"
        />
        <MediumSmallText
          text={benegit1Text}
          textColor="black"
          fontSizeVw={1.25}
          lineHeightVw={1.875}
        />
      </div>
      <div className="increase-productivity-section-benefit-wrapper">
        <img
          src={imgSrc}
          alt="success-cancel circle"
          className="increase-productivity-section-benefit-img"
        />
        <MediumSmallText
          text={benegit2Text}
          textColor="black"
          fontSizeVw={1.25}
          lineHeightVw={1.875}
        />
      </div>
      <div className="increase-productivity-section-benefit-wrapper">
        <img
          src={imgSrc}
          alt="success-cancel circle"
          className="increase-productivity-section-benefit-img"
        />
        <MediumSmallText
          text={benegit3Text}
          textColor="black"
          fontSizeVw={1.25}
          lineHeightVw={1.875}
        />
      </div>
    </div>
  );
}

export default IncreaseProductivityBenefits;
