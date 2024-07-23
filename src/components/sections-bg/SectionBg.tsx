import React, { ReactNode } from "react";
import "./SectionBgStyle.scss";
import Lighting from "./Lighting";

type SectionBgProps = {
  children?: ReactNode;
  bgColor: string;
  paddingVw: number;
  id: string;
};

function SectionBg({ bgColor, paddingVw, children, id }: SectionBgProps) {
  return (
    <div
      className={`section-bg ${bgColor}`}
      style={{ padding: `${paddingVw}vw` }}
      id={id}
    >
      {bgColor === "dark" && <Lighting />}
      {children}
    </div>
  );
}

export default SectionBg;
