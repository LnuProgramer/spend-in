import React from "react";
import "./HowItWorksSection1Style.scss";
import MediumText from "../../../components/sections-texts/MediumText";
import LargeText from "../../../components/sections-texts/LargeText";
import SmallText from "../../../components/sections-texts/SmallText";
import SectionBg from "../../../components/sections-bg/SectionBg";
import HowItWorksSection1Step from "./HowItWorksSection1Step";
import Button from "../../../components/button/Button";

function HowItWorksSection1() {
  return (
    <SectionBg bgColor="dark" paddingVw={8.33}>
      <div id="how-it-works-section-2-text-wrapper">
        <MediumText
          text="HOW IT WORKS"
          textColor="primary"
          fontSize={20}
          lineHeight={30}
        />
        <div id="how-it-works-section-2-small-and-large-text-wrapper">
          <div id="how-it-works-section-2-large-text-wrapper">
            <LargeText
              text="Few Easy Steps and Done"
              textColor="white"
              fontSize={40}
              lineHeight={60}
            />
          </div>
          <div id="how-it-works-section-2-small-text-wrapper">
            <SmallText
              text="In just few easy step, you are all set to manage your business finances.
              Manage all expenses with Spend.In all in one place."
              textColor="onBlackBg"
              fontSize={20}
              lineHeight={30}
            />
          </div>
        </div>
      </div>
      <div id="how-it-works-section-1-steps-wrapper">
        <HowItWorksSection1Step
          imgSrc="images/vector/how-it-works-section-1/step1.svg"
          circleText="1"
          mediumSmallText="Register your 
Spend.In account."
        />
        <HowItWorksSection1Step
          imgSrc="images/vector/how-it-works-section-1/step2.svg"
          circleText="2"
          mediumSmallText="Fill in the list of your 
business expenses."
        />
        <HowItWorksSection1Step
          imgSrc="images/vector/how-it-works-section-1/step3.svg"
          circleText="3"
          mediumSmallText="Done, let’s continue the work."
        />
      </div>
      <div id="how-it-works-section-1-button-wrapper">
        <Button buttonText="Get a Free Demo" buttonColor="primary" />
        <Button buttonText="See Pricing" buttonColor="secondinary" />
      </div>
    </SectionBg>
  );
}

export default HowItWorksSection1;
