import React from "react";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import { FaLock, FaUnlock, FaUser } from "react-icons/fa";
import Button from "../../components/button/Button";
import { LoginRequest } from "../../scripts/LoginRegistrationRequests";

interface LoginWindowProps {
    userName: string
    setUserName: (name: string) => void
    password: string
    setPassword: (password: string) => void
    isSwapped: boolean
    Swapper: Function
    seePassword: boolean
    PasswordShow: Function
}

function LoginWindow({
                         userName,
                         setUserName,
                         password,
                         setPassword,
                         isSwapped,
                         Swapper,
                         seePassword,
                         PasswordShow,
                     }: LoginWindowProps) {

    const loginHandler = () => {
        LoginRequest(userName, password).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div
            className={`${!isSwapped && "on-screen"}`}
            id="login-window-wrapper"
        >
            <div className="registration-and-login-block">
                <LargeText
                    text="Log In"
                    textColor="white"
                    fontSizeVw={2.4}
                    lineHeightVw={3.8}
                />
                <div className="registration-and-login-block-switch-text">
                    <SmallText
                        text="New user?"
                        textColor="onBlackBg"
                        fontSizeVw={1.25}
                        lineHeightVw={1.9}
                    />
                    <a onClick={() => Swapper()}>
                        <SmallText
                            text="Create an account"
                            textColor="onBlackBg"
                            fontSizeVw={1.25}
                            lineHeightVw={1.9}
                        />
                    </a>
                </div>
                <div className={'error-div'}>
                    <MediumSmallText
                        text={"User with this username is already exist"}
                        textColor="white"
                        fontSizeVw={1.25}
                        lineHeightVw={1.9}/>
                </div>
            </div>
            <form className="registration-and-login-block registration-and-login-inputs-block"
                  onSubmit={(e) => {
                      e.preventDefault(); // Prevent form submission if inputs are invalid
                      loginHandler(); // Call your login handler function
                  }}>
                <div className="registration-and-login-input-wrapper">
                    <input
                        type="text"
                        placeholder=""
                        required
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <FaUser className="registration-and-login-input-icon"/>
                    <div className="input-label-div">
                        <MediumSmallText
                            text="Username"
                            textColor="white"
                            fontSizeVw={1.33}
                            lineHeightVw={2.085}
                        />
                    </div>
                </div>
                <div className="registration-and-login-input-wrapper">
                    <input
                        type={!seePassword ? "password" : "text"}
                        placeholder=""
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
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
                    <div className="input-label-div">
                        <MediumSmallText
                            text="Password"
                            textColor="white"
                            fontSizeVw={1.33}
                            lineHeightVw={2.085}
                        />
                    </div>
                </div>
                <Button
                    buttonText={"Log In"}
                    buttonColor="primary"
                    rounded={false}
                    widthFull={false}
                    type={"submit"}
                />
            </form>
            <div
                className="registration-and-login-block"
                id="login-window-block-restore-password"
            >
                <SmallText
                    text="Forgot your password?"
                    textColor="onBlackBg"
                    fontSizeVw={1.25}
                    lineHeightVw={1.9}
                />
                <a href="">
                    <SmallText
                        text="Get it back!"
                        textColor="onBlackBg"
                        fontSizeVw={1.25}
                        lineHeightVw={1.9}
                    />
                </a>
            </div>
        </div>
    );
}

export default LoginWindow;
