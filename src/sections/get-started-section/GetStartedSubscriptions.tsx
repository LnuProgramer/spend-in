import React from "react";
import "./GetStartedSubscriptionsStyle.scss";
import MediumText from "../../components/sections-texts/MediumText";
import SmallText from "../../components/sections-texts/SmallText";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import GetStartedBenefits from "./GetStartedBenefits";
import Button from "../../components/button/Button";

type GetStartedSubscriptionsProps = {
  isYear: boolean;
  subscriptionsType: string;
};

function GetStartedSubscriptions({
  isYear,
  subscriptionsType,
}: GetStartedSubscriptionsProps) {
  const successCircle =
    "images/vector/increase-productivity-and-get-started/success-circle.svg";
  const cancelCircle =
    "images/vector/increase-productivity-and-get-started/cancel-gray-circle.svg";

  return (
    <div className="get-started-subscription-wrapper">
      {subscriptionsType === "free" ? (
        <>
          <div className="get-started-subscription-plan-text-and-for-who">
            <div className="get-started-subscription-plan-text">
              <img
                src="images/vector/get-started/subscription-plan-free.svg"
                alt="subscription plan"
                className="get-started-subscription-plan-text-img"
              />
              <MediumText
                text="Free"
                textColor="black"
                fontSizeVw={2.22}
                lineHeightVw={3.33}
              />
            </div>
            <SmallText
              text="Perfect plan to get started"
              textColor="onWhiteBg"
              fontSizeVw={1.11}
              lineHeightVw={1.66}
            />
          </div>
          <div className="get-started-subscription-price-wrapper">
            <MediumText
              text="$"
              textColor="black"
              fontSizeVw={2.77}
              lineHeightVw={4.166}
            />
            <div className="get-started-subscription-price-change-wrapper">
              <div
                className={`get-started-subscription-price-change ${
                  isYear && "scroll"
                }`}
              >
                <div
                  className={`get-started-subscription-price-change-block ${
                    isYear && "isVisible"
                  }`}
                >
                  <MediumText
                    text="0"
                    textColor="black"
                    fontSizeVw={2.77}
                    lineHeightVw={4.166}
                  />
                  <MediumSmallText
                    text="/month"
                    textColor="gray"
                    fontSizeVw={1.25}
                    lineHeightVw={1.875}
                  />
                </div>
                <div
                  className={`get-started-subscription-price-change-block ${
                    !isYear && "isVisible"
                  }`}
                >
                  <MediumText
                    text="0"
                    textColor="black"
                    fontSizeVw={2.77}
                    lineHeightVw={4.166}
                  />
                  <MediumSmallText
                    text="/year"
                    textColor="gray"
                    fontSizeVw={1.25}
                    lineHeightVw={1.875}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="get-started-subscription-description-and-benefits-wrapper">
            <SmallText
              text="A free plan grants you access to some cool features of Spend.In."
              textColor="dark"
              fontSizeVw={1.11}
              lineHeightVw={1.66}
            />
            <div className="get-started-subscription-benefits-wrapper">
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Sync accross device"
              />
              <GetStartedBenefits imgSrc={successCircle} text="5 workspace" />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Collaborate with 5 user"
              />
              <GetStartedBenefits
                imgSrc={cancelCircle}
                text="Sharing permission"
              />
              <GetStartedBenefits imgSrc={cancelCircle} text="Admin tools" />
              <GetStartedBenefits
                imgSrc={cancelCircle}
                text="100+ integrations"
              />
            </div>
          </div>
          <div className="get-started-subscription-button-wrapper">
            <Button
              buttonColor="primary"
              buttonText="Get Your Free Plan"
              rounded={false}
              widthFull={true}
              onClick={() => {}}
            />
          </div>
        </>
      ) : subscriptionsType === "pro" ? (
        <>
          <div className="get-started-subscription-plan-text-and-for-who">
            <div className="get-started-subscription-plan-text-and-populat-wrapper">
              <div className="get-started-subscription-plan-text">
                <img
                  src="images/vector/get-started/subscription-plan-pro.svg"
                  alt="subscription plan"
                  className="get-started-subscription-plan-text-img"
                />
                <MediumText
                  text="Pro"
                  textColor="black"
                  fontSizeVw={2.22}
                  lineHeightVw={3.33}
                />
              </div>
              <div className="get-started-subscription-plan-popular">
                <MediumSmallText
                  text="Popular"
                  textColor="white"
                  fontSizeVw={1.11}
                  lineHeightVw={1.66}
                />
              </div>
            </div>
            <SmallText
              text="Perfect plan for professionals!"
              textColor="onWhiteBg"
              fontSizeVw={1.11}
              lineHeightVw={1.66}
            />
          </div>
          <div className="get-started-subscription-price-wrapper">
            <MediumText
              text="$"
              textColor="black"
              fontSizeVw={2.77}
              lineHeightVw={4.166}
            />
            <div className="get-started-subscription-price-change-wrapper">
              <div
                className={`get-started-subscription-price-change ${
                  isYear && "scroll"
                }`}
              >
                <div
                  className={`get-started-subscription-price-change-block ${
                    isYear && "isVisible"
                  }`}
                >
                  <MediumText
                    text="12"
                    textColor="black"
                    fontSizeVw={2.77}
                    lineHeightVw={4.166}
                  />
                  <MediumSmallText
                    text="/month"
                    textColor="gray"
                    fontSizeVw={1.25}
                    lineHeightVw={1.875}
                  />
                </div>
                <div
                  className={`get-started-subscription-price-change-block ${
                    !isYear && "isVisible"
                  }`}
                >
                  <MediumText
                    text="57.60"
                    textColor="black"
                    fontSizeVw={2.77}
                    lineHeightVw={4.166}
                  />
                  <MediumSmallText
                    text="/year"
                    textColor="gray"
                    fontSizeVw={1.25}
                    lineHeightVw={1.875}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="get-started-subscription-description-and-benefits-wrapper">
            <SmallText
              text="For professional only! Start arranging your expenses with our best templates."
              textColor="dark"
              fontSizeVw={1.11}
              lineHeightVw={1.66}
            />
            <div className="get-started-subscription-benefits-wrapper">
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Everything in Free Plan"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Unlimited workspace"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Collaborative workspace"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Sharing permission"
              />
              <GetStartedBenefits imgSrc={successCircle} text="Admin tools" />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="100+ integrations"
              />
            </div>
          </div>
          <div className="get-started-subscription-button-wrapper">
            <Button
              buttonColor="primary"
              buttonText="Get Started"
              rounded={false}
              widthFull={true}
              onClick={() => {}}
            />
          </div>
        </>
      ) : subscriptionsType === "ultimate" ? (
        <>
          <div className="get-started-subscription-plan-text-and-for-who">
            <div className="get-started-subscription-plan-text">
              <img
                src="images/vector/get-started/subscription-plan-free.svg"
                alt="subscription plan"
                className="get-started-subscription-plan-text-img"
              />
              <MediumText
                text="Ultimate"
                textColor="black"
                fontSizeVw={2.22}
                lineHeightVw={3.33}
              />
            </div>
            <SmallText
              text="Best suits for great company!"
              textColor="onWhiteBg"
              fontSizeVw={1.11}
              lineHeightVw={1.66}
            />
          </div>
          <div className="get-started-subscription-price-wrapper">
            <MediumText
              text="$"
              textColor="black"
              fontSizeVw={2.77}
              lineHeightVw={4.166}
            />
            <div className="get-started-subscription-price-change-wrapper">
              <div
                className={`get-started-subscription-price-change ${
                  isYear && "scroll"
                }`}
              >
                <div
                  className={`get-started-subscription-price-change-block ${
                    isYear && "isVisible"
                  }`}
                >
                  <MediumText
                    text="33"
                    textColor="black"
                    fontSizeVw={2.77}
                    lineHeightVw={4.166}
                  />
                  <MediumSmallText
                    text="/month"
                    textColor="gray"
                    fontSizeVw={1.25}
                    lineHeightVw={1.875}
                  />
                </div>
                <div
                  className={`get-started-subscription-price-change-block ${
                    !isYear && "isVisible"
                  }`}
                >
                  <MediumText
                    text="158.40"
                    textColor="black"
                    fontSizeVw={2.77}
                    lineHeightVw={4.166}
                  />
                  <MediumSmallText
                    text="/year"
                    textColor="gray"
                    fontSizeVw={1.25}
                    lineHeightVw={1.875}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="get-started-subscription-description-and-benefits-wrapper">
            <SmallText
              text="If you a finance manager at big  company, this plan is a perfect match."
              textColor="dark"
              fontSizeVw={1.11}
              lineHeightVw={1.66}
            />
            <div className="get-started-subscription-benefits-wrapper">
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Everything in Pro Plan"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Daily performance reports"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Dedicated assistant"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Artificial intelligence"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Marketing tools & automations"
              />
              <GetStartedBenefits
                imgSrc={successCircle}
                text="Advanced security"
              />
            </div>
          </div>
          <div className="get-started-subscription-button-wrapper">
            <Button
              buttonColor="primary"
              buttonText="Get Started"
              rounded={false}
              widthFull={true}
              onClick={() => {}}
            />
          </div>
        </>
      ) : (
        <p>Not valid type</p>
      )}
    </div>
  );
}

export default GetStartedSubscriptions;
