import React, { useState } from "react";
import "./IncreaseProductivityStyle.scss";
import SectionBg from "../../components/sections-bg/SectionBg";
import MediumText from "../../components/sections-texts/MediumText";
import LargeText from "../../components/sections-texts/LargeText";
import IncreaseProductivitySwitch from "./IncreaseProductivitySwitch";
import IncreaseProductivityBenefits from "./IncreaseProductivityBenefits";

function IncreaseProductivity() {
  const [isToggled, seIsToggled] = useState(false);

  return (
    <SectionBg
      bgColor="white"
      paddingVw={8.33}
      id="increase-productivity-section"
    >
      <div id="increase-productivity-section-text-wrapper">
        <MediumText
          text="INCREASE PRODUCTIVITY"
          textColor="primary"
          fontSizeVw={1.388}
          lineHeightVw={2.0833}
        />
        <LargeText
          text="Reduce Time in Doing Manual Work
Managing Expenses"
          textColor="black"
          fontSizeVw={2.77}
          lineHeightVw={4.166}
        />
      </div>
      <div id="increase-productivity-section-switch-benefits-and-chart-wrapper">
        <div id="increase-productivity-section-switch-and-benefits-wrapper">
          <IncreaseProductivitySwitch
            isToggled={isToggled}
            onToggle={() => {
              seIsToggled(!isToggled);
            }}
          />
          <div
            id="increase-productivity-section-benefits-wrapper"
            className={isToggled ? `isToggled` : ``}
          >
            <div className={!isToggled ? `isToggled` : ``}>
              <IncreaseProductivityBenefits
                id="increase-productivity-section-benefit-block-wrapper-1"
                imgSrc="images/vector/increase-productivity/cancel-circle.svg"
                largeText="Taking too long to tidy up administrative files makes 
it unproductive"
                benegit1Text="Complex recording process due to every administrative file in a different place."
                benegit2Text="Need more effort to pay manually one by one invoice because there is no payment accommodation."
                benegit3Text="Manual data arranging needs a long time because the different months/years are not in the same place."
              />
            </div>
            <div className={isToggled ? `isToggled` : ``}>
              <IncreaseProductivityBenefits
                id="increase-productivity-section-benefit-block-wrapper-2"
                imgSrc="images/vector/increase-productivity/success-circle.svg"
                largeText="Track Business Expenses until its Milisecond"
                benegit1Text="Analyze your business cost easily with group transaction thorugh tagging feature."
                benegit2Text="Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment."
                benegit3Text="Arrange your business expenses by date, name, etc.,  with just one click."
              />
            </div>
          </div>
        </div>
        <div id="increase-productivity-section-chart-wrapper">
          <div
            id="increase-productivity-section-chart-blocks-wrapper"
            className={isToggled ? `isToggled` : ``}
          >
            <img
              src="images/raster/increase-productivity/cancel-chart.png"
              alt="chart"
              className={`increase-productivity-section-chart-img ${
                !isToggled ? `isToggled` : ``
              }`}
            />
            <img
              src="images/raster/increase-productivity/success-chart.png"
              alt="chart"
              className={`increase-productivity-section-chart-img ${
                isToggled ? `isToggled` : ``
              }`}
            />
          </div>
        </div>
      </div>
    </SectionBg>
  );
}

export default IncreaseProductivity;
