"use client";

import { X, Flame, Leaf, Clock, Wheat } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { formatPrice } from "@/lib/utils";
import { useEffect } from "react";

interface MenuModalProps {
    item: any;
    isOpen: boolean;
    onClose: () => void;
}

export function MenuModal({ item, isOpen, onClose }: MenuModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !item) return null;

    const imageUrl = item.image ? urlFor(item.image).width(1200).height(1200).url() : null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans bg-black/60 backdrop-blur-md transition-opacity duration-300">
            <div className="relative w-full max-w-5xl group perspective-1000 animate-in zoom-in-95 duration-300">
                <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] w-full transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:border dark:border-white/5">

                    {/* Close Button Mobile */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md text-gray-800 dark:text-white hover:bg-white dark:hover:bg-black transition-all duration-200 shadow-sm md:hidden"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Image Section */}
                    <div className="relative w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-gray-200 dark:bg-zinc-800">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={item.name}
                                fill
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-300">
                                <span className="text-lg">No Image</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>

                        {/* Tags / Best Seller Badge */}
                        {item.isSignature && (
                            <div className="absolute top-6 left-6 bg-white dark:bg-zinc-900 text-black dark:text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg">
                                Best Seller
                            </div>
                        )}
                        {item.tags?.includes('new') && !item.isSignature && (
                            <div className="absolute top-6 left-6 bg-[#145B57] text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg">
                                New Arrival
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col relative">
                        {/* Close Button Desktop */}
                        <button
                            onClick={onClose}
                            className="hidden md:flex absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col gap-2 mb-6">
                            <div className="flex items-start justify-between w-full pr-8">
                                <h1 className="font-poppins font-black text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight tracking-tight drop-shadow-sm">
                                    {item.name}
                                </h1>
                            </div>
                            <div className="inline-flex items-baseline gap-2 mt-2">
                                <span className="text-3xl font-bold text-[#145B57] font-[family-name:var(--font-poppins)]">
                                    {formatPrice(item.price)}
                                </span>
                                {/* Optional: Original price if we had it */}
                                {/* <span className="text-sm text-gray-400 dark:text-gray-500 font-medium line-through">$24.99</span> */}
                            </div>
                        </div>

                        <div className="prose prose-sm dark:prose-invert mb-8 text-gray-600 dark:text-gray-300 leading-relaxed font-normal text-base md:text-lg">
                            <p>{item.description}</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col justify-center items-start border border-gray-100 dark:border-white/5 transition-colors hover:border-[#145B57]/30 dark:hover:border-[#145B57]/30 shadow-inner">
                                <div className="flex items-center gap-2 mb-1 text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wide">
                                    <Flame className="w-4 h-4 text-[#145B57]" />
                                    Calories
                                </div>
                                <span className="text-gray-900 dark:text-white font-bold text-lg">
                                    {item.calories || 'N/A'} <span className="text-sm font-normal text-gray-500">kcal</span>
                                </span>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col justify-center items-start border border-gray-100 dark:border-white/5 transition-colors hover:border-[#145B57]/30 dark:hover:border-[#145B57]/30 shadow-inner">
                                <div className="flex items-center gap-2 mb-1 text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wide">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    Prep time
                                </div>
                                <span className="text-gray-900 dark:text-white font-bold text-lg">
                                    15-20 <span className="text-sm font-normal text-gray-500">min</span>
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 border-b border-dashed border-gray-300 dark:border-zinc-700 mb-auto"></div>

                        {/* CTA Section */}
                        <div className="mt-8 flex flex-col gap-4">
                            <button className="group relative w-full bg-zinc-900 dark:bg-white text-white dark:text-black py-4 md:py-5 px-6 rounded-2xl font-bold text-lg md:text-xl shadow-[0_6px_0_0_rgb(0,0,0)] hover:shadow-[0_8px_0_0_rgb(0,0,0)] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all duration-150 overflow-hidden">
                                <span className="absolute inset-0 bg-[#145B57] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center justify-center gap-3 z-10 group-hover:text-white">
                                    <span>Add to Order</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-white/50 transition-colors"></span>
                                    <span>{formatPrice(item.price)}</span>
                                    {/* Using Lucide ArrowRight instead of ArrowForward */}
                                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </button>
                            <p className="text-center text-xs text-gray-400 dark:text-zinc-600">
                                Available for pickup at Pleasant Grove location
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
