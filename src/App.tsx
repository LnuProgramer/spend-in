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

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhyUse />
      <HowItWorks />
      <IncreaseProductivity />
      <WhatTheySay />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
