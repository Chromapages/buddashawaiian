"use client";

import { PlayCircle, Truck, ShoppingBag, ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface NewHeroProps {
    heroSlides?: any[];
}

export function NewHero({ heroSlides }: NewHeroProps) {
    // Use data from the first slide as primary content
    const slide = heroSlides?.[0];

    // Sanity Data Mapping
    const heroTitle = slide?.title || "Healthy Eating is an Important Part of Lifestyle";
    const heroSubtitle = slide?.subtitle || "We Prepare Delicious Food For You We Are Always here to serve you the best healthy meals.";
    const heroBadge = slide?.badge || "#1 Food Delivery Service";

    // Buttons
    const primaryCtaLabel = slide?.primaryCtaLabel || "Explore Now";
    const primaryCtaLink = slide?.primaryCtaLink || "/menu";

    // Main Hero Image
    // Use direct asset.url since query expands asset->
    const getHeroImageSrc = (): string => {
        // Check if we have a direct URL from expanded asset
        if (slide?.image?.asset?.url) {
            return slide.image.asset.url;
        }
        // Fallback to Unsplash
        return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200";
    };
    const mainImageSrc = getHeroImageSrc();

    const secondaryCtaLabel = slide?.secondaryCtaLabel || "View Specials";
    const secondaryCtaLink = slide?.secondaryCtaLink || "/menu";

    return (
        <section className="relative w-full overflow-hidden min-h-[650px] lg:min-h-[800px] 2xl:min-h-[900px] flex items-center bg-zinc-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src={mainImageSrc}
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-36 pb-32 md:pb-48 md:pt-44 lg:pt-48 grid lg:grid-cols-2 gap-12 2xl:gap-16 items-center">

                {/* Left Column: Text */}
                <div className="space-y-8 max-w-2xl 2xl:max-w-3xl animate-in slide-in-from-bottom-8 fade-in duration-700">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] font-[family-name:var(--font-poppins)]">
                        {heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl 2xl:text-3xl text-teal-50 font-medium leading-relaxed max-w-lg 2xl:max-w-2xl opacity-95 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                        {heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href={primaryCtaLink}
                            className="group flex items-center justify-center gap-2 bg-[#d4a017] text-teal-950 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_4px_0_0_#8a680f,0_8px_20px_-4px_rgba(0,0,0,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#8a680f,0_12px_24px_-4px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-[0_0_0_0_#8a680f,inset_0_2px_4px_rgba(0,0,0,0.3)]"
                        >
                            <span>{primaryCtaLabel}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href={secondaryCtaLink}
                            className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all backdrop-blur-md border border-white/20 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)] active:scale-95"
                        >
                            <span>{secondaryCtaLabel}</span>
                            <ShoppingBag className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 pt-4 text-teal-100/80 text-base">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-white/20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                            <img className="w-10 h-10 rounded-full border-2 border-white/20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                            <img className="w-10 h-10 rounded-full border-2 border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                        </div>
                        <p className="drop-shadow-sm">Loved by 12,000+ happy islanders</p>
                    </div>
                </div>

                {/* Right Column: Empty (Spacer for Background Visibility) */}
                <div className="hidden lg:block relative h-full min-h-[400px]">
                    {/* Content removed to let background shine through, as requested */}
                </div>
            </div>

            {/* Wave Dividers */}


            {/* Product Carousel - Preserved Below */}
            <div className="max-w-7xl mx-auto px-6 mt-8 relative z-40 hidden">
                {/* ... Hidden for now as user asked to match design, but keeping in code structure if needed to re-enable ... */}
            </div>
        </section>
    );
}
