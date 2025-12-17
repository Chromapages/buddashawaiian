


import { PromoBanner } from "./PromoBanner";
import { TrustedBy } from "./TrustedBy";
import { NewArrivalsSlideshow } from "./NewArrivalsSlideshow";

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





            {/* New Arrivals Slideshow (Full Width) */}
            <NewArrivalsSlideshow items={newItems} />

        </div>
    );
}
