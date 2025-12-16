"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { formatPrice } from "@/lib/utils";
// import { MenuCard } from "./menu/MenuCard"; // Removed as we use custom card

interface FeaturedMenuGridProps {
    items: any[];
}

export function FeaturedMenuGrid({ items }: FeaturedMenuGridProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    if (!items || items.length === 0) return null;

    return (
        <div className="w-full relative group/slider">
            {/* Header / Nav (merged concept) */}
            <div className="flex items-center justify-between px-6 md:px-10 lg:px-12 xl:px-16 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">Island Favorites</h2>
                    <p className="text-zinc-500 text-sm mt-1">Locals can't get enough of these.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft className="w-5 h-5 text-zinc-600" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="size-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center hover:opacity-90 transition-opacity"
                        aria-label="Scroll right"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Fade Gradients */}
            <div className="hidden md:block absolute left-0 top-[100px] bottom-12 w-32 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-20 pointer-events-none"></div>
            <div className="hidden md:block absolute right-0 top-[100px] bottom-12 w-32 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent z-20 pointer-events-none"></div>

            {/* Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 px-4 md:px-[10vw] pb-12 pt-4 snap-x snap-mandatory scrollbar-hide items-stretch no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.slice(0, 4).map((item) => {
                    // Determine badges based on potential Sanity fields
                    const isNew = item.tags?.includes('new');
                    const isPopular = item.isSignature || item.tags?.includes('popular');

                    return (
                        <article key={item.id} className="relative flex-none w-[300px] md:w-[380px] h-[520px] snap-center rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                                {item.image && (
                                    <MenuCardImage
                                        src={urlFor(item.image).width(400).height(600).url()}
                                        alt={item.name}
                                    />
                                )}
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

                            {/* Badges */}
                            <div className="absolute top-5 left-5 z-10 flex gap-2">
                                {isPopular && (
                                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                                        Best Seller
                                    </span>
                                )}
                                {isNew && (
                                    <span className="bg-orange-500/90 backdrop-blur-md text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                                        New Arrival
                                    </span>
                                )}
                            </div>

                            {/* Card Content Card (Glass) */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 group-hover:shadow-2xl border-t border-white/50 dark:border-white/10">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 dark:text-white leading-tight mb-1 font-[family-name:var(--font-poppins)]">{item.name}</h3>
                                        <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 space-x-3">
                                            <span className="flex items-center gap-1">
                                                <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                                </div>
                                                15-20 min
                                            </span>
                                            {item.calories && (
                                                <span className="flex items-center gap-1">
                                                    <div className="w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.24-4.05-5.5-6 2.12 2.978 1.138 6.075-1 7.5l-.5.5c-2.39 1.95-3.08 6.6 2.06 10.46a1.13 1.13 0 0 0 1.25.17l.08.05a10.02 10.02 0 0 0 7.84-2.16c.1-.06.2-.13.28-.2a7 7 0 0 1 7.49 0c.34.23.8.1 1-.26.54-1 .85-2.13.85-3.32a8.55 8.55 0 0 0-4.03-7.14 8 8 0 1 1-3.61 7.4 6.57 6.57 0 0 0-2 4.5z" /></svg>
                                                    </div>
                                                    {item.calories} kcal
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-gray-200/50 dark:border-gray-700/50 mt-4">
                                    <span className="font-bold text-xl text-gray-900 dark:text-white font-[family-name:var(--font-poppins)]">
                                        {formatPrice(item.price)}
                                    </span>
                                    <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-3 rounded-2xl hover:bg-orange-500 dark:hover:bg-orange-400 hover:text-white transition-colors shadow-lg active:scale-95 group/btn">
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
                <div className="w-4 flex-none"></div>
            </div>

            <div className="flex justify-center mt-4 md:hidden">
                <Link href="/menu" className="text-sm font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1">
                    View Full Menu <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}

// Helper component for Image to avoid hydration mismatch with simpleimg
function MenuCardImage({ src, alt }: { src: string; alt: string }) {
    return (
        <img
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            src={src}
        />
    );
}
