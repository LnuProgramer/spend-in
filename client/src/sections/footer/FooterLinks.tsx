import React from "react";
import "./FooterLinksStyle.scss";
import MediumText from "../../components/sections-texts/MediumText";
import SmallText from "../../components/sections-texts/SmallText";

type linkList = {
  href: string;
  text: string;
};

type FooterLinksProps = {
  title: string;
  linksList: linkList[];
};

function FooterLinks({ title, linksList }: FooterLinksProps) {
  return (
    <div className="footer-links-block-wrapper">
      <MediumText
        text={title}
        textColor="black"
        fontSizeVw={1.33}
        lineHeightVw={2.083}
      />
      <ul className="footer-links">
        {linksList.map((link, index) => (
          <li key={index}>
            <a href={link.href} key={index}>
              <SmallText
                text={link.text}
                textColor="onWhiteBg"
                fontSizeVw={1.11}
                lineHeightVw={1.66}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
