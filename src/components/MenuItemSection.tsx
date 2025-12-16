import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
// import { MenuCard } from "./menu/MenuCard";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: any; // Changed from string to any to match Sanity object
    isBestSeller?: boolean;
    isSignature?: boolean;
    tags?: string[];
    calories?: number;
}

interface MenuItemSectionProps {
    id: string;
    title: string;
    subtitle: string;
    items: MenuItem[];
}

export function MenuItemSection({ id, title, subtitle, items }: MenuItemSectionProps) {
    if (!items || items.length === 0) return null;

    return (
        <section id={id} className="scroll-mt-32">
            {/* Section Header */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-[family-name:var(--font-poppins)]">{title}</h2>
                <p className="text-slate-500 mt-2">{subtitle}</p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-12">
                {items.slice(0, 10).map((item) => {
                    const isNew = item.tags?.includes('new');
                    const isPopular = item.isSignature || item.tags?.includes('popular');

                    return (
                        <article key={item.id} className="relative w-full h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-gray-900/5 dark:ring-white/10">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                                {item.image && (
                                    <img
                                        src={urlFor(item.image).width(400).height(500).url()}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                )}
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 z-10 flex gap-2">
                                {isPopular && (
                                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-2.5 py-1 text-[10px] font-bold rounded-full shadow-md uppercase tracking-wide">
                                        Popular
                                    </span>
                                )}
                                {isNew && (
                                    <span className="bg-orange-500/90 backdrop-blur-md text-white px-2.5 py-1 text-[10px] font-bold rounded-full shadow-md uppercase tracking-wide">
                                        New
                                    </span>
                                )}
                            </div>

                            {/* Glass Content Panel */}
                            <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_4px_16px_rgb(0,0,0,0.08)] transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 border-t border-white/50 dark:border-white/10">
                                <div className="mb-3">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight mb-1 font-[family-name:var(--font-poppins)] line-clamp-1">{item.name}</h3>

                                    {/* Stats Row */}
                                    <div className="flex items-center text-[10px] font-medium text-gray-500 dark:text-gray-400 space-x-3">
                                        <span className="flex items-center gap-1">
                                            <div className="w-3 h-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                            </div>
                                            15m
                                        </span>
                                        {item.calories && (
                                            <span className="flex items-center gap-1">
                                                <div className="w-3 h-3 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.24-4.05-5.5-6 2.12 2.978 1.138 6.075-1 7.5l-.5.5c-2.39 1.95-3.08 6.6 2.06 10.46a1.13 1.13 0 0 0 1.25.17l.08.05a10.02 10.02 0 0 0 7.84-2.16c.1-.06.2-.13.28-.2a7 7 0 0 1 7.49 0c.34.23.8.1 1-.26.54-1 .85-2.13.85-3.32a8.55 8.55 0 0 0-4.03-7.14 8 8 0 1 1-3.61 7.4 6.57 6.57 0 0 0-2 4.5z" /></svg>
                                                </div>
                                                {item.calories}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                    <span className="font-bold text-lg text-gray-900 dark:text-white font-[family-name:var(--font-poppins)]">
                                        {formatPrice(item.price)}
                                    </span>
                                    <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-2 rounded-xl hover:bg-orange-500 dark:hover:bg-orange-400 hover:text-white transition-colors shadow-md active:scale-95">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
