import React from "react";
import "./HowItWorksSection2Style.scss";
import "../../../adaptation/how-it-works-section/how-it-works-section-2/HowItWorksSection2Adaptation.scss"
import SectionBg from "../../../components/sections-bg/SectionBg";
import MediumText from "../../../components/sections-texts/MediumText";
import SmallText from "../../../components/sections-texts/SmallText";
import LargeText from "../../../components/sections-texts/LargeText";
import HowItWorksSection2Step from "./HowItWorksSection2Step";

function HowItWorksSection2() {
    return (
        <SectionBg bgColor="dark" paddingVw={8.33} id="how-it-works-section-2">
            <img
                src="images/raster/how-it-works-section-2/success-steps.png"
                alt="Success step"
                id="how-it-works-section-2-img"
            />
            <div id="how-it-works-section-2-text-and-steps-wrapper">
                <div id="how-it-works-section-2-text-wrapper">
                    <MediumText
                        text="HOW IT WORKS"
                        textColor="primary"
                        fontSizeVw={1.338}
                        lineHeightVw={2.083}
                    />
                    <div id="how-it-works-section-2-small-and-large-text-wrapper">
                        <div id="how-it-works-section-2-large-text-wrapper">
                            <LargeText
                                text="Few Easy Steps and Done"
                                textColor="white"
                                fontSizeVw={2.77}
                                lineHeightVw={4.166}
                            />
                        </div>
                        <div id="how-it-works-section-2-small-text-wrapper">
                            <SmallText
                                text="In just few easy step, you are all set to manage your business finances.
              Manage all expenses with Spend.In all in one place."
                                textColor="onBlackBg"
                                fontSizeVw={1.388}
                                lineHeightVw={2.083}
                            />
                        </div>
                    </div>
                </div>
                <div id="how-it-works-section-2-steps-wrapper">
                    <HowItWorksSection2Step
                        circleBg="primary"
                        circleText="1"
                        mediumSmallText="Register your Spend.In account."
                    />
                    <div className="how-it-works-section-2-steps-line"></div>
                    <div className="how-it-works-section-2-step-wrapper">
                        <HowItWorksSection2Step
                            circleBg="primary"
                            circleText="2"
                            mediumSmallText="Fill in the list of your business expenses."
                        />
                    </div>
                    <div
                        className="how-it-works-section-2-steps-line"
                        id="how-it-works-section-2-steps-line-dashed"
                    ></div>
                    <div className="how-it-works-section-2-step-wrapper">
                        <HowItWorksSection2Step
                            circleBg="white"
                            circleText="3"
                            mediumSmallText="Done, let’s continue the work."
                        />
                    </div>
                </div>
            </div>
        </SectionBg>
    );
}

export default HowItWorksSection2;
