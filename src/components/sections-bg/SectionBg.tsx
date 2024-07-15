import React, { ReactNode } from "react";
import "./SectionBgStyle.scss";
import Lighting from "./Lighting";

type SectionBgProps = {
  children?: ReactNode;
  bgColor: string;
  padding: number;
};

function SectionBg({ bgColor, padding, children }: SectionBgProps) {
  return (
    <div
      className={`section-bg ${bgColor}`}
      style={{ padding: `${padding}vw` }}
    >
      {bgColor === "dark" && <Lighting />}
      {children}
    </div>
  );
}

export default SectionBg;
