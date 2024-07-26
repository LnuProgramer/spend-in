import React, { useState } from "react";
import "./WhatTheySayStyle.scss";
import SectionBg from "../../components/sections-bg/SectionBg";
import MediumText from "../../components/sections-texts/MediumText";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import Reviews from "./Reviews";
import Button from "../../components/button/Button";

type Review = {
  titleText: string;
  reviewText: string;
  imgSrc: string;
  name: string;
  position: string;
};

const reviewsObject: { [key: string]: Review } = {
  review1: {
    titleText: "It’s just incredible!",
    reviewText:
      "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    imgSrc: "images/raster/what-they-say/Jimmy-Bartney.png",
    name: "Jimmy Bartney",
    position: "Product Manager at Picko Lab",
  },
  review2: {
    titleText: "Satisfied User Here!",
    reviewText:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    imgSrc: "images/raster/what-they-say/Natasha-Romanoff.png",
    name: "Natasha Romanoff",
    position: "Black Widow",
  },
  review3: {
    titleText: "No doubt, Spend.In is the best!",
    reviewText:
      "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    imgSrc: "images/raster/what-they-say/Moritika-Kazuki.png",
    name: "Moritika Kazuki",
    position: "Finance Manager at Mangan",
  },
  review4: {
    titleText: "It’s just incredible!",
    reviewText:
      "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    imgSrc: "images/raster/what-they-say/Jimmy-Bartney.png",
    name: "Jimmy Bartney",
    position: "Product Manager at Picko Lab",
  },
  review5: {
    titleText: "Satisfied User Here!",
    reviewText:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    imgSrc: "images/raster/what-they-say/Natasha-Romanoff.png",
    name: "Natasha Romanoff",
    position: "Black Widow",
  },
  review6: {
    titleText: "No doubt, Spend.In is the best!",
    reviewText:
      "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    imgSrc: "images/raster/what-they-say/Moritika-Kazuki.png",
    name: "Moritika Kazuki",
    position: "Finance Manager at Mangan",
  },
};

function WhatTheySay() {
  const [counter, setCounter] = useState(0);

  const handleNextSlide = () => {
    if (counter === Object.keys(reviewsObject).length - 3) return;
    setCounter(counter + 1);
  };

  const handlePrevSlide = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

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
          text="Here are some testimonials from our user after using Spend.In to manage their business expenses."
          textColor="onBlackBg"
          fontSizeVw={1.388}
          lineHeightVw={2.0833}
        />
      </div>
      <div id="what-they-say-section-reviews">
        <div
          id="what-they-say-section-reviews-wrapper"
          style={{ transform: `translateX(${counter * -27.987}vw)` }}
        >
          {Object.keys(reviewsObject).length > 0 ? (
            Object.keys(reviewsObject).map((reviewKey, index) => {
              const review = reviewsObject[reviewKey];
              if (
                !review.titleText ||
                !review.reviewText ||
                !review.imgSrc ||
                !review.name ||
                !review.position
              ) {
                console.error(`Missing properties for review ${reviewKey}`);
                return null;
              }
              return (
                <Reviews
                  key={reviewKey}
                  {...review}
                  opacity={
                    index >= counter && index <= counter + 2 ? true : false
                  }
                />
              );
            })
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
      <div id="what-they-say-section-button-wrapper">
        <Button
          buttonText={
            <img
              src="images/vector/what-they-say/arrow-left.svg"
              alt="arrow-left"
              className="what-they-say-section-button-arrows"
            />
          }
          buttonColor={counter > 0 ? "primary" : "secondinary"}
          rounded={true}
          onClick={handlePrevSlide}
        />
        <Button
          buttonText={
            <img
              src="images/vector/what-they-say/arrow-right.svg"
              alt="arrow-right"
              className="what-they-say-section-button-arrows"
            />
          }
          buttonColor={
            counter <= Object.keys(reviewsObject).length - 4
              ? "primary"
              : "secondinary"
          }
          rounded={true}
          onClick={handleNextSlide}
        />
      </div>
    </SectionBg>
  );
}

export default WhatTheySay;
