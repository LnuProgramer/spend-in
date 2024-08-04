import React, { ReactNode, useRef, useEffect } from "react";
import "./SectionBgStyle.scss";
import Lighting from "./Lighting";

type SectionBgProps = {
  children?: ReactNode;
  bgColor: string;
  paddingVw: number;
  id: string;
};

function SectionBg({ bgColor, paddingVw, children, id }: SectionBgProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("not-show");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("not-show");
        }
      });
    });

    if (sectionRef.current) {
      const observeAll = (element: Element) => {
        observer.observe(element);
        Array.from(element.children).forEach(observeAll);
      };

      observeAll(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-bg ${bgColor}`}
      style={{ padding: `${paddingVw}vw` }}
      id={id}
    >
      {bgColor === "dark" && <Lighting />}
      {children}
    </section>
  );
}

export default SectionBg;
