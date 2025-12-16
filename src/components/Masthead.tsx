import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";

interface MastheadProps {
    title: string;
    subtitle?: string;
    image?: any;
    breadcrumb: string;
}

export function Masthead({ title, subtitle, image, breadcrumb }: MastheadProps) {
    return (
        <section className="relative bg-[#FAF2D8] pt-8 pb-16 md:pt-12 md:pb-16 overflow-hidden">
            {/* Subtle Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm font-medium mb-8 md:mb-12 animate-in slide-in-from-bottom-4 fade-in duration-700">
                    <Link href="/" className="text-[#3A2F2B]/60 hover:text-[#54BFA5] transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-[#E9C559]" />
                    <span className="text-[#3A2F2B]">{breadcrumb}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    {/* Left: Headline */}
                    <div className="lg:col-span-7 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">
                        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-[#3A2F2B] leading-[0.9] tracking-tight">
                            {title}
                            <span className="text-[#54BFA5]">.</span>
                        </h1>
                    </div>

                    {/* Right: Lead Paragraph & Pill Image */}
                    <div className="lg:col-span-5 flex flex-col gap-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
                        <div className="flex items-start gap-6">
                            {/* Decorative Pill Image */}
                            {image?.asset && (
                                <div className="hidden md:block shrink-0 w-24 h-32 relative rounded-full overflow-hidden border-2 border-white shadow-lg rotate-3">
                                    <Image
                                        src={urlFor(image).width(200).height(300).url()}
                                        alt="Decorative pill"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="w-12 h-1 bg-[#E9C559]" />
                                <p className="text-lg md:text-xl text-[#3A2F2B]/80 leading-relaxed font-medium">
                                    {subtitle || "Serving authentic Hawaiian flavors with a modern twist. Where every plate tells a story of tradition and taste."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
