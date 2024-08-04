import React, { useState, useEffect } from "react";
import "./ReturnButtonStyle.scss";
import Button from "../../components/button/Button";
import smoothScrollTo from "../../SrcollAnimation";

function ReturnButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsAtTop(true);
      else setIsAtTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return !isAtTop ? (
    <Button
      buttonColor="primary"
      buttonText={
        <img
          src="images/vector/what-they-say/arrow-left.svg"
          alt="arrow-up"
          id="arrow-up"
        />
      }
      rounded={true}
      widthFull={false}
      onClick={() => {
        smoothScrollTo("hero-section", 2000);
      }}
      id="return-button"
    />
  ) : (
    <></>
  );
}

export default ReturnButton;
