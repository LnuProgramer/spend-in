import React, { useState } from "react";
import "./LoginWindowStyle.scss";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import { AiOutlineClose } from "react-icons/ai";
import { FaLock } from "react-icons/fa6";
import { FaUnlock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../../components/button/Button";

const users = {
  user1: {
    userName: "admin",
    email: "admin@gmail.com",
    password: "admin",
  },
  user2: {
    userName: "test",
    email: "test@test.com",
    password: "test",
  },
};

function LoginWindow() {
  const [isRegistrtion, setIsRegistration] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const PasswordHandler = () => {
    setSeePassword(!seePassword);
  };

  const RegistrationHandler = () => {
    setIsRegistration(!isRegistrtion);
  };
  return (
    <div id="login-window-section">
      <div id="login-registration-window-wrapper">
        <AiOutlineClose className="login-window-cross-img" />
        <div
          className={`login-registration-window-swapper ${
            isRegistrtion && "swap"
          }`}
        >
          <div
            className={`${!isRegistrtion && "on-screen"}`}
            id="login-window-wrapper"
          >
            <div className="login-window-block">
              <LargeText
                text="Log In"
                textColor="white"
                fontSizeVw={2.4}
                lineHeightVw={3.8}
              />
              <div id="login-window-create-account">
                <SmallText
                  text="New user?"
                  textColor="onBlackBg"
                  fontSizeVw={1.25}
                  lineHeightVw={1.9}
                />
                <a onClick={RegistrationHandler}>
                  <SmallText
                    text="Create an account"
                    textColor="onBlackBg"
                    fontSizeVw={1.25}
                    lineHeightVw={1.9}
                  />
                </a>
              </div>
            </div>
            <div className="login-window-block" id="login-window-inputs-block">
              <div className="login-window-block-input-wrapper">
                <input type="email" placeholder="" required />
                <MdEmail className="login-window-input-icon" />
                <MediumSmallText
                  text="Email"
                  textColor="white"
                  fontSizeVw={1.33}
                  lineHeightVw={2.085}
                />
              </div>
              <div className="login-window-block-input-wrapper">
                <input
                  type={!seePassword ? "password" : "text"}
                  placeholder=""
                  required
                />
                {!seePassword ? (
                  <FaLock
                    onClick={PasswordHandler}
                    className="login-window-input-icon"
                  />
                ) : (
                  <FaUnlock
                    onClick={PasswordHandler}
                    className="login-window-input-icon"
                  />
                )}

                <MediumSmallText
                  text="Password"
                  textColor="white"
                  fontSizeVw={1.33}
                  lineHeightVw={2.085}
                />
              </div>
              <Button
                buttonText={"Log In"}
                buttonColor="primary"
                rounded={false}
                widthFull={false}
              />
            </div>
            <div
              className="login-window-block"
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

          <div
            className={`${isRegistrtion && "on-screen"}`}
            id="registration-window-wrapper"
          >
            <div className="login-window-block">
              <LargeText
                text="Registration"
                textColor="white"
                fontSizeVw={2.4}
                lineHeightVw={3.8}
              />
              <div id="login-window-create-account">
                <SmallText
                  text="Have account?"
                  textColor="onBlackBg"
                  fontSizeVw={1.25}
                  lineHeightVw={1.9}
                />
                <a onClick={RegistrationHandler}>
                  <SmallText
                    text="Log in"
                    textColor="onBlackBg"
                    fontSizeVw={1.25}
                    lineHeightVw={1.9}
                  />
                </a>
              </div>
            </div>
            <div className="login-window-block" id="login-window-inputs-block">
              <div className="login-window-block-input-wrapper">
                <input type="text" placeholder="" required />
                <FaUser className="login-window-input-icon" />
                <MediumSmallText
                  text="Username"
                  textColor="white"
                  fontSizeVw={1.33}
                  lineHeightVw={2.085}
                />
              </div>
              <div className="login-window-block-input-wrapper">
                <input type="email" placeholder="" required />
                <MdEmail className="login-window-input-icon" />
                <MediumSmallText
                  text="Email"
                  textColor="white"
                  fontSizeVw={1.33}
                  lineHeightVw={2.085}
                />
              </div>
              <div className="login-window-block-input-wrapper">
                <input type="password" placeholder="" required />
                <FaLock className="login-window-input-icon" />
                <MediumSmallText
                  text="Password"
                  textColor="white"
                  fontSizeVw={1.33}
                  lineHeightVw={2.085}
                />
              </div>
              <div className="login-window-block-input-wrapper">
                <input type="password" placeholder="" required />
                <FaLock className="login-window-input-icon" />
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
        </div>
      </div>
    </div>
  );
}

export default LoginWindow;
