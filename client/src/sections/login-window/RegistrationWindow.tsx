import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import { FaLock, FaUnlock, FaUser } from "react-icons/fa";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import { MdEmail } from "react-icons/md";
import Button from "../../components/button/Button";
import React, { useState } from "react";
import { RegistrationRequest } from "../../scripts/LoginRegistrationRequests";

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

    const [notValidUsername, setNotValidUsername] = useState(false);
    const [notValidPassword, setNotValidPassword] = useState(false);
    const [notValidEmail, setNotValidEmail] = useState(false);
    const [notValidConfirmPassword, setNotValidConfirmPassword] = useState(false);

    const registrationHandler = () => {
        userNameValidHandler(userName)
        passwordValidHandler(password)
        emailValidHandler(email)
        confirmPasswordValidHandler(confirmPassword)

        if (notValidUsername || notValidPassword || notValidEmail || notValidConfirmPassword) {
            return;
        }

        RegistrationRequest(userName, email, password).catch((err) => console.error(err))
        return;
    }

    const userNameValidHandler = (userName: string) => {
        if (userName.length === 0) {
            setNotValidUsername(false)
            return;

        }
        if (userName.length <= 3) {
            setNotValidUsername(true)
            return;
        }
        setNotValidUsername(false)
        return;
    }

    const emailValidHandler = (email: string) => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (email.length === 0) {
            setNotValidEmail(false)
            return;
        }
        if (!emailValid) {
            setNotValidEmail(true)
            return;
        }
        setNotValidEmail(false);
        return;
    }

    const passwordValidHandler = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (password.length === 0) {
            setNotValidPassword(false)
            return;
        }
        if (password.length <= 5 || !hasUpperCase || !hasNumber) {
            setNotValidPassword(true)
            return;
        }
        setNotValidPassword(false)
        return;
    }

    const confirmPasswordValidHandler = (confirmPassword: string) => {
        if (confirmPassword.length === 0) {
            setNotValidConfirmPassword(false)
            return;
        }
        if (password !== confirmPassword) {
            setNotValidConfirmPassword(true)
            return
        }
        setNotValidConfirmPassword(false)
    }

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
                <div
                    className={`error-div ${notValidPassword || notValidUsername || notValidEmail || notValidConfirmPassword ? "show-error" : ""}`}>
                    <MediumSmallText
                        text={`${notValidUsername ? "Username must contain at least 4 letters"
                            : notValidPassword ? "Password must be at least 6 characters long and contain numbers and capital letters"
                                : notValidEmail ? "Email is not valid"
                                    : notValidConfirmPassword ? "Passwords didn`t match"
                                        : "User with this username is already exist"}`}
                        textColor="white"
                        fontSizeVw={notValidPassword ? 1.1 : 1.25}
                        lineHeightVw={1.5}/>
                </div>
            </div>
            <form className="registration-and-login-block registration-and-login-inputs-block"
                  onSubmit={(e) => {
                      e.preventDefault(); // Prevent form submission if inputs are invalid
                      registrationHandler(); // Call your login handler function
                  }}>
                <div className="registration-and-login-input-wrapper">
                    <input tabIndex={!isSwapped ? -1 : 0} type="text" placeholder="" required value={userName}
                           className={`${notValidUsername ? "input-error" : ""}`}
                           onChange={(e) => {
                               setUserName(e.target.value)
                               userNameValidHandler(e.target.value)
                           }}
                           onBlur={() => setNotValidUsername(false)}
                           onFocus={(e) => userNameValidHandler(e.target.value)}/>

                    <FaUser className="registration-and-login-input-icon"/>
                    <div className={`input-label-div ${notValidUsername ? "input-label-error" : ""}`}>
                        <MediumSmallText
                            text="Username"
                            textColor="white"
                            fontSizeVw={1.33}
                            lineHeightVw={2.085}
                        />
                        <span className={`${notValidUsername ? "error-star" : ""}`}>*</span>
                    </div>
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input tabIndex={!isSwapped ? -1 : 0} type="email" placeholder="" required value={email}
                           className={`${notValidEmail ? "input-error" : ""}`}
                           onChange={(e) => {
                               setEmail(e.target.value)
                               emailValidHandler(e.target.value)
                           }}
                           onBlur={() => setNotValidEmail(false)}
                           onFocus={(e) => emailValidHandler(e.target.value)}/>
                    <MdEmail className="registration-and-login-input-icon"/>
                    <div className={`input-label-div ${notValidEmail ? "input-label-error" : ""}`}>
                        <MediumSmallText
                            text="Email"
                            textColor="white"
                            fontSizeVw={1.33}
                            lineHeightVw={2.085}
                        />
                        <span className={`${notValidEmail ? "error-star" : ""}`}>*</span>
                    </div>
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input tabIndex={!isSwapped ? -1 : 0}
                           className={`${notValidPassword ? "input-error" : ""}`}
                           type={!seePassword ? "password" : "text"}
                           placeholder=""
                           required
                           value={password}
                           onChange={(e) => {
                               setPassword(e.target.value)
                               passwordValidHandler(e.target.value)
                           }}
                           onBlur={() => setNotValidPassword(false)}
                           onFocus={(e) => {
                               passwordValidHandler(e.target.value)
                           }}
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
                    <div className={`input-label-div ${notValidPassword ? "input-label-error" : ""}`}>
                        <MediumSmallText
                            text="Password"
                            textColor="white"
                            fontSizeVw={1.33}
                            lineHeightVw={2.085}
                        />
                        <span className={`${notValidPassword ? "error-star" : ""}`}>*</span>
                    </div>
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input tabIndex={!isSwapped ? -1 : 0}
                           className={`${notValidConfirmPassword ? "input-error" : ""}`}
                           type={!seePassword ? "password" : "text"}
                           placeholder=""
                           required
                           value={confirmPassword}
                           onChange={(e) => {
                               setConfirmPassword(e.target.value)
                               confirmPasswordValidHandler(e.target.value)
                           }}
                           onBlur={() => setNotValidConfirmPassword(false)}
                           onFocus={(e) => {
                               confirmPasswordValidHandler(e.target.value)
                           }}
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
                    <div className={`input-label-div ${notValidConfirmPassword ? "input-label-error" : ""}`}>
                        <MediumSmallText
                            text="Confirm password"
                            textColor="white"
                            fontSizeVw={1.33}
                            lineHeightVw={2.085}
                        />
                        <span className={`${notValidConfirmPassword ? "error-star" : ""}`}>*</span>
                    </div>
                </div>
                <Button
                    tabIndex={!isSwapped ? -1 : 0}
                    buttonText={"Registration"}
                    buttonColor="primary"
                    rounded={false}
                    widthFull={false}
                    type={"submit"}
                />
            </form>
        </div>
    )
}

export default RegistrationWindow;