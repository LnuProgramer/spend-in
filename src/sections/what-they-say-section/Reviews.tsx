import React, { useEffect, useState } from "react";
import "./ReviewsStyle.scss";
import MediumText from "../../components/sections-texts/MediumText";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";

type ReviewsProps = {
  titleText: string;
  reviewText: string;
  imgSrc: string;
  name: string;
  position: string;
  opacity: boolean;
};

function Reviews({
  titleText,
  reviewText,
  imgSrc,
  name,
  position,
  opacity,
}: ReviewsProps) {
  return (
    <div
      className="what-they-say-review-block-wrapper"
      style={{
        opacity: opacity ? 1 : 0,
        pointerEvents: opacity ? "auto" : "none",
      }}
    >
      <div className="what-they-say-review-block-text-wrapper">
        <MediumText
          text={titleText}
          textColor="white"
          fontSizeVw={1.25}
          lineHeightVw={1.875}
        />
        <MediumSmallText
          text={reviewText}
          textColor="white"
          fontSizeVw={1.11}
          lineHeightVw={1.66}
        />
      </div>
      <div className="what-they-say-review-block-client-wrapper">
        <img
          src={imgSrc}
          alt="client"
          className="what-they-say-review-block-client-img"
        />
        <div className="what-they-say-review-block-client-text-wrapper">
          <LargeText
            text={name}
            textColor="white"
            fontSizeVw={1.25}
            lineHeightVw={1.875}
          />
          <SmallText
            text={position}
            textColor="onBlackBg"
            fontSizeVw={0.972}
            lineHeightVw={1.4583}
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
