import React from "react";
import "./WhyUseSection1Style.scss";
import "../../../adaptation/why-use-section/why-use-section-1/WhyUseSection1Adaptation.scss";
import MediumText from "../../../components/sections-texts/MediumText";
import LargeText from "../../../components/sections-texts/LargeText";
import SmallText from "../../../components/sections-texts/SmallText";
import SectionBg from "../../../components/sections-bg/SectionBg";
import WhyUseSection1Benefits from "./WhyUseSection1Benefits";

function WhyUseSection1() {
    return (
        <SectionBg bgColor="white" paddingVw={8.33} id="why-use-section-1">
            <div id="why-use-section-1-text-wrapper">
                <MediumText
                    text="WHY USE SPEND.IN"
                    textColor="primary"
                    fontSizeVw={1.388}
                    lineHeightVw={2.083}
                />
                <div id="why-use-section-1-small-and-large-text-wrapper">
                    <div id="why-use-section-1-large-text-wrapper">
                        <LargeText
                            text="Easy, Simple, Affordable"
                            textColor="black"
                            fontSizeVw={2.77}
                            lineHeightVw={4.166}
                        />
                    </div>
                    <div id="why-use-section-1-small-text-wrapper">
                        <SmallText
                            text="Our platform helps your business in managing expenses.
               These are some of the reasons why you should use our platform in managing business finances."
                            textColor="onWhiteBg"
                            fontSizeVw={1.388}
                            lineHeightVw={2.083}
                        />
                    </div>
                </div>
            </div>
            <div id="why-use-section-1-benefits-wrapper">
                <WhyUseSection1Benefits
                    imgSrc="images/raster/why-use-section-1/benefit1.png"
                    mediumText="Automatic Invoice Payment"
                    smallText="No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
                />
                <WhyUseSection1Benefits
                    imgSrc="images/raster/why-use-section-1/benefit2.png"
                    mediumText="Clear payment history"
                    smallText="Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
                />
                <WhyUseSection1Benefits
                    imgSrc="images/raster/why-use-section-1/benefit3.png"
                    mediumText="Use of multi-card payments"
                    smallText="Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!"
                />
            </div>
        </SectionBg>
    );
}

export default WhyUseSection1;
