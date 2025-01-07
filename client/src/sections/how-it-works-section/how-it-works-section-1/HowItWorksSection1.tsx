import React, { useEffect, useState } from "react";
import "./HowItWorksSection1Style.scss";
import "../../../adaptation/how-it-works-section/how-it-works-section-1/HowItWorksSection1Adaptation.scss"
import MediumText from "../../../components/sections-texts/MediumText";
import LargeText from "../../../components/sections-texts/LargeText";
import SmallText from "../../../components/sections-texts/SmallText";
import SectionBg from "../../../components/sections-bg/SectionBg";
import HowItWorksSection1Step from "./HowItWorksSection1Step";
import Button from "../../../components/button/Button";
import smoothScrollTo from "../../../scripts/SrcollAnimation";

function HowItWorksSection1() {
    const [isPhoneScreen, setIsPhoneScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsPhoneScreen(window.innerWidth <= 768)
        }
        handleResize();

        // Слухаємо зміни розміру вікна
        window.addEventListener('resize', handleResize);

        // Прибираємо слухача при відмонтованні компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <SectionBg bgColor="dark" paddingVw={8.33} id="how-it-works-section-1">
            <div id="how-it-works-section-1-text-wrapper">
                <MediumText
                    text="HOW IT WORKS"
                    textColor="primary"
                    fontSizeVw={1.38}
                    lineHeightVw={2.083}
                />
                <div id="how-it-works-section-1-small-and-large-text-wrapper">
                    <div id="how-it-works-section-1-large-text-wrapper">
                        <LargeText
                            text="Few Easy Steps and Done"
                            textColor="white"
                            fontSizeVw={2.77}
                            lineHeightVw={4.166}
                        />
                    </div>
                    <div id="how-it-works-section-1-small-text-wrapper">
                        <SmallText
                            text="In just few easy step, you are all set to manage your business finances.
              Manage all expenses with Spend.In all in one place."
                            textColor="onBlackBg"
                            fontSizeVw={1.38}
                            lineHeightVw={2.083}
                        />
                    </div>
                </div>
            </div>
            <div id="how-it-works-section-1-steps-and-buttons-wrapper">
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
                    <Button
                        buttonText="Get a Free Demo"
                        buttonColor="primary"
                        rounded={false}
                        widthFull={!!isPhoneScreen}
                        onClick={() => window.open("https://github.com/LnuProgramer")}
                    />
                    <Button
                        buttonText="See Pricing"
                        buttonColor="secondinary"
                        rounded={false}
                        widthFull={!!isPhoneScreen}
                        onClick={() => smoothScrollTo("get-started", 2000)}
                    />
                </div>
            </div>
        </SectionBg>
    );
}

export default HowItWorksSection1;
