import { ArrowRight, CalendarDays, Utensils } from "lucide-react";
import Link from "next/link";

interface CateringData {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: any;
    introduction?: string;
    heroCtaLabel?: string;
    heroCtaLink?: string;
    // Events
    eventsTitle?: string;
    eventsDescription?: string;
    eventsImage?: any;
    eventsCtaLabel?: string;
    eventsCtaLink?: string;
    serviceTypes?: { title: string; description?: string; image?: any }[];
}

interface NewCateringSectionProps {
    cateringData?: CateringData;
}

export function NewCateringSection({ cateringData }: NewCateringSectionProps) {
    // Catering Data
    const cateringTitle = cateringData?.heroTitle || "Feed the Whole Crew";
    const cateringDesc = cateringData?.introduction || "From office lunches to wedding receptions, bring the aloha spirit to your next gathering with our party pans.";
    const cateringCta = cateringData?.heroCtaLabel || "View Catering Menu";
    const cateringLink = cateringData?.heroCtaLink || "/catering";
    const cateringImage = cateringData?.heroImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuDQYJaoiTwhP4q_kxm7Du0BZuLRFyXPm8njF-PV_45BPyM1b2fMYTKjGLNXNwQkARvnpfxi3rE4ptNL1mTbZOJkootLsYKEH_yPTWB-FLiWPeZXA53mkJzc5affMKozg3CMXQhxUnVnnx12Em8HjqIz6flXwKoiYbEBw-JGIBgP7mHq0rjCZ4ZCSiF8pJJIqbWSO9JQa14hzj1K53XxTxh4_pcw8_XoQmgXFiVWoBo9AsrMqVcl7_mEMdsuB2xG--fM7uRPJUwT7nxs";

    // Events Data
    const eventsTitle = cateringData?.eventsTitle || "Celebrate with Us";
    const eventsDesc = cateringData?.eventsDescription || "Reserve our dining area or outdoor patio for your special occasion. We handle the food, you enjoy the party.";
    const eventsCta = cateringData?.eventsCtaLabel || "Book an Event";
    const eventsLink = cateringData?.eventsCtaLink || "/benefit-nights"; // Linking to events/benefit-nights
    const eventsImage = cateringData?.eventsImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuB-LhJKdKh1D38aStliQxZJylPplCRlVEScIIGYJD6yTH0xGNWDphmFcV9Vrj58n_vbjBLxtCG2b2C6iEMV80Sxg4Et4HPH-fVFRehpNB-udxFBtFCQfFTweRjYxnxWEXDd7-EcboKxTLUZJGr2W8DafFGBkMjkuP9RWc6q0o3Zn6a4Lla8HdsRV3B4GtbpeHshUjrAyp22xjiehOXhRVpR8CMx_UEBsswTelaCFcMGz9QzWEpOSXh6yhX7j5rcBXokOE-fF2ds3lXG";

    return (
        <section className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 2xl:py-24" id="catering-events">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10">

                {/* Catering Card */}
                <div className="group relative overflow-hidden rounded-3xl min-h-[400px] flex items-end p-8">
                    {/* Background Image / Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%), url("${cateringImage}")`
                        }}
                    ></div>

                    <div className="relative z-10 text-white w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600 rounded-full text-xs font-bold mb-4 shadow-lg shadow-orange-900/20">
                            <Utensils className="w-4 h-4" />
                            Catering
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-white font-[family-name:var(--font-poppins)]">{cateringTitle}</h3>
                        <p className="text-gray-200 mb-6 max-w-sm text-sm md:text-base leading-relaxed">
                            {cateringDesc}
                        </p>
                        <Link
                            href={cateringLink}
                            className="w-full sm:w-auto h-12 px-6 bg-white text-zinc-900 hover:bg-gray-100 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            {cateringCta}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Events Card */}
                <div className="group relative overflow-hidden rounded-3xl min-h-[400px] flex items-end p-8 bg-zinc-900">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-overlay"
                        style={{ backgroundImage: `url("${eventsImage}")` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>

                    <div className="relative z-10 text-white w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold mb-4 border border-white/20">
                            <CalendarDays className="w-4 h-4" />
                            Private Events
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-white font-[family-name:var(--font-poppins)]">{eventsTitle}</h3>
                        <p className="text-gray-300 mb-6 max-w-sm text-sm md:text-base leading-relaxed">
                            {eventsDesc}
                        </p>
                        <Link
                            href={eventsLink}
                            className="w-full sm:w-auto h-12 px-6 bg-orange-600 text-white hover:bg-orange-700 rounded-xl font-bold transition-colors shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2"
                        >
                            {eventsCta}
                            <CalendarDays className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
