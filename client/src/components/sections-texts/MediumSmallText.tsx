import React from "react";
import "./MediumSmallTextStyle.scss";

type MediumSmallTextPVprops = {
    text: string;
    textColor: string;
    fontSizeVw: number;
    lineHeightVw: number;
};

function MediumSmallText({
                             text,
                             textColor,
                             fontSizeVw,
                             lineHeightVw,
                         }: MediumSmallTextPVprops) {
    return (
        <h3
            className={`medium-small-text ${textColor}`}
            style={{fontSize: `${fontSizeVw}vw`, lineHeight: `${lineHeightVw}vw`}}
        >
            {text}
        </h3>
    );
}

export default MediumSmallText;
