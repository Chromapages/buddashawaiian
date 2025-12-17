"use client";

import { urlFor } from "@/sanity/lib/image";
import { ArrowRight, Tag, Sparkles, MapPin, ExternalLink, Copy, Check, MousePointerClick } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Promotion {
    _id: string;
    title: string;
    description: string;
    image?: any;
    link?: string;
    buttonText?: string;
    ctaType?: 'link' | 'coupon' | 'external'; // New optional field
    couponCode?: string; // New optional field
}

interface PromoBannerProps {
    promotions?: Promotion[];
}

export function PromoBanner({ promotions = [] }: PromoBannerProps) {
    if (!promotions || promotions.length === 0) return null;

    return (
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {promotions.slice(0, 3).map((promo, idx) => (
                    <PromoCard key={promo._id || idx} promo={promo} />
                ))}
            </div>
        </div>
    );
}

function PromoCard({ promo }: { promo: Promotion }) {
    const [isCopied, setIsCopied] = useState(false);

    // Robust Image Logic
    let imageUrl: string | null = null;
    try {
        if (typeof promo.image === 'string') {
            imageUrl = promo.image;
        } else if (promo.image?.asset?.url) {
            imageUrl = promo.image.asset.url;
        } else if (promo.image) {
            imageUrl = urlFor(promo.image).width(800).height(600).url();
        }
    } catch (e) {
        console.error("Error resolving image for promo:", promo.title);
    }

    // Determine CTA Type Strategy
    const ctaType = promo.ctaType || (promo.couponCode ? 'coupon' : (promo.link?.includes('spoton') || promo.link?.startsWith('http') ? 'external' : 'link'));

    const handleCopy = () => {
        if (promo.couponCode) {
            navigator.clipboard.writeText(promo.couponCode);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <div className="group flex flex-col bg-white rounded-[1.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full border border-zinc-100 relative">

            {/* Image Section */}
            <div className="relative h-[240px] w-full overflow-hidden bg-zinc-100 shrink-0">
                {imageUrl ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-buddas-teal/10 to-teal-50 flex items-center justify-center">
                        <Sparkles className="w-10 h-10 text-buddas-teal/20" />
                    </div>
                )}

                {/* Floating Badge - UNIFIED GOLD THEME */}
                <div className="absolute top-4 left-4 z-10">
                    <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm bg-amber-100/95 text-amber-800 border border-amber-200"
                    >
                        <Tag className="w-3 h-3" />
                        {ctaType === 'coupon' ? 'Exclusive Code' : 'Limited Time'}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-white">
                {/* Decorative border accent */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 font-poppins mb-3 leading-tight transition-colors">
                    {promo.title}
                </h3>

                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                    {promo.description}
                </p>

                <div className="mt-auto w-full">
                    {/* CTA: Coupon Code (Gold Theme) */}
                    {ctaType === 'coupon' && promo.couponCode && (
                        <div className="flex flex-col gap-2">
                            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">Use Code at Checkout</div>
                            <button
                                onClick={handleCopy}
                                className="w-full flex items-center justify-between bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 px-5 py-4 rounded-xl font-mono font-bold transition-all duration-200 group/btn relative overflow-hidden active:scale-95"
                            >
                                <span className="text-lg tracking-widest relative z-10">{promo.couponCode}</span>
                                <div className="flex items-center gap-2 relative z-10">
                                    <span className="text-[10px] font-sans font-bold uppercase opacity-60">
                                        {isCopied ? "Copied!" : "Click to Copy"}
                                    </span>
                                    {isCopied ? (
                                        <Check className="w-5 h-5 text-buddas-teal" />
                                    ) : (
                                        <Copy className="w-5 h-5 opacity-40 group-hover/btn:opacity-100 transition-opacity" />
                                    )}
                                </div>
                            </button>
                        </div>
                    )}

                    {/* CTA: External Order (SpotOn) - GOLD/ORANGE THEME */}
                    {ctaType === 'external' && (
                        <Link
                            href={promo.link || "#"}
                            target="_blank"
                            className="w-full flex items-center justify-center gap-3 bg-buddas-gold hover:bg-teal-600 text-white px-5 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group/btn"
                        >
                            <span className="text-sm uppercase tracking-wide">
                                {promo.buttonText || "Order on SpotOn"}
                            </span>
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    )}

                    {/* CTA: Internal Link - BLACK -> GOLD/ORANGE THEME */}
                    {ctaType === 'link' && (
                        <Link
                            href={promo.link || "/menu"}
                            className="w-full flex items-center justify-between bg-buddas-gold hover:bg-teal-600 text-white px-5 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group/btn"
                        >
                            <span className="text-sm uppercase tracking-wide">
                                {promo.buttonText || "View Details"}
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                    )}

                    {/* CTA: Fallback (Location) - GREY -> LIGHT GOLD THEME */}
                    {!ctaType && !promo.link && !promo.couponCode && (
                        <Link
                            href="/contact"
                            className="w-full flex items-center justify-between bg-zinc-50 hover:bg-amber-50 text-zinc-900 px-5 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 group/btn border border-zinc-200/50 hover:border-amber-200"
                        >
                            <span className="text-sm uppercase tracking-wide">
                                Visit Location
                            </span>
                            <MapPin className="w-4 h-4 text-zinc-400 group-hover/btn:text-amber-600 transition-colors" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
