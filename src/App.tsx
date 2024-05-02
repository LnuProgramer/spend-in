import "./App.scss";
import "./scss/Colors.scss";
import Footer from "./components/footer/Footer";
import GetStarted from "./components/get-started-section/GetStarted";
import Header from "./components/hero-section/Header";
import HeroSection from "./components/hero-section/HeroSection";
import HowItWorks from "./components/how-it-works-section/HowItWorks";
import IncreaseProductivity from "./components/increase-productivity-section/IncreaseProductivity";
import WhatTheySay from "./components/what-they-say-section/WhatTheySay";
import WhyUse from "./components/why-use-section/WhyUse";

function App() {
  return (
    <div className="App">
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
