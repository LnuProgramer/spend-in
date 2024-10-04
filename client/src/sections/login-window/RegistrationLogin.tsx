import LoginWindow from "./LoginWindow";
import RegistrationWindow from "./RegistrationWindow";
import "./LoginWindowStyle.scss";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useState } from "react";

interface RegistrationLoginProps {
    loginWindowShow: boolean;
    setLoginWindowShow: (show: boolean) => void;
}

function RegistrationLogin({loginWindowShow, setLoginWindowShow}: RegistrationLoginProps) {
    const [isSwapped, setIsSwapped] = useState(false);
    const [seePassword, setSeePassword] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLoginSectionShow = () => {
        setLoginWindowShow(false);
    }

    const PasswordShow = () => {
        setSeePassword(!seePassword);
    };

    const Swapper = () => {
        setIsSwapped(!isSwapped);
    };


    useEffect(() => {
        setSeePassword(false);
    }, [isSwapped]);

    return (
        <div id="registration-login-section" className={`${loginWindowShow ? "show-login-section" : ""}`}>
            <div id="registration-login-section-wrapper">
                <AiOutlineClose id="registration-login-cross-img" onClick={handleLoginSectionShow}/>
                <div
                    className={`registration-login-section-swapper ${
                        isSwapped && "swap"
                    }`}
                >
                    <LoginWindow userName={userName} setUserName={setUserName} password={password}
                                 setPassword={setPassword} isSwapped={isSwapped} Swapper={Swapper}
                                 seePassword={seePassword} PasswordShow={PasswordShow}/>
                    <RegistrationWindow userName={userName} setUserName={setUserName} email={email} setEmail={setEmail}
                                        password={password} setPassword={setPassword}
                                        confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
                                        isSwapped={isSwapped} Swapper={Swapper} seePassword={seePassword}
                                        PasswordShow={PasswordShow}/>
                </div>
            </div>
        </div>
    )
}

export default RegistrationLogin;