import React from "react";
import "./WhyUseSection2BenefitsStyle.scss";
import MediumText from "../../../components/sections-texts/MediumText";
import SmallText from "../../../components/sections-texts/SmallText";

type BenefitsProps = {
  imgSrc: string;
  mediumText: string;
  smallText: string;
};

function WhyUseSection2Benefits({
  imgSrc,
  mediumText,
  smallText,
}: BenefitsProps) {
  return (
    <div className="why-use-section-2-benefits-wrapper-blocks">
      <img src={imgSrc} alt="benefit icon" className="benefit-icon" />
      <div className="why-use-section-2-benefits-text">
        <MediumText
          text={mediumText}
          textColor="black"
          fontSizeVw={1.66}
          lineHeightVw={2.5}
        />
        <SmallText
          text={smallText}
          textColor="onWhiteBg"
          fontSizeVw={1.11}
          lineHeightVw={1.66}
        />
      </div>
    </div>
  );
}

export default WhyUseSection2Benefits;
