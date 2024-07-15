import React from "react";
import "./WhyUseSection1Style.scss";
import MediumText from "../../components/sections-texts/MediumText";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import SectionBg from "../../components/sections-bg/SectionBg";

function WhyUseSection1() {
  return (
    <SectionBg bgColor="white" padding={8.33}>
      <div id="text-wrapper">
        <MediumText
          text="WHY USE SPEND.IN"
          textColor="primary"
          fontSize={20}
          lineHeight={30}
        />
        <div id="small-and-large-text-wrapper">
          <div id="large-text-wrapper">
            <LargeText
              text="Easy, Simple, Affordable"
              textColor="black"
              fontSize={40}
              lineHeight={60}
            />
          </div>
          <div id="small-text-wrapper">
            <SmallText
              text="Our platform helps your business in managing expenses.
               These are some of the reasons why you should use our platform in managing business finances."
              textColor="onWhiteBg"
              fontSize={20}
              lineHeight={30}
            />
          </div>
        </div>
      </div>
      <div id="why-use-section-1-benefits-wrapper">
        <div className="why-use-section-1-benefits-wrapper-blocks">
          <img
            src="images/raster/why-use-section-1/benefit1.png"
            alt="benefit1"
            className="why-use-section-1-benefits-img"
          ></img>
          <div className="benefits-text">
            <MediumText
              text="Automatic Invoice Payment"
              textColor="black"
              fontSize={24}
              lineHeight={36}
            />
            <SmallText
              text="No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
              textColor="onWhiteBg"
              fontSize={16}
              lineHeight={24}
            />
          </div>
        </div>
        <div className="why-use-section-1-benefits-wrapper-blocks">
          <img
            src="images/raster/why-use-section-1/benefit2.png"
            alt="benefit1"
            className="why-use-section-1-benefits-img"
          ></img>
          <div className="benefits-text">
            <MediumText
              text="Clear payment history"
              textColor="black"
              fontSize={24}
              lineHeight={36}
            />
            <SmallText
              text="Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
              textColor="onWhiteBg"
              fontSize={16}
              lineHeight={24}
            />
          </div>
        </div>
        <div className="why-use-section-1-benefits-wrapper-blocks">
          <img
            src="images/raster/why-use-section-1/benefit3.png"
            alt="benefit1"
            className="why-use-section-1-benefits-img"
          ></img>
          <div className="benefits-text">
            <MediumText
              text="Use of multi-card payments"
              textColor="black"
              fontSize={24}
              lineHeight={36}
            />
            <SmallText
              text="Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!"
              textColor="onWhiteBg"
              fontSize={16}
              lineHeight={24}
            />
          </div>
        </div>
      </div>
    </SectionBg>
  );
}

export default WhyUseSection1;
