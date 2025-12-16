"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Info, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface BentoItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    video?: string;
    tags?: string[];
    isBestSeller?: boolean;
}

interface BentoCardProps {
    size: "1x1" | "1x2" | "2x1" | "2x2";
    item: BentoItem;
    className?: string;
}

export function BentoCard({ size, item, className }: BentoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    // Grid span classes based on size
    const spanClasses = {
        "1x1": "col-span-1 row-span-1",
        "1x2": "col-span-1 row-span-2",
        "2x1": "col-span-2 row-span-1",
        "2x2": "col-span-2 row-span-2",
    };

    return (
        <motion.div
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-white shadow-sm cursor-pointer",
                spanClasses[size],
                className
            )}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            layout
        >
            {/* Media Layer */}
            <div className="absolute inset-0 h-full w-full bg-gray-100">
                {item.image && (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                )}

                {item.video && (
                    <video
                        ref={videoRef}
                        src={item.video}
                        loop
                        muted
                        playsInline
                        className={cn(
                            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                            isHovered ? "opacity-100" : "opacity-0"
                        )}
                    />
                )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content Layer */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                {/* Top Header */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                        {item.isBestSeller && (
                            <Badge className="bg-golden-glaze text-buddas-dark hover:bg-golden-glaze/90 border-0 font-bold">
                                Best Seller
                            </Badge>
                        )}
                        {item.tags?.slice(0, 2).map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="glass-panel text-white border-white/20"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="relative z-10">
                    <motion.div
                        initial={false}
                        animate={{ y: isHovered ? -10 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <h3 className={cn(
                            "font-display font-bold leading-tight mb-1",
                            size === "2x2" ? "text-4xl" : "text-2xl"
                        )}>
                            {item.name}
                        </h3>

                        <div className="flex items-end justify-between gap-4">
                            <p className={cn(
                                "text-white/80 line-clamp-2 text-sm font-medium",
                                size === "2x2" ? "max-w-md text-base" : ""
                            )}>
                                {item.description}
                            </p>
                            <span className="font-bold text-golden-glaze text-xl shrink-0">
                                ${item.price.toFixed(2)}
                            </span>
                        </div>
                    </motion.div>

                    {/* Slide-up Action Bar */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute -bottom-2 left-0 right-0 pt-4 flex gap-2"
                            >
                                <Button
                                    className="flex-1 bg-buddas-teal hover:bg-buddas-teal/90 text-white font-bold rounded-full h-12 shadow-lg shadow-buddas-teal/20"
                                >
                                    <Plus className="w-5 h-5 mr-2" />
                                    Add to Order
                                </Button>
                                <Button
                                    size="icon"
                                    className="glass-panel h-12 w-12 rounded-full text-white hover:bg-white hover:text-deep-ocean transition-colors"
                                >
                                    <Info className="w-5 h-5" />
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
