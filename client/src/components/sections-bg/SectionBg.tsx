import React, { ReactNode, useRef, useEffect, useState } from "react";
import "./SectionBgStyle.scss";
import Lighting from "./Lighting";

type SectionBgProps = {
    children?: ReactNode;
    bgColor: string;
    paddingVw: number;
    id: string;
};

function SectionBg({bgColor, paddingVw, children, id}: SectionBgProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [adjustedPaddingVw, setAdjustedPaddingVw] = useState(paddingVw);

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

        const updatePadding = () => {
            setAdjustedPaddingVw(
                paddingVw === 8.33 && window.screen.width <= 1024 ? 7.466 : paddingVw
            );
        };
        updatePadding();
        window.addEventListener("resize", updatePadding);
        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
            window.removeEventListener("resize", updatePadding);
        };
    }, []);
    
    return (
        <section
            ref={sectionRef}
            className={`section-bg ${bgColor}`}
            style={{padding: `${adjustedPaddingVw}vw`}}
            id={id}
        >
            {bgColor === "dark" && <Lighting/>}
            {children}
        </section>
    );
}

export default SectionBg;
