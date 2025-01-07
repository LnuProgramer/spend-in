import React, { useEffect, useState } from "react";
import "./ButtonStyle.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonColor: string;
    buttonText: any;
    rounded: boolean;
    widthFull: boolean;

}

function Button({
                    buttonColor,
                    buttonText,
                    rounded,
                    widthFull,
                    ...rest
                }: ButtonProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handelOnClick = () => {
        setIsFocused(true);
        setTimeout(() => {
            setIsFocused(false);
        }, 250);
    };

    const [isPhoneScreen, setIsPhoneScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsPhoneScreen(window.innerWidth <= 768)
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <button
            className={`main-button ${buttonColor} ${
                isFocused ? "focus-temporary" : ""
            }`}
            type="button"
            onClick={handelOnClick}
            onSubmit={handelOnClick}
            style={{
                borderRadius: rounded ? "100%" : `${isPhoneScreen ? "8vw" : "2.083vw"}`,
                padding: rounded ? "0.972vw" : "0.972vw 2.22vw",
                width: widthFull ? "100%" : "fit-content",
            }}
            {...rest}
        >
            {buttonText}
        </button>
    )
}

export default Button;
