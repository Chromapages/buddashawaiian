"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface AnnouncementProps {
    data: {
        isActive?: boolean;
        text?: string;
        link?: string;
        colorTheme?: "teal" | "dark-teal" | "gold" | "orange" | "brown";
    };
}

export function AnnouncementBar({ data }: AnnouncementProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!data?.isActive || !data?.text || !isVisible) {
        return null;
    }

    const getColorClasses = (theme?: string) => {
        switch (theme) {
            case "dark-teal":
                return { bg: "bg-buddas-teal-dark", text: "text-white" };
            case "gold":
                return { bg: "bg-buddas-gold", text: "text-buddas-brown" };
            case "orange":
                return { bg: "bg-buddas-orange", text: "text-white" };
            case "brown":
                return { bg: "bg-buddas-brown", text: "text-white" };
            case "teal":
            default:
                return { bg: "bg-buddas-teal", text: "text-white" };
        }
    };

    const colors = getColorClasses(data.colorTheme);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={`${colors.bg} ${colors.text} relative z-50 overflow-hidden`}
                >
                    <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center relative min-h-[44px] text-sm font-medium font-dm-sans">
                        <div className="flex items-center justify-center gap-2 text-center px-8">
                            <span>{data.text}</span>
                            {data.link && (
                                <Link
                                    href={data.link}
                                    className="hidden md:inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-white/30"
                                >
                                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            )}
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-colors shrink-0"
                            aria-label="Close announcement"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    {/* Mobile Link Overlay */}
                    {data.link && (
                        <Link href={data.link} className="absolute inset-0 md:hidden" aria-label="View announcement link" />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
