"use client";

import { Copy, Star, ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Promotion {
    _id: string;
    title: string;
    badge?: string;
    description?: string;
    promoCode?: string;
    ctaLabel?: string;
    ctaLink?: string;
    type: "code" | "rewards" | "product"; // To distinguish card layouts
    image?: string;
}

interface PromoBannerProps {
    promotions?: Promotion[];
}

const defaultPromotions: Promotion[] = [
    {
        _id: "default-1",
        title: "Lunch Rush Special",
        description: "Escape to the islands on your lunch break. Enjoy 20% off all Bento Boxes until 2 PM.",
        promoCode: "ALOHA20",
        type: "code"
    },
    {
        _id: "default-2",
        title: "Double Points Day",
        badge: "Rewards Member",
        description: "Earn 2x points on every dollar spent today. Treat yourself to something sweet!",
        ctaLabel: "View Rewards",
        ctaLink: "/rewards",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQazFj7kzuFoMECfaqScamrhL8xNCxlAzff1rntZnW5w6SmRtRwPAHlps_i9fwQOhDRgwdEG-lxUKnOCivKgn-NqEp3FXkaMKmFnGY-aUQX8ktUeEHrfAIjdGrBpWDfhnLEg-tNJ_i2FoBczJpJIarcPnFGBoNhPA9AojZ7KAQPBZnn-JyZjy9q2itjR0i0bTBNmJBvhtASEGv97FloCsGYpt-nGXosH-Le6kspOLl0jBK8tu5XLx0SZPKTSNKBC5cdnkwiatfRBGG",
        type: "rewards"
    },
    {
        _id: "default-3",
        title: "Try the Katsu Chicken",
        badge: "New Arrival",
        description: "Crispy panko-breaded chicken served island-style with our signature mac salad and rice.",
        ctaLabel: "Order Now",
        ctaLink: "/menu",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXQ5GRIA2p2sGdUi1oAVh3JEvHAwDK_gOjEahoIZDThW0BPI73goVE2NYkZXQLsF_iWj01vxMDJpEO-ibnLK69C66xmoaIFNTpbr0ytl-lo2ZqOzpcz1e7sb3TAPfhWMPisNe7e2uppIyGWejtJToZp5oGyj4WtLi7R9jA7rj9ezZMrYRtkB0XmWPxX5on6NRheu0-1Yuey9pBSEpFptuqI3lp8y3G3DPaJP01Fa1LXjdwS6SihwrouBlcxcfo3ein8KSfVdY3iu_Y",
        type: "product"
    },
];

export function PromoBanner({ promotions }: PromoBannerProps) {
    // If we have Sanity promos, we would map them here, but for this specific redesign request, 
    // the user provided hardcoded content. We'll prioritize the default layout to match the prompt exactly.
    // In a real scenario, we might merge or map provided 'promotions' prop to this structure.

    // For now, using the defaults to ensure it matches the user's specific request "redesign ... to this"
    const displayPromos = defaultPromotions;

    return (
        <section className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 pt-12 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Code Promo */}
                <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                alt="Lunch Bento Box"
                                src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=800&auto=format&fit=crop"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute top-4 left-4 z-20">
                            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#E9C559]/90 backdrop-blur-md text-[#3A2F2B] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#E9C559]/50">
                                Expires in 2h
                            </div>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow bg-white">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-poppins)]">Lunch Rush Special</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Escape to the islands on your lunch break. Enjoy 20% off all Bento Boxes until 2 PM.</p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <div className="bg-[#E9C559]/10 rounded-xl p-4 flex items-center justify-between hover:bg-[#E9C559]/20 transition-colors cursor-pointer border border-[#E9C559]/20 group">
                                <div className="flex flex-col">
                                    <span className="text-xs text-[#3A2F2B]/70 font-bold uppercase tracking-wider mb-1">Use Code</span>
                                    <span className="text-[#3A2F2B] font-mono text-xl font-bold tracking-wide">ALOHA20</span>
                                </div>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#3A2F2B] shadow-sm hover:scale-110 transition-transform active:scale-95">
                                    <Copy className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Rewards Promo */}
                <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                alt="Sweet Treats"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQazFj7kzuFoMECfaqScamrhL8xNCxlAzff1rntZnW5w6SmRtRwPAHlps_i9fwQOhDRgwdEG-lxUKnOCivKgn-NqEp3FXkaMKmFnGY-aUQX8ktUeEHrfAIjdGrBpWDfhnLEg-tNJ_i2FoBczJpJIarcPnFGBoNhPA9AojZ7KAQPBZnn-JyZjy9q2itjR0i0bTBNmJBvhtASEGv97FloCsGYpt-nGXosH-Le6kspOLl0jBK8tu5XLx0SZPKTSNKBC5cdnkwiatfRBGG"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute top-4 left-4 z-20">
                            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#E9C559]/90 backdrop-blur-md text-[#3A2F2B] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#E9C559]/50">
                                <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                                Rewards Member
                            </div>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow bg-white">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-poppins)]">Double Points Day</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Earn 2x points on every dollar spent today. Treat yourself to something sweet!</p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <Link href="/rewards" className="w-full bg-[#E9C559] text-[#3A2F2B] font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#E9C559]/20 hover:bg-[#D4B040] transition-all flex items-center justify-center group-hover:gap-3 gap-2">
                                View Rewards
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 3: New Menu Item */}
                <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                alt="Chicken Katsu"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXQ5GRIA2p2sGdUi1oAVh3JEvHAwDK_gOjEahoIZDThW0BPI73goVE2NYkZXQLsF_iWj01vxMDJpEO-ibnLK69C66xmoaIFNTpbr0ytl-lo2ZqOzpcz1e7sb3TAPfhWMPisNe7e2uppIyGWejtJToZp5oGyj4WtLi7R9jA7rj9ezZMrYRtkB0XmWPxX5on6NRheu0-1Yuey9pBSEpFptuqI3lp8y3G3DPaJP01Fa1LXjdwS6SihwrouBlcxcfo3ein8KSfVdY3iu_Y"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute top-4 left-4 z-20">
                            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#E9C559]/90 backdrop-blur-md text-[#3A2F2B] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#E9C559]/50">
                                New Arrival
                            </div>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow bg-white">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-poppins)]">Try the Katsu Chicken</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Crispy panko-breaded chicken served island-style with our signature mac salad and rice.</p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <button className="w-full bg-[#E9C559] text-[#3A2F2B] font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#E9C559]/20 hover:bg-[#D4B040] transition-all flex items-center justify-center group-hover:gap-3 gap-2">
                                Order Now
                                <ShoppingBag className="w-4 h-4 transition-transform group-hover:-rotate-12" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
