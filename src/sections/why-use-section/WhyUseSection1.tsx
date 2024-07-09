import React from "react";
import "./WhyUseSection1Style.scss";
import MediumText from "../../components/sections-texts/MediumText";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";

function WhyUseSection1() {
  return (
    <div id="why-use-section-1">
      <div>
        <div id="large-and-medium-text-wrapper">
          <MediumText
            text="WHY USE SPEND.IN"
            textColor="primary"
            fontSize={20}
            lineHeight={30}
          />
          <div id="small-and-large-text-wrapper">
            <div id="large-text-wrapper">
              <LargeText
                text="Easy, Simple, Affordable"
                textColor="black"
                fontSize={40}
                lineHeight={60}
              />
            </div>
            <div id="small-text-wrapper">
              <SmallText
                text="Our platform helps your business in managing expenses.
               These are some of the reasons why you should use our platform in managing business finances."
                textColor="onWhiteBg"
                fontSize={20}
                lineHeight={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="why-use-section-1-main-content-wrapper"></div>
    </div>
  );
}

export default WhyUseSection1;
