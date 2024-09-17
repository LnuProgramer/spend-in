import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import {FaLock, FaUnlock, FaUser} from "react-icons/fa";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import {MdEmail} from "react-icons/md";
import Button from "../../components/button/Button";
import React from "react";

interface RegistrationWindowProps {
    userName: string
    setUserName: (name: string) => void
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    confirmPassword: string
    setConfirmPassword: (confirmPassword: string) => void
    isSwapped: boolean
    Swapper: Function
    seePassword: boolean
    PasswordShow: Function
}

function RegistrationWindow({
                                userName,
                                setUserName,
                                email,
                                setEmail,
                                password,
                                setPassword,
                                confirmPassword,
                                setConfirmPassword,
                                isSwapped,
                                Swapper,
                                seePassword,
                                PasswordShow
                            }: RegistrationWindowProps) {
    return (
        <div
            className={`${isSwapped && "on-screen"}`}
            id="registration-window-wrapper"
        >
            <div className="registration-and-login-block">
                <LargeText
                    text="Registration"
                    textColor="white"
                    fontSizeVw={2.4}
                    lineHeightVw={3.8}
                />
                <div className="registration-and-login-block-switch-text">
                    <SmallText
                        text="Have account?"
                        textColor="onBlackBg"
                        fontSizeVw={1.25}
                        lineHeightVw={1.9}
                    />
                    <a onClick={() => Swapper()}>
                        <SmallText
                            text="Log in"
                            textColor="onBlackBg"
                            fontSizeVw={1.25}
                            lineHeightVw={1.9}
                        />
                    </a>
                </div>
            </div>
            <div className="registration-and-login-block registration-and-login-inputs-block">
                <div className="registration-and-login-input-wrapper">
                    <input type="text" placeholder="" required/>
                    <FaUser className="registration-and-login-input-icon"/>
                    <MediumSmallText
                        text="Username"
                        textColor="white"
                        fontSizeVw={1.33}
                        lineHeightVw={2.085}
                    />
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input type="email" placeholder="" required/>
                    <MdEmail className="registration-and-login-input-icon"/>
                    <MediumSmallText
                        text="Email"
                        textColor="white"
                        fontSizeVw={1.33}
                        lineHeightVw={2.085}
                    />
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input
                        type={!seePassword ? "password" : "text"}
                        placeholder=""
                        required
                    />
                    {!seePassword ? (
                        <FaLock
                            onClick={() => PasswordShow()}
                            className="registration-and-login-input-icon"
                        />
                    ) : (
                        <FaUnlock
                            onClick={() => PasswordShow()}
                            className="registration-and-login-input-icon"
                        />
                    )}
                    <MediumSmallText
                        text="Password"
                        textColor="white"
                        fontSizeVw={1.33}
                        lineHeightVw={2.085}
                    />
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input
                        type={!seePassword ? "password" : "text"}
                        placeholder=""
                        required
                    />
                    {!seePassword ? (
                        <FaLock
                            onClick={() => PasswordShow()}
                            className="registration-and-login-input-icon"
                        />
                    ) : (
                        <FaUnlock
                            onClick={() => PasswordShow()}
                            className="registration-and-login-input-icon"
                        />
                    )}
                    <MediumSmallText
                        text="Confirm password"
                        textColor="white"
                        fontSizeVw={1.33}
                        lineHeightVw={2.085}
                    />
                </div>
                <Button
                    buttonText={"Registration"}
                    buttonColor="primary"
                    rounded={false}
                    widthFull={false}
                />
            </div>
        </div>
    )
}

export default RegistrationWindow;