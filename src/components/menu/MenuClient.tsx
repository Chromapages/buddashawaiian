"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuCard } from "./MenuCard";
import { MenuModal } from "./MenuModal";
import {
    ChefHat,
    Sandwich,
    Pizza,
    Leaf,
    Coffee,
    Cookie,
    RotateCcw,
    Utensils,
    ShoppingBag
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface MenuClientProps {
    categories: any[];
    // We might want to pass all items flattened if we want "All Items" to work easily, 
    // or we can extract them from categories if the structure is nested.
    // Based on previous code, categories contained items.
}

export function MenuClient({ categories }: MenuClientProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All Items");

    // Flatten all items for "All Items" view, and remove duplicates if any
    const allItems = categories.flatMap(cat => cat.items || []);
    // Deduplicate by ID just in case
    const uniqueItems = Array.from(new Map(allItems.map((item: any) => [item._id, item])).values());

    // Filter logic
    const displayedItems = activeCategory === "All Items"
        ? uniqueItems
        : categories.find(c => c.title === activeCategory)?.items || [];

    // Helper to get icon for category (Mapping approx to user request)
    const getCategoryIcon = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes("burger")) return <Sandwich className="w-5 h-5" />;
        if (t.includes("pizza")) return <Pizza className="w-5 h-5" />;
        if (t.includes("healthy") || t.includes("vegan") || t.includes("salad")) return <Leaf className="w-5 h-5" />;
        if (t.includes("drink") || t.includes("coffee") || t.includes("tea")) return <Coffee className="w-5 h-5" />;
        if (t.includes("dessert") || t.includes("sweet")) return <Cookie className="w-5 h-5" />;
        return <ChefHat className="w-5 h-5" />; // Default
    };

    const [selectedItem, setSelectedItem] = useState<any>(null);

    return (
        <div className="bg-white min-h-screen">
            {/* Modal */}
            <MenuModal
                item={selectedItem}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
            />

            {/* Parallax Hero Section */}
            <header className="relative pt-40 pb-20 overflow-hidden bg-warm-sand/20">
                {/* Parallax Background Image */}
                <div className="absolute inset-0 z-0 opacity-10 select-none">
                    <Image
                        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop"
                        alt="Background Pattern"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-[#145B57] text-xs font-bold uppercase tracking-wider mb-2 animate-in fade-in zoom-in duration-500">
                        Fresh From Kitchen
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight font-poppins drop-shadow-md">
                        Our Delicious <span className="text-[#145B57] underline decoration-wavy decoration-teal-200 underline-offset-8 drop-shadow-sm">Menu</span>
                    </h1>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
                        Explore our wide range of organic, healthy, and fresh meals prepared with love by our expert chefs.
                    </p>
                </div>
            </header>

            {/* Category Filter (Sticky) */}
            <div className="sticky top-[100px] z-40 bg-[#FFFBF2]/95 backdrop-blur-sm border-b border-zinc-100 shadow-sm transition-all duration-300 w-full">
                <div className="w-full px-4 md:px-8 lg:px-12 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-6">
                        {/* Left: Filter Toggles */}
                        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar flex-1 pb-1 mask-fade-right">
                            <button
                                onClick={() => setActiveCategory("All Items")}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all text-sm md:text-base ${activeCategory === "All Items"
                                    ? "bg-[#145B57] text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transform translate-y-[1px]"
                                    : "bg-white border-b-2 border-zinc-200 text-zinc-600 hover:border-[#145B57] hover:text-[#145B57] hover:-translate-y-[1px] shadow-sm hover:shadow-md"
                                    }`}
                            >
                                <ChefHat className="w-4 h-4" />
                                All Items
                            </button>

                            {categories.map((category) => (
                                <button
                                    key={category._id}
                                    onClick={() => setActiveCategory(category.title)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all text-sm md:text-base ${activeCategory === category.title
                                        ? "bg-[#145B57] text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transform translate-y-[1px]"
                                        : "bg-white border-b-2 border-zinc-200 text-zinc-600 hover:border-[#145B57] hover:text-[#145B57] hover:-translate-y-[1px] shadow-sm hover:shadow-md"
                                        }`}
                                >
                                    {getCategoryIcon(category.title)}
                                    {category.title}
                                </button>
                            ))}
                        </div>

                        {/* Right: Actions */}
                        <div className="hidden md:flex items-center gap-3 shrink-0 pl-6 border-l border-zinc-200 ml-auto">
                            {activeCategory !== "All Items" && (
                                <button
                                    onClick={() => setActiveCategory("All Items")}
                                    className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors"
                                >
                                    Clear All
                                </button>
                            )}
                            <button className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-800 transition-colors shadow-sm">
                                <span>Filters</span>
                                <span className="bg-zinc-700 text-[10px] px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                                    {activeCategory === "All Items" ? uniqueItems.length : displayedItems.length}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Grid */}
            <section className="py-16 relative z-10 bg-white">
                <div className="max-w-[1920px] mx-auto px-6 md:px-10">
                    {displayedItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                            {displayedItems.map((item: any) => (
                                <MenuCard
                                    key={item._id}
                                    item={item}
                                    onClick={() => setSelectedItem(item)} // Pass handler
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-zinc-400">
                            <Utensils className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>No items found in this category.</p>
                        </div>
                    )}

                    {/* Load More (Visual only for now) */}
                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center gap-2 bg-white border-b-4 border-zinc-100 text-zinc-900 font-semibold px-8 py-4 rounded-xl hover:border-[#145B57] hover:text-[#145B57] transition-all shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 active:border-b-0 active:translate-y-1 group">
                            <span>Load More Items</span>
                            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
