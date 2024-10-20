import React from "react";
import "./WhyUseSection2Style.scss";
import "../../../adaptation/why-use-section/why-use-section-2/WhyUseSection2Adaptation.scss";
import SectionBg from "../../../components/sections-bg/SectionBg";
import MediumText from "../../../components/sections-texts/MediumText";
import LargeText from "../../../components/sections-texts/LargeText";
import SmallText from "../../../components/sections-texts/SmallText";
import WhyUseSection2Benefits from "./WhyUseSection2Benefits";

function WhyUseSection2() {
    return (
        <SectionBg bgColor="white" paddingVw={8.33} id="why-use-section-2">
            <div id="why-use-section-2-text-wrapper">
                <MediumText
                    text="WHY USE SPEND.IN"
                    textColor="primary"
                    fontSizeVw={1.388}
                    lineHeightVw={2.083}
                />
                <div id="why-use-section-2-small-and-large-text-wrapper">
                    <div id="why-use-section-2-large-text-wrapper">
                        <LargeText
                            text="Easy, Simple, Affordable"
                            textColor="black"
                            fontSizeVw={2.77}
                            lineHeightVw={4.166}
                        />
                    </div>
                    <div id="why-use-section-2-small-text-wrapper">
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
            <div id="why-use-section-2-benefits-and-transaction-history-wrapper">
                <div id="why-use-section-2-benefits-wrapper">
                    <WhyUseSection2Benefits
                        imgSrc="images/vector/why-use-section-2/benefit1.svg"
                        mediumText="Automatic Invoice Payment"
                        smallText="Automatic payments help you to arrange payments on a certain date without doing it manually again."
                    />
                    <WhyUseSection2Benefits
                        imgSrc="images/vector/why-use-section-2/benefit2.svg"
                        mediumText="Clear payment history"
                        smallText="Clear payment history helps you to track your business expenses on specific dates."
                    />
                    <WhyUseSection2Benefits
                        imgSrc="images/vector/why-use-section-2/benefit3.svg"
                        mediumText="Use of multi-card payments"
                        smallText="Have more than one debit or credit card? Don't worry, we support payments using more than one card."
                    />
                </div>
                <img
                    src="images/raster/why-use-section-2/transaction-history.png"
                    alt="transaction history"
                    id="transaction-history-img"
                />
            </div>
        </SectionBg>
    );
}

export default WhyUseSection2;
