import React, { useEffect, useRef, useState } from "react";
import "./HeaderStyle.scss";
import Button from "../../components/button/Button";
import smoothScrollTo from "../../scripts/SrcollAnimation";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import SmallText from "../../components/sections-texts/SmallText";
import { checkAccessToken, LogoutRequest } from "../../scripts/LoginRegistrationRequests";

interface HeaderProps {
    setLoginWindowShow: (show: boolean) => void;
}

function Header({setLoginWindowShow}: HeaderProps) {
    const [productsDropMenu, setProductsDropMenu] = useState(false);
    const [companyDropMenu, setCompanyDropMenu] = useState(false);
    const [userDropMenu, setUserDropMenu] = useState(false);
    const [userNameLogin, setUserNameLogin] = useState("");

    const productsMenuRef = useRef<HTMLUListElement>(null);
    const companyMenuRef = useRef<HTMLUListElement>(null);
    const userMenuRef = useRef<HTMLUListElement>(null);

    const handleLoginWindowShow = () => {
        setLoginWindowShow(true);
    }

    const handleProductsDropMenu = () => {
        setProductsDropMenu(!productsDropMenu);
    };

    const handleCompanyDropMenu = () => {
        setCompanyDropMenu(!companyDropMenu);
    };

    const handleUserDropMenu = () => {
        setUserDropMenu(!userDropMenu);
    }

    const handleBenefitClick = () => {
        smoothScrollTo("why-use-section-1", 2000);
    };

    const handleHowItWorksClick = () => {
        smoothScrollTo("how-it-works-section-1", 2000);
    };

    const handlePricingClick = () => {
        smoothScrollTo("get-started", 2000);
    };

    const handleClickOutside = (event: Event) => {
        if (
            (productsDropMenu || companyDropMenu || userDropMenu) && // Check at least one menu is open
            productsMenuRef.current &&
            !productsMenuRef.current.contains(event.target as HTMLElement) &&
            companyMenuRef.current &&
            !companyMenuRef.current.contains(event.target as HTMLElement) &&
            userMenuRef.current &&
            !userMenuRef.current.contains(event.target as HTMLElement)
        ) {
            setProductsDropMenu(false);
            setCompanyDropMenu(false);
            setUserDropMenu(false);
        }
    };

    const LogOutHandler = async () => {
        LogoutRequest().catch((err) => console.log(err));
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, [productsDropMenu, companyDropMenu]);

    useEffect(() => {
        const verifyAccessToken = async () => {
            const user = await checkAccessToken();
            setUserNameLogin(user);
        };

        verifyAccessToken().catch((err) => console.error(err));
    }, [])

    return (
        <header>
            <div className="header-divs" id="header-div-left">
                <img src="images/vector/header/logo.svg" id="logo" alt="logo"/>
                <h1 id="product-name">Spend.In</h1>
            </div>
            <nav className="header-divs" id="header-div-center">
                <div className="drop-menu-wrapper">
                    <div
                        className="drop-menu"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleProductsDropMenu();
                        }}
                    >
                        <MediumSmallText
                            text="Products"
                            textColor="white"
                            fontSizeVw={1.25}
                            lineHeightVw={1.875}
                        />

                        <svg
                            width="1.25vw"
                            height="1.3194vw"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`arrow-down ${productsDropMenu && "up"}`}
                        >
                            <path
                                d="M14.9401 7.2124L10.0501 12.1024C9.47256 12.6799 8.52756 12.6799 7.95006 12.1024L3.06006 7.2124"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <ul
                        ref={productsMenuRef}
                        className={`menu ${productsDropMenu && "show-menu"}`}
                        id="products-menu"
                    >
                        <li>
                            <a href="">
                                <SmallText
                                    text="Digital Invoice"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Insights"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Reimbursements"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Virtual Assistant"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Artificial Intelligence"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <a onClick={handleBenefitClick} className="header-div-center-a">
                    <MediumSmallText
                        text="Benefit"
                        textColor="white"
                        fontSizeVw={1.25}
                        lineHeightVw={1.875}
                    />
                </a>
                <a onClick={handleHowItWorksClick} className="header-div-center-a">
                    <MediumSmallText
                        text="How it Works"
                        textColor="white"
                        fontSizeVw={1.25}
                        lineHeightVw={1.875}
                    />
                </a>
                <a onClick={handlePricingClick} className="header-div-center-a">
                    <MediumSmallText
                        text="Pricing"
                        textColor="white"
                        fontSizeVw={1.25}
                        lineHeightVw={1.875}
                    />
                </a>
                <div className="drop-menu-div">
                    <div
                        className="drop-menu"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCompanyDropMenu();
                        }}
                    >
                        <MediumSmallText
                            text="Company"
                            textColor="white"
                            fontSizeVw={1.25}
                            lineHeightVw={1.875}
                        />
                        <svg
                            width="1.25vw"
                            height="1.3194vw"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`arrow-down ${companyDropMenu && "up"}`}
                        >
                            <path
                                d="M14.9401 7.2124L10.0501 12.1024C9.47256 12.6799 8.52756 12.6799 7.95006 12.1024L3.06006 7.2124"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <ul
                        ref={companyMenuRef}
                        className={`menu ${companyDropMenu && "show-menu"}`}
                        id="company-menu"
                    >
                        <li>
                            <a href="">
                                <SmallText
                                    text="About Us"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Newsletters"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Our Partners"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Career"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <SmallText
                                    text="Contact Us"
                                    textColor="onBlackBg"
                                    fontSizeVw={1.11}
                                    lineHeightVw={1.66}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="header-divs" id="header-div-right">
                {userNameLogin == null || userNameLogin === "" ? (
                    <a id="login-button" onClick={handleLoginWindowShow}>
                        <MediumSmallText
                            text="Login"
                            textColor="white-gray"
                            fontSizeVw={1.25}
                            lineHeightVw={1.875}
                        />
                    </a>
                ) : (
                    <div className="drop-menu-wrapper">
                        <div className="drop-menu-div">
                            <div
                                className="drop-menu"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleUserDropMenu();
                                }}
                            >
                                <a id="login-button">
                                    <MediumSmallText
                                        text={userNameLogin}
                                        textColor="white-gray"
                                        fontSizeVw={1.25}
                                        lineHeightVw={1.875}
                                    /></a>
                                <svg
                                    width="1.25vw"
                                    height="1.3194vw"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`arrow-down ${userDropMenu && "up"}`}
                                    id="user-arrow-down"
                                >
                                    <path
                                        d="M14.9401 7.2124L10.0501 12.1024C9.47256 12.6799 8.52756 12.6799 7.95006 12.1024L3.06006 7.2124"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <ul
                                ref={userMenuRef}
                                className={`menu ${userDropMenu && "show-menu"}`}
                                id="user-menu"
                            >
                                <li>
                                    <a id="log-out-a" onClick={() => LogOutHandler()}>
                                        <SmallText
                                            text="Log out"
                                            textColor="onBlackBg"
                                            fontSizeVw={1.11}
                                            lineHeightVw={1.66}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>)}

                <Button
                    buttonColor="primary"
                    buttonText="Get Demo"
                    rounded={false}
                    widthFull={false}
                    onClick={() => window.open("https://github.com/LnuProgramer")}
                />
            </div>
        </header>
    );
}

export default Header;
