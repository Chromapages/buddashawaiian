"use client";

import { motion, Variants } from "framer-motion";
import { BentoCard, BentoItem } from "./BentoCard";
import { cn } from "@/lib/utils";

interface BentoMenuProps {
    items: BentoItem[];
    className?: string;
}

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemAnim: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function BentoMenu({ items, className }: BentoMenuProps) {
    // Helper to determine size if not provided (mock logic for now)
    // In a real app, this would come from the CMS
    const getSize = (index: number, total: number): "1x1" | "1x2" | "2x1" | "2x2" => {
        // Pattern: Big feature first, then mix
        if (index === 0) return "2x2";
        if (index === 1) return "1x2";
        if (index === 6) return "2x1";
        return "1x1";
    };

    return (
        <section className={cn("py-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto", className)}>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[320px]"
            >
                {items.map((item, index) => {
                    // Use item.size if available (from CMS), otherwise fallback to pattern
                    const size = (item as any).size || getSize(index, items.length);

                    return (
                        <motion.div
                            key={item.id}
                            variants={itemAnim}
                            className={cn(
                                size === "1x1" && "col-span-1 row-span-1",
                                size === "1x2" && "col-span-1 row-span-2",
                                size === "2x1" && "col-span-2 row-span-1",
                                size === "2x2" && "col-span-2 row-span-2",
                                // Mobile override: always 1 col unless specifically handled
                                "max-md:col-span-1 max-md:row-span-1 max-md:!h-[350px]"
                            )}
                        >
                            <BentoCard
                                size={size}
                                item={item}
                                className="h-full w-full"
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
