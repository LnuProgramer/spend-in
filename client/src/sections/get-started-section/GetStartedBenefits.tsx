import React from "react";
import "./GetStartedBenefitsStyle.scss";
import MediumSmallText from "./../../components/sections-texts/MediumSmallText";

type GetStartedBenefitsProps = {
  imgSrc: string;
  text: string;
};

function GetStartedBenefits({ imgSrc, text }: GetStartedBenefitsProps) {
  return (
    <div className="get-started-benefit">
      <img
        src={imgSrc}
        alt="cancel-success-cirle"
        className="get-started-benefit-img"
      ></img>
      <MediumSmallText
        text={text}
        textColor="black"
        fontSizeVw={1.25}
        lineHeightVw={1.875}
      />
    </div>
  );
}

export default GetStartedBenefits;
