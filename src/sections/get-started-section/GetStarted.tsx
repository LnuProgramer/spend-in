import React, { useState } from "react";
import "./GetStartedStyle.scss";
import SectionBg from "../../components/sections-bg/SectionBg";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import GetStartedSwitch from "./GetStartedSwitch";
import MediumText from "../../components/sections-texts/MediumText";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import GetStartedSubscriptions from "./GetStartedSubscriptions";

function GetStarted() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SectionBg bgColor="white" paddingVw={8.33} id="get-started">
      <div id="get-started-section-text-wrapper">
        <LargeText
          text="Ready to Get Started?"
          textColor="black"
          fontSizeVw={2.77}
          lineHeightVw={4.166}
        />
        <SmallText
          text="Choose a plan that suits your business needs"
          textColor="onWhiteBg"
          fontSizeVw={1.388}
          lineHeightVw={2.083}
        />
      </div>
      <div id="get-started-section-switch-and-subscriptions-wrapper">
        <div id="get-started-section-switch-and-discount-wrapper">
          <div id="get-started-section-switch-wrapepr">
            <MediumText
              text="Monthly"
              textColor="black"
              fontSizeVw={1.388}
              lineHeightVw={2.083}
            />
            <GetStartedSwitch
              isToggled={isToggled}
              onToggle={() => {
                setIsToggled(!isToggled);
              }}
            />
            <MediumText
              text="Yearly"
              textColor="black"
              fontSizeVw={1.388}
              lineHeightVw={2.083}
            />
          </div>
          <div id="get-started-section-discount-wrapepr">
            <div id="get-started-section-discount">
              <MediumSmallText
                text="Save 65%"
                textColor="black"
                fontSizeVw={0.972}
                lineHeightVw={1.4583}
              />
            </div>
            <img
              src="images/vector/get-started/arrow.svg"
              alt="arrow"
              id="get-started-section-discount-img"
            />
          </div>
        </div>
        <div id="get-started-section-subscriptions-wrapper">
          <GetStartedSubscriptions
            isYear={isToggled}
            subscriptionsType="free"
          />
          <GetStartedSubscriptions isYear={isToggled} subscriptionsType="pro" />
          <GetStartedSubscriptions
            isYear={isToggled}
            subscriptionsType="ultimate"
          />
        </div>
      </div>
    </SectionBg>
  );
}

export default GetStarted;
