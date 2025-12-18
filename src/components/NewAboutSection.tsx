"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NewAboutSectionProps {
    aboutData?: {
        teaserTitle?: string;
        teaserSnippet?: string;
        teaserBackgroundImage?: string;
        stats?: { value: string; label: string }[];
        storyTitle?: string;
        storyContent?: any[];
    };
}

export function NewAboutSection({ aboutData }: NewAboutSectionProps) {
    // Fallback content if Sanity data is missing
    const title = aboutData?.teaserTitle || "Where Aloha Meets the Mountains";
    const snippet = aboutData?.teaserSnippet || "Founded in 2024, Buddas brought the authentic plate lunch culture of the North Shore to the valleys of Utah. We believe in big portions, fresh ingredients, and the kind of hospitality that makes you feel like family.";
    const stats = aboutData?.stats || [];

    // We can use a static fallback if no image is provided from Sanity
    // Ideally this would be a real asset path or a robust placeholder
    const bgImage = aboutData?.teaserBackgroundImage;

    // Animation state
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="about"
            className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{
                // Dark Cocoa Brown gradient overlay for text readability
                backgroundImage: `linear-gradient(rgba(90,58,31,0.65), rgba(90,58,31,0.75)), url(${bgImage})`,
                backgroundColor: '#5A3A1F' // Fallback color (brand brown)
            }}
        >
            <div className={`max-w-4xl mx-auto px-6 md:px-8 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                {/* Heading - Poppins SemiBold, White, Text Shadow */}
                <h2
                    className="text-4xl md:text-5xl font-poppins font-semibold text-white mb-6 tracking-tight drop-shadow-md"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
                >
                    {title}
                </h2>

                {/* Body Text - DM Sans, Light Gray, Readable */}
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 font-dm-sans max-w-xl mx-auto drop-shadow-sm">
                    {snippet}
                </p>

                {/* Stats Bar (Material Style Small Cards) */}
                {stats.length > 0 && (
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mb-10">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-none border border-white/20 px-4 py-2 rounded-xl shadow-sm min-w-[100px]"
                            >
                                <div className="text-xl font-poppins font-bold text-white leading-none">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Button - Material Design Elevation (Level 3) */}
                <Link
                    href="/about"
                    className="group inline-flex items-center gap-3 bg-buddas-teal text-white px-8 py-4 rounded-lg font-dm-sans font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:ring-4 focus:ring-buddas-teal/50 active:scale-95 active:shadow-md"
                >
                    Read Our Story
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

            </div>

            {/* Decorative bottom fade to blend with next section (optional, adds polish) */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
}
