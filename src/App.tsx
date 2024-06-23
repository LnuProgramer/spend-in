import "./App.scss";
import "./index.scss";
import "./scss/Colors.scss";
import Button from "./components/button/Button";
import Footer from "./sections/footer/Footer";
import GetStarted from "./sections/get-started-section/GetStarted";
import Header from "./sections/hero-section/Header";
import HeroSection from "./sections/hero-section/HeroSection";
import HowItWorks from "./sections/how-it-works-section/HowItWorks";
import IncreaseProductivity from "./sections/increase-productivity-section/IncreaseProductivity";
import WhatTheySay from "./sections/what-they-say-section/WhatTheySay";
import WhyUse from "./sections/why-use-section/WhyUse";

function App() {
  return (
    <div className="App">
      <Button bgColorClass="primary" buttonText="Get Demo" />
      <Header />
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
