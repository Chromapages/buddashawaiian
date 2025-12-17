"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up"
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getTransform = () => {
        switch (direction) {
            case "up": return "translateY(50px)";
            case "down": return "translateY(-50px)";
            case "left": return "translateX(50px)";
            case "right": return "translateX(-50px)";
            default: return "none";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className}`}
            style={{
                transform: isInView ? "none" : getTransform(),
                opacity: isInView ? 1 : 0,
                filter: isInView ? "blur(0px)" : "blur(10px)",
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}
