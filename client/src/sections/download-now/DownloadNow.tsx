import React from "react";
import "./DownloadNowStyle.scss";
import SectionBg from "../../components/sections-bg/SectionBg";
import MediumText from "../../components/sections-texts/MediumText";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import Button from "../../components/button/Button";

function DownloadNow() {
    return (
        <SectionBg bgColor="dark" paddingVw={8.33} id="download-now">
            <div id="download-now-section-text-wrapper">
                <div id="download-now-section-medium-large-text-wrapper">
                    <MediumText
                        text="DOWNLOAD NOW!"
                        textColor="primary"
                        fontSizeVw={1.338}
                        lineHeightVw={2.083}
                    />
                    <LargeText
                        text="Start Track Your Business
          Expenses Today"
                        textColor="white"
                        fontSizeVw={2.77}
                        lineHeightVw={4.166}
                    />
                </div>
                <SmallText
                    text="Are you ready to make your business more organized? Download Spend.In now!"
                    textColor="onBlackBg"
                    fontSizeVw={1.338}
                    lineHeightVw={2.083}
                />
            </div>

            <Button
                buttonColor="primary"
                buttonText="Get a Free Demo"
                rounded={false}
                widthFull={false}
                onClick={() => window.open("https://github.com/LnuProgramer")}
            />

            <img
                src="images/raster/download-now/spend-in-statistic.png"
                alt="spend in statistic"
                id="download-now-section-img"
            />
        </SectionBg>
    );
}

export default DownloadNow;
