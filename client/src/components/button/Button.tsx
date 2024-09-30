import React, { useState } from "react";
import "./ButtonStyle.scss";
import smoothScrollTo from "../../scripts/SrcollAnimation";

type ButtonProps = {
    buttonColor: string;
    buttonText: any;
    rounded: boolean;
    widthFull: boolean;
    onClick?: () => void;
};

function Button({
                    buttonColor,
                    buttonText,
                    rounded,
                    widthFull,
                    onClick,
                }: ButtonProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleonClick = () => {
        setIsFocused(true);
        setTimeout(() => {
            setIsFocused(false);
        }, 250);
        if (!onClick) {
            if (buttonColor === "primary")
                window.open("https://github.com/LnuProgramer");
            else if (buttonColor === "secondinary") {
                smoothScrollTo("get-started", 2000);
            } else console.error("wrong buttonColor");
        } else onClick();
    };
    return (
        <button
            className={`main-button ${buttonColor} ${
                isFocused ? "focus-temporary" : ""
            }`}
            type="button"
            onClick={handleonClick}
            style={{
                borderRadius: rounded ? "100%" : "2.083vw",
                padding: rounded ? "0.972vw" : "0.972vw 2.22vw",
                width: widthFull ? "100%" : "fit-content",
            }}
        >
            {buttonText}
        </button>
    );
}

export default Button;
