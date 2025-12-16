import { MenuItemSection } from "./MenuItemSection";

import { FeaturedMenuGrid } from "./FeaturedMenuGrid";
import { PromoBanner } from "./PromoBanner";
import { TrustedBy } from "./TrustedBy";

interface MenuOffersSectionProps {
    featuredItems: any[];
    popularItems: any[];
    newItems: any[];
    promotions?: any[];
    trustedByData?: any;
}

export function MenuOffersSection({ featuredItems, popularItems, newItems, promotions, trustedByData }: MenuOffersSectionProps) {
    return (
        <div className="bg-white pb-24" id="menu-offers">

            {/* Trusted By Section (New) */}
            <TrustedBy trustedByData={trustedByData} />

            {/* Part A: Promos & Limited-Time Offers */}
            <PromoBanner promotions={promotions} />



            {/* Main Menu Highlights Section */}
            <section className="py-20 md:py-32 bg-white relative">
                {/* Main Section Header */}
                <div className="text-center mb-16 md:mb-24 px-6">
                    <span className="inline-block py-2 px-4 rounded-full bg-[#145B57]/10 text-[#145B57] text-xs font-bold uppercase tracking-widest mb-4 border border-[#145B57]/20 shadow-sm backdrop-blur-sm">
                        From Our Kitchen
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight font-poppins mb-6 drop-shadow-sm">
                        Taste the <span className="text-[#145B57] drop-shadow-[0_2px_2px_rgba(20,91,87,0.1)]">Aloha</span> Spirit
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        Handcrafted with fresh ingredients and island love. Discover our local favorites and new creations.
                    </p>
                </div>

                {/* Featured Favorites (Carousel) */}
                <div className="mb-20 md:mb-32">
                    <FeaturedMenuGrid items={featuredItems} />
                </div>

                {/* Content Areas (Popular & New) */}
                <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 space-y-32">
                    {/* Popular Items */}
                    <MenuItemSection
                        id="popular"
                        title="Most Popular"
                        subtitle="Customer favorites you have to try."
                        items={popularItems}
                    />

                    {/* New Arrivals */}
                    <MenuItemSection
                        id="new"
                        title="New Arrivals"
                        subtitle="Fresh additions to our menu."
                        items={newItems}
                    />
                </div>
            </section>

        </div>
    );
}
