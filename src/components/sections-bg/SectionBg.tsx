import React, { ReactNode } from "react";
import "./SectionBgStyle.scss";
import Lighting from "./Lighting";

type SectionBgProps = {
  children?: ReactNode;
  bgColor: string;
  paddingVw: number;
};

function SectionBg({ bgColor, paddingVw, children }: SectionBgProps) {
  return (
    <div
      className={`section-bg ${bgColor}`}
      style={{ padding: `${paddingVw}vw` }}
    >
      {bgColor === "dark" && <Lighting />}
      {children}
    </div>
  );
}

export default SectionBg;
