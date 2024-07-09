import React from "react";
import Header from "./Header";
import "./HeroSectionStyle.scss";
import Elipces from "./Elipces";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import Button from "../../components/button/Button";

function HeroSection() {
  return (
    <div className="hero-section">
      <Header />
      <Elipces />
      <div id="hero-section-text-container">
        <LargeText
          text="All your business
expenses in one place."
          textColor="white"
          fontSize={72}
          lineHeight={108}
        />
        <div id="hero-section-small-text-container">
          <SmallText
            text="Your one-stop finance empower platform."
            textColor="onBlackBg"
            fontSize={24}
            lineHeight={36}
          />
          <SmallText
            text="Manage all your business expenses with our supafast app."
            textColor="onBlackBg"
            fontSize={24}
            lineHeight={36}
          />
        </div>
        <div id="hero-section-button-container">
          <Button buttonText="Get a Free Demo" buttonColor="primary" />
          <Button buttonText="See Pricing" buttonColor="secondinary" />
        </div>
      </div>
      <img
        src="images/raster/hero/spend-inApp.png"
        id="spend-in-img"
        alt="Spend.in App"
      ></img>
    </div>
  );
}

export default HeroSection;
