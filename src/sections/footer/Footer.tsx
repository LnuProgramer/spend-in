import React from "react";
import "./FooterStyle.scss";
import SectionBg from "./../../components/sections-bg/SectionBg";
import LargeText from "../../components/sections-texts/LargeText";
import SmallText from "../../components/sections-texts/SmallText";
import FooterLinks from "./FooterLinks";
import MediumSmallText from "../../components/sections-texts/MediumSmallText";
import MediumText from "../../components/sections-texts/MediumText";

const linkLists = {
  linkList1: [
    {
      href: "",
      text: "Digital Invoice",
    },
    {
      href: "",
      text: "Insights",
    },
    {
      href: "",
      text: "Reimbursements",
    },
    {
      href: "",
      text: "Virtual Assistant",
    },
    {
      href: "",
      text: "Artificial Intelligence",
    },
  ],
  linkList2: [
    {
      href: "",
      text: "About Us",
    },
    {
      href: "",
      text: "Newsletters",
    },
    {
      href: "",
      text: "Our Partners",
    },
    {
      href: "",
      text: "Career",
    },
    {
      href: "",
      text: "Contact Us",
    },
  ],
  linkList3: [
    {
      href: "",
      text: "Blog",
    },
    {
      href: "",
      text: "Pricing",
    },
    {
      href: "",
      text: "FAQ",
    },
    {
      href: "",
      text: "Events",
    },
    {
      href: "",
      text: "Ebook & Guide",
    },
  ],
  linkList4: [
    {
      href: "",
      text: "LinkedIn",
    },
    {
      href: "",
      text: "Twitter",
    },
    {
      href: "",
      text: "Instagram",
    },
    {
      href: "",
      text: "Facebook",
    },
    {
      href: "",
      text: "YouTube",
    },
  ],
};

function Footer() {
  return (
    <SectionBg bgColor="white" paddingVw={8.33} id="footer">
      <div id="footer-text-and-links-wrapper">
        <div id="footer-text-wrapper">
          <div id="footer-text-title-wrapper">
            <img
              src="images\vector\footer\spend.in-logo-primary.svg"
              alt="spend.in logo"
              id="footer-text-title-img"
            />
            <LargeText
              text="Spend.In"
              textColor="black"
              fontSizeVw={1.66}
              lineHeightVw={1.388}
            />
          </div>
          <SmallText
            text="Data visualization, and 
expense management 
for your business."
            textColor="onWhiteBg"
            fontSizeVw={1.25}
            lineHeightVw={1.875}
          />
        </div>
        <div id="footer-links-wrapper">
          <FooterLinks title="Product" linksList={linkLists.linkList1} />
          <FooterLinks title="Company" linksList={linkLists.linkList2} />
          <FooterLinks title="Resources" linksList={linkLists.linkList3} />
          <FooterLinks title="Follow Us" linksList={linkLists.linkList4} />
        </div>
      </div>
      <footer>
        <div id="footer-terms-and-condition">
          <a href="">
            <MediumText
              text="Privacy Policy"
              textColor="black"
              fontSizeVw={1.25}
              lineHeightVw={1.875}
            />
          </a>
          <SmallText
            text="|"
            textColor="dark"
            fontSizeVw={1.25}
            lineHeightVw={1.875}
          />
          <a href="">
            <MediumText
              text="Terms & Conditions"
              textColor="black"
              fontSizeVw={1.25}
              lineHeightVw={1.875}
            />
          </a>
          <SmallText
            text="|"
            textColor="dark"
            fontSizeVw={1.25}
            lineHeightVw={1.875}
          />
          <a href="">
            <MediumText
              text="Cookie Policy"
              textColor="black"
              fontSizeVw={1.25}
              lineHeightVw={1.875}
            />
          </a>
        </div>
        <MediumSmallText
          text="© Picko Lab 2022"
          textColor="gray"
          fontSizeVw={1.11}
          lineHeightVw={1.66}
        />
      </footer>
    </SectionBg>
  );
}

export default Footer;
