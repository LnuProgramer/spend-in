import React from "react";
import "./WhyUseSection1BenefitsStyle.scss";
import MediumText from "../../../components/sections-texts/MediumText";
import SmallText from "../../../components/sections-texts/SmallText";

type BenefitsProps = {
  imgSrc: string;
  mediumText: string;
  smallText: string;
};

function Benefits({ imgSrc, mediumText, smallText }: BenefitsProps) {
  return (
    <div className="why-use-section-1-benefits-wrapper-blocks">
      <img src={imgSrc} alt="benefit image" className="benefit-img"></img>
      <div className="why-use-section-1-benefits-text">
        <MediumText
          text={mediumText}
          textColor="black"
          fontSize={24}
          lineHeight={36}
        />
        <SmallText
          text={smallText}
          textColor="onWhiteBg"
          fontSize={16}
          lineHeight={24}
        />
      </div>
    </div>
  );
}

export default Benefits;
