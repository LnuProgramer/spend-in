import React from "react";
import "./WhatTheySayStyle.scss";
import SectionBg from "../../components/sections-bg/SectionBg";
import MediumText from "../../components/sections-texts/MediumText";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";

function WhatTheySay() {
  return (
    <SectionBg id="what-they-say" bgColor="dark" paddingVw={8.33}>
      <div id="what-they-say-text-wrapper">
        <div id="what-they-say-medium-large-text-wrapper">
          <MediumText
            text="WHAT THEY SAY"
            textColor="primary"
            fontSizeVw={1.388}
            lineHeightVw={2.0833}
          />
          <LargeText
            text="Our User Kind Words"
            textColor="white"
            fontSizeVw={2.77}
            lineHeightVw={4.166}
          />
        </div>
        <SmallText
          text="Here are some testimonials from our user after using Spend.In to manage their business  expenses."
          textColor="onBlackBg"
          fontSizeVw={1.388}
          lineHeightVw={2.0833}
        />
      </div>
      <div></div>
      <div></div>
    </SectionBg>
  );
}

export default WhatTheySay;
