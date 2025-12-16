"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15,
        },
    },
};

const imageVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0, y: 30 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.4,
        },
    },
};

interface HeroSectionProps {
    slides?: any[];
}

export function HeroSection({ slides }: HeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Data fallback
    const slide = slides?.[0];

    if (!slide) return null;

    const title = slide.title || "REAL. GOOD. FOOD.";
    const subtitle = slide.subtitle || "Welcome to Buddas Hawaiian, where we're more than just a food brand—we're a movement fueled by people like you.";
    const imageUrl = slide.image ? urlFor(slide.image).width(1600).url() : null;

    return (
        <section
            ref={containerRef}
            className="relative w-full overflow-hidden bg-buddas-cream pt-32 pb-16 md:pt-40 md:pb-24 px-4"
        >
            <motion.div
                className="container mx-auto flex flex-col items-center text-center max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="font-display text-buddas-dark font-black leading-[0.85] tracking-tight uppercase text-center mb-8 md:mb-12"
                    style={{ fontSize: "clamp(4rem, 14vw, 11rem)" }}
                >
                    {title}
                </motion.h1>

                {/* Image Container Wrapper */}
                <div className="relative w-full max-w-6xl">
                    <motion.div
                        variants={imageVariants}
                        className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-buddas-dark/5"
                    >
                        {imageUrl && (
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                        )}
                    </motion.div>

                    {/* Floating "Find Near You" Pill Button - Now outside overflow-hidden */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        <Button
                            asChild
                            className="bg-buddas-dark hover:bg-buddas-dark/90 text-buddas-white font-bold rounded-full h-12 md:h-14 px-8 text-sm md:text-base shadow-lg transition-transform hover:scale-105 border-2 border-buddas-cream"
                        >
                            <Link href="/locations">
                                FIND NEAR YOU
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-buddas-dark font-display uppercase text-lg md:text-2xl font-bold max-w-4xl mx-auto mt-12 md:mt-16 leading-tight tracking-wide"
                >
                    {subtitle}
                </motion.p>

            </motion.div>
        </section>
    );
}
