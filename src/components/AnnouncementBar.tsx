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
        colorTheme?: "teal" | "orange";
    };
}

export function AnnouncementBar({ data }: AnnouncementProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!data?.isActive || !data?.text || !isVisible) {
        return null;
    }

    const isUrgent = data.colorTheme === "orange";
    const bgColor = isUrgent ? "bg-buddas-orange" : "bg-buddas-teal";
    const textColor = "text-white";

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={`${bgColor} ${textColor} relative z-50 overflow-hidden`}
                >
                    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm font-medium font-dm-sans">
                        <div className="flex-1 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                            <span>{data.text}</span>
                            {data.link && (
                                <Link
                                    href={data.link}
                                    className="hidden md:inline-flex items-center gap-1 hover:underline underline-offset-4"
                                >
                                    Learn More <ArrowRight className="w-3 h-3" />
                                </Link>
                            )}
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors shrink-0"
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
