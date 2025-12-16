import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Clock, Leaf, Heart, Hand } from "lucide-react"; // Fallback icons if needed

interface OurValuesSectionProps {
    values: any[];
}

export function OurValuesSection({ values = [] }: OurValuesSectionProps) {
    // Ensure we have at least empty objects to prevent crashes if data is missing
    const safeValues = [...values, {}, {}, {}, {}];

    return (
        <section className="py-24 bg-[#FAF2D8]">
            <div className="container mx-auto px-4">
                <h2 className="font-display text-4xl md:text-5xl text-center text-[#3A2F2B] mb-12">
                    Our Values
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">

                    {/* Card 1: The Anchor (Ohana First) - Spans 2 cols */}
                    <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
                        {safeValues[0].image?.asset ? (
                            <Image
                                src={urlFor(safeValues[0].image).width(800).height(800).url()}
                                alt={safeValues[0].title || "Ohana First"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-[#3A2F2B]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="font-display text-3xl md:text-4xl mb-2">{safeValues[0].title || "Ohana First"}</h3>
                            <p className="text-white/90 text-lg leading-relaxed max-w-md">{safeValues[0].description}</p>
                        </div>
                    </div>

                    {/* Card 2: The Highlight (Fresh Ingredients) - Teal */}
                    <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl overflow-hidden bg-[#54BFA5] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        {/* Grain Texture */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")' }}
                        />
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 text-[#1C5F56]/20 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <Leaf className="w-full h-full" />
                        </div>
                        <div className="p-6 h-full flex flex-col justify-between relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl text-white mb-2">{safeValues[1].title || "Fresh Ingredients"}</h3>
                                <p className="text-white/90 text-sm">{safeValues[1].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: The Detail (Made Daily) - Cream/White */}
                    <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="p-6 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-full bg-[#FAF2D8] flex items-center justify-center text-[#3A2F2B]">
                                    <Clock className="w-6 h-6 animate-pulse" />
                                </div>
                                <span className="bg-[#3A2F2B] text-[#FAF2D8] text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">Daily</span>
                            </div>
                            <div>
                                <h3 className="font-display text-2xl text-[#3A2F2B] mb-2">{safeValues[2].title || "Made Daily"}</h3>
                                <p className="text-[#3A2F2B]/70 text-sm">{safeValues[2].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: The Vibe (Aloha Spirit) - Gold */}
                    <div className="md:col-span-2 md:row-span-1 relative group rounded-3xl overflow-hidden bg-[#E9C559] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
                        {/* Grain Texture */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")' }}
                        />
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                            {/* Placeholder for Shaka illustration - using Heart for now */}
                            <Heart className="w-32 h-32 text-[#3A2F2B]" />
                        </div>
                        <div className="p-8 h-full flex flex-col justify-center relative z-10">
                            <h3 className="font-display text-3xl text-[#3A2F2B] mb-3">{safeValues[3].title || "The Aloha Spirit"}</h3>
                            <p className="text-[#3A2F2B]/80 text-lg max-w-md">{safeValues[3].description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
