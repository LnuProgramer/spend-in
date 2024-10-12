import "./App.scss";
import "./index.scss";
import "./Colors.scss";
import Footer from "./sections/footer/Footer";
import GetStarted from "./sections/get-started-section/GetStarted";
import HeroSection from "./sections/hero-section/HeroSection";
import HowItWorks from "./sections/how-it-works-section/HowItWorks";
import IncreaseProductivity from "./sections/increase-productivity-section/IncreaseProductivity";
import WhatTheySay from "./sections/what-they-say-section/WhatTheySay";
import WhyUse from "./sections/why-use-section/WhyUse";
import DownloadNow from "./sections/download-now/DownloadNow";
import ReturnButton from "./sections/return-button/ReturnButton";
import { useState } from "react";
import RegistrationLogin from "./sections/login-window/RegistrationLogin";

function App() {
    const [loginWindowShow, setLoginWindowShow] = useState(false);

    return (
        <div className="App">
            <HeroSection setLoginWindowShow={setLoginWindowShow}/>
            <WhyUse/>
            <HowItWorks/>
            <IncreaseProductivity/>
            <WhatTheySay/>
            <GetStarted/>
            <DownloadNow/>
            <Footer/>
            <ReturnButton/>
            <RegistrationLogin loginWindowShow={loginWindowShow} setLoginWindowShow={setLoginWindowShow}/>
        </div>
    );
}

export default App;
