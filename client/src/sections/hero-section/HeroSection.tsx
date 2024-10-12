import React from "react";
import Header from "./Header";
import "./HeroSectionStyle.scss";
import Elipces from "./Elipces";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import Button from "../../components/button/Button";
import SectionBg from "./../../components/sections-bg/SectionBg";
import smoothScrollTo from "../../scripts/SrcollAnimation";

interface HeroSectionProps {
    setLoginWindowShow: (show: boolean) => void;
}

function HeroSection({setLoginWindowShow}: HeroSectionProps) {
    return (
        <SectionBg bgColor="dark" paddingVw={0} id="hero-section">
            <Elipces/>
            <Header setLoginWindowShow={setLoginWindowShow}/>
            <div id="hero-section-wrapper">
                <div id="hero-section-text-wrapper">
                    <LargeText
                        text="All your business
          expenses in one place."
                        textColor="white"
                        fontSizeVw={5}
                        lineHeightVw={7.5}
                    />
                    <div id="hero-section-small-text-and-buttons-wrapper">
                        <SmallText
                            text="Your one-stop finance empower platform."
                            textColor="onBlackBg"
                            fontSizeVw={1.66}
                            lineHeightVw={2.5}
                        />
                        <SmallText
                            text="Manage all your business expenses with our supafast app."
                            textColor="onBlackBg"
                            fontSizeVw={1.66}
                            lineHeightVw={2.5}
                        />
                        <div id="hero-section-button-wrapper">
                            <Button
                                buttonText="Get a Free Demo"
                                buttonColor="primary"
                                rounded={false}
                                widthFull={false}
                                onClick={() => window.open("https://github.com/LnuProgramer")}
                            />
                            <Button
                                buttonText="See Pricing"
                                buttonColor="secondinary"
                                rounded={false}
                                widthFull={false}
                                onClick={() => smoothScrollTo("get-started", 2000)}
                            />
                        </div>
                    </div>
                </div>
                <img
                    src="images/raster/hero/spend-in-app.png"
                    id="spend-in-img"
                    alt="Spend.in App"
                ></img>
            </div>
        </SectionBg>
    );
}

export default HeroSection;
