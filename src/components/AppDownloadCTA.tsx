import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface AppDownloadCTAProps {
    ctaData?: {
        title?: string;
        subtitle?: string;
        backgroundImage?: string;
        primaryCta?: { label?: string; url?: string };
        secondaryCta?: { label?: string; url?: string };
    };
}

export function AppDownloadCTA({ ctaData }: AppDownloadCTAProps) {
    // using the existing image URL as default fallback
    const defaultBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-LhJKdKh1D38aStliQxZJylPplCRlVEScIIGYJD6yTH0xGNWDphmFcV9Vrj58n_vbjBLxtCG2b2C6iEMV80Sxg4Et4HPH-fVFRehpNB-udxFBtFCQfFTweRjYxnxWEXDd7-EcboKxTLUZJGr2W8DafFGBkMjkuP9RWc6q0o3Zn6a4Lla8HdsRV3B4GtbpeHshUjrAyp22xjiehOXhRVpR8CMx_UEBsswTelaCFcMGz9QzWEpOSXh6yhX7j5rcBXokOE-fF2ds3lXG";
    const defaultOrderUrl = "https://order.toasttab.com/online/buddas-hawaiian-bbq-pleasant-grove-pg-123-state-st";

    const bgImageUrl = ctaData?.backgroundImage || defaultBg;
    const title = ctaData?.title || "Ready for Aloha?";
    const subtitle = ctaData?.subtitle || "Skip the wait. Order your favorite plate lunches and bakery treats online for quick pickup.";
    const primaryLabel = ctaData?.primaryCta?.label || "Order Online";
    const primaryUrl = ctaData?.primaryCta?.url || defaultOrderUrl;
    const secondaryLabel = ctaData?.secondaryCta?.label || "View Menu";
    const secondaryUrl = ctaData?.secondaryCta?.url || "/menu";

    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl isolate shadow-2xl"
                style={{
                    backgroundImage: `linear-gradient(rgba(90,58,31,0.7), rgba(90,58,31,0.85)), url(${bgImageUrl})`,
                    backgroundColor: '#5A3A1F',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Mobile-first padding: tight on distinct mobile, generous on desktop */}
                <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-24 lg:px-24 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0 space-y-6 md:space-y-8">
                        {/* Heading: Responsive scaling from 3xl to 6xl */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                            {title.includes('Aloha') ? (
                                <>
                                    {title.split('Aloha')[0]}Aloha{title.split('Aloha')[1]}<br />
                                    <span className="text-buddas-gold">We're Fired Up.</span>
                                </>
                            ) : title}
                        </h2>

                        {/* Body: Adjusted line height and sizing */}
                        <p className="text-base sm:text-lg text-gray-100 font-dm-sans leading-relaxed max-w-lg mx-auto md:mx-0">
                            {subtitle}
                        </p>

                        {/* Buttons: Stack vertically full-width on mobile, row on desktop */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <Link
                                href={primaryUrl}
                                target={primaryUrl.startsWith('http') ? "_blank" : undefined}
                                className="w-full sm:w-auto h-14 px-8 md:px-10 bg-buddas-teal hover:bg-buddas-teal/90 text-white rounded-lg font-dm-sans font-medium text-lg shadow-lg shadow-buddas-teal/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                {primaryLabel}
                                <ShoppingBag className="w-5 h-5" />
                            </Link>
                            <Link
                                href={secondaryUrl}
                                className="w-full sm:w-auto h-14 px-8 border-2 border-white/30 hover:bg-white/10 text-white rounded-lg font-dm-sans font-medium text-lg transition-all flex items-center justify-center"
                            >
                                {secondaryLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
