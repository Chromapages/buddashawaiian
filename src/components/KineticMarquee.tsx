"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticMarqueeProps {
    items?: string[];
    className?: string;
    speed?: number;
}

export function KineticMarquee({
    items = ["FRESH MALASADAS", "HOT MUSUBI", "ISLAND VIBES", "ALOHA SERVED DAILY"],
    className,
    speed = 20
}: KineticMarqueeProps) {
    return (
        <div className={cn("relative flex w-full overflow-hidden bg-buddas-teal py-4 text-white", className)}>
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {items.map((item, index) => (
                                <span key={index} className="mx-8 text-2xl font-bold uppercase tracking-widest md:text-4xl font-display">
                                    {item} •
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {items.map((item, index) => (
                                <span key={index} className="mx-8 text-2xl font-bold uppercase tracking-widest md:text-4xl font-display">
                                    {item} •
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
