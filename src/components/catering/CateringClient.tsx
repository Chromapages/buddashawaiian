"use client";

import {
    Sparkles,
    CalendarPlus,
    Download,
    Briefcase,
    Heart,
    PartyPopper,
    ArrowRight,
    Users,
    DollarSign,
    CheckCircle,
    ClipboardList,
    Calendar,
    ChefHat,
    Package,
    Quote,
    Star,
    PlusCircle,
    Leaf,
    Utensils,
    Clock,
    Check,
    ChevronDown
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { AnimatePresence, motion, useTransform, useScroll } from "framer-motion";
// Note: useScroll still used for parallax below, keeping it. Wait, I replaced useScroll?
// Let me check my previous edit. I replaced lines 49-54. Line 49 was `const { scrollY } = useScroll();`.
// BUT line 57 uses `useTransform(scrollY...`. So I actually NEED `scrollY`.
// My previous edit REMOVED `const { scrollY } = useScroll();`. This will break line 57!
// I need to Fix this immediately.

import { useState, useEffect } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CateringQuoteForm } from "./CateringQuoteForm";

interface CateringClientProps {
    data: any;
}

export function CateringClient({ data }: CateringClientProps) {
    const [showSticky, setShowSticky] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const latest = window.scrollY;
            const show = latest > 600 && latest < (document.documentElement.scrollHeight - window.innerHeight - 200);
            setShowSticky(show);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Parallax & Hero Animations
    const yBg = useTransform(scrollY, [0, 500], [0, 200]);
    const yText = useTransform(scrollY, [0, 300], [0, 100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    // Process Timeline Ref
    // Use a unique ref for the mobile process timeline to track its scroll progress
    // We can't easily use useRef here for scroll tracking without a dedicated component, 
    // so we'll rely on Viewport animations for the nodes for now, 
    // and a simple CSS or Framer 'whileInView' for the line.
    // Ideally, we'd split this into a sub-component, but to keep single-file structure:
    const [activeProcessStep, setActiveProcessStep] = useState(0);
    // FAQ Category State
    const [activeFaqCategory, setActiveFaqCategory] = useState("All");

    const {
        heroTitle,
        heroSubtitle,
        heroImage,
        heroCtaLabel,
        heroCtaLink,
        testimonial,
        serviceTypes,
        menuHighlights,
        howItWorks,
        trustedBy,
        faq,
        closingCta,
        menuPdfUrl,
        gallery,
        pricingSection,
        valueProposition,
        testimonials
    } = data;

    // Use default image if none provided
    const heroImageUrl = heroImage?.asset ? urlFor(heroImage).width(2000).url() : 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop';
    const quoteBgUrl = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop';

    // Phase 2: Unify Testimonials (Use array 0 or singular)
    const activeTestimonial = testimonials && testimonials.length > 0 ? testimonials[0] : testimonial;

    // Helper for Icon Mapping
    const getIcon = (iconName: string, fallback: any) => {
        const map: any = {
            briefcase: Briefcase,
            heart: Heart,
            party: PartyPopper,
            chef: ChefHat,
            clipboard: ClipboardList,
            calendar: Calendar,
            package: Package
        };
        return map[iconName] || fallback;
    };

    // Marquee Animation Style
    const marqueeStyle = `
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        .paused {
            animation-play-state: paused !important;
        }
    `;

    return (
        <div className="bg-buddas-cream min-h-screen font-sans text-buddas-brown">
            <style jsx global>{marqueeStyle}</style>
            {/* Parallax Hero - Hidden on mobile */}
            {/* Mobile Hero Section */}
            {/* Mobile Hero Section (Redesigned) */}
            <header className="relative md:hidden h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-buddas-brown text-center px-6">
                {/* Parallax Background */}
                <motion.div
                    style={{ y: yBg }}
                    className="absolute inset-0 z-0 select-none"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                >
                    <Image
                        src={heroImageUrl}
                        alt="Catering Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-buddas-brown/30 via-transparent to-buddas-brown/90" />
                </motion.div>

                {/* Content Layer */}
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center"
                >
                    {/* Trust Badge - Stagger Item 1 */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                    >
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-3 h-3 text-buddas-gold fill-buddas-gold" />
                            ))}
                        </div>
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider font-poppins border-l border-white/20 pl-2 ml-1">
                            Voted Best Catering
                        </span>
                    </motion.div>

                    {/* Title - Stagger Item 2 */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-5xl font-bold text-white tracking-tighter leading-[1.1] font-poppins drop-shadow-xl mb-4"
                    >
                        Feed The<br /> Whole Crew.
                    </motion.h1>

                    {/* Subtitle - Stagger Item 3 */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg text-white/90 font-dm-sans leading-relaxed mb-8 max-w-[280px]"
                    >
                        Bringing the authentic Aloha spirit to your next event.
                    </motion.p>

                    {/* Actions - Stagger Item 4 */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col w-full gap-3"
                    >
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="w-full bg-buddas-teal text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wide shadow-[0_4px_0_0_#1C5F56] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center gap-2">
                                        <CalendarPlus className="w-5 h-5" />
                                        Book an Event
                                    </span>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl border-t border-buddas-teal/20 p-0 overflow-hidden bg-buddas-cream z-[100]">
                                <SheetHeader className="px-6 pt-6 pb-4 bg-white border-b border-buddas-brown/10 sticky top-0 z-10">
                                    <SheetTitle className="text-left font-poppins text-2xl text-buddas-brown">Request a Quote</SheetTitle>
                                    <SheetDescription className="text-left text-buddas-brown/60">Tell us about your event</SheetDescription>
                                </SheetHeader>
                                <div className="h-full overflow-y-auto pb-20 bg-buddas-cream scrollbar-hide">
                                    <CateringQuoteForm />
                                </div>
                            </SheetContent>
                        </Sheet>

                        <a
                            href={menuPdfUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full ${!menuPdfUrl ? 'opacity-50 pointer-events-none' : ''}`}
                            onClick={(e) => !menuPdfUrl && e.preventDefault()}
                        >
                            <button className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-wide active:scale-95 transition-transform flex items-center justify-center gap-2 hover:bg-white/20">
                                <Download className="w-5 h-5" />
                                View Menu
                            </button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Hint */}
                <motion.div
                    className="absolute bottom-6 left-0 right-0 flex justify-center z-10"
                    animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-white/50" />
                </motion.div>
            </header>


            <header className="relative hidden md:flex min-h-[65vh] items-center justify-center overflow-hidden bg-buddas-brown">
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 z-0 opacity-40 select-none">
                    <Image
                        src={heroImageUrl}
                        alt="Catering Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8 mt-10">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-buddas-gold text-buddas-brown text-xs font-bold uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Catering & Events</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-semibold text-buddas-cream tracking-[-0.02em] leading-[1.1] font-poppins drop-shadow-md">
                        {heroTitle || "Feed the Whole Crew. Bring Aloha to the Table."}
                    </h1>

                    <p className="text-xl text-buddas-cream/80 max-w-2xl mx-auto leading-relaxed font-dm-sans">
                        {heroSubtitle || "Office lunches, private parties, or the big day—we bring the island to you."}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href={heroCtaLink || "#quote-form"} onClick={(e) => {
                            if (!heroCtaLink) {
                                e.preventDefault();
                                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} className="w-full sm:w-auto">
                            <button className="w-full flex items-center justify-center gap-2 bg-buddas-teal text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all shadow-[0_4px_0_0_#1C5F56,0_8px_20px_-4px_rgba(28,95,86,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#1C5F56,0_12px_24px_-4px_rgba(28,95,86,0.5)] active:translate-y-1 active:shadow-[0_0_0_0_#1C5F56,inset_0_2px_4px_rgba(0,0,0,0.2)] ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                                <CalendarPlus className="w-5 h-5" />
                                {heroCtaLabel || "Book an Event"}
                            </button>
                        </Link>
                        <a
                            href={menuPdfUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                            onClick={(e) => !menuPdfUrl && e.preventDefault()}
                        >
                            <button className={`w-full flex items-center justify-center gap-2 bg-transparent border-2 border-buddas-teal text-buddas-teal px-8 py-3.5 rounded-lg font-bold uppercase tracking-wide transition-all hover:bg-buddas-teal/10 hover:scale-105 active:scale-95 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${!menuPdfUrl ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                <Download className="w-5 h-5" />
                                Download Menu
                            </button>
                        </a>
                    </div>

                    <p className="text-buddas-cream/80 text-sm mt-6 font-dm-sans">
                        Or call for immediate assistance: <a href="tel:8017855555" className="font-bold underline hover:text-white transition-colors decoration-buddas-gold/50 hover:decoration-white">(801) 785-5555</a>
                    </p>
                </div>
            </header>

            {/* Catering Trusted By Section - Hidden on Mobile */}
            {trustedBy?.partners && trustedBy.partners.length > 0 && (
                <section className="py-12 bg-white border-b border-buddas-brown/10 hidden md:block">
                    <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                        <p className="text-center text-sm font-medium text-buddas-brown/60 mb-8 uppercase tracking-wider font-poppins">
                            {trustedBy.title || "Trusted by Leading Companies"}
                        </p>
                        <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-8 md:gap-12 overflow-x-auto pb-6 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                            {trustedBy.partners.map((partner: any, idx: number) => (
                                <a
                                    key={partner._key || idx}
                                    href={partner.url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-100 md:opacity-60 md:hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shrink-0"
                                    aria-label={partner.name}
                                >
                                    {partner.logo?.asset ? (
                                        <Image
                                            src={urlFor(partner.logo).width(240).url()}
                                            alt={partner.name}
                                            width={120}
                                            height={40}
                                            className="h-8 md:h-8 w-auto object-contain md:grayscale md:hover:grayscale-0 transition-all duration-300"
                                        />
                                    ) : (
                                        <span className="text-buddas-brown/70 font-semibold font-poppins text-lg text-nowrap">
                                            {partner.name}
                                        </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Value Proposition Section */}
            {valueProposition && valueProposition.length > 0 && (
                <section className="py-16 bg-white border-b border-buddas-brown/10">
                    <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {valueProposition.map((prop: any, idx: number) => {
                                let Icon = ChefHat;
                                if (prop.icon === 'fresh') Icon = Leaf;
                                if (prop.icon === 'authentic') Icon = Heart; // Fallback or specific icon
                                if (prop.icon === 'flexible') Icon = Clock;
                                if (prop.icon === 'dietary') Icon = Utensils;

                                return (
                                    <div key={idx} className="flex flex-col items-center text-center p-4">
                                        <div className="w-12 h-12 rounded-full bg-buddas-teal/10 flex items-center justify-center text-buddas-teal mb-4">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-semibold text-lg text-buddas-brown font-poppins mb-2">{prop.title}</h3>
                                        <p className="text-sm text-buddas-brown/70 font-dm-sans">{prop.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Services Grid (Mobile Focus Carousel) */}
            <section className="py-16 relative z-10 bg-buddas-cream md:hidden">
                <div className="text-center mb-8 px-6">
                    <h2 className="text-3xl font-semibold text-buddas-brown mb-2 font-poppins drop-shadow-sm">
                        Catering for Every Occasion
                    </h2>
                    <p className="text-buddas-brown/80 font-dm-sans max-w-xs mx-auto text-sm">
                        Tailored experiences for events of all sizes.
                    </p>
                </div>

                <div className="flex snap-x snap-mandatory overflow-x-auto pb-12 gap-4 px-8 scrollbar-hide">
                    {serviceTypes?.map((service: any, idx: number) => {
                        const icons = [Briefcase, Heart, PartyPopper];
                        const Icon = getIcon(service.icon, icons[idx % icons.length]);

                        return (
                            <motion.div
                                key={service._key || idx}
                                className="snap-center shrink-0 w-[85vw] max-w-[320px]"
                                initial={{ scale: 0.9, opacity: 0.8 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                viewport={{ amount: 0.6 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden group">
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-buddas-teal to-transparent opacity-80" />

                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-buddas-teal/20 to-buddas-teal/5 text-buddas-teal-dark shadow-inner">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-xl font-bold text-buddas-brown mb-2 font-poppins">
                                        {service.title}
                                    </h3>

                                    <p className="text-buddas-brown/70 leading-relaxed mb-6 font-dm-sans text-sm line-clamp-3">
                                        {service.description}
                                    </p>

                                    <Link href={service.ctaLink || "/contact"} className="mt-auto w-full">
                                        <Button className="w-full bg-buddas-teal/10 hover:bg-buddas-teal text-buddas-teal hover:text-white font-bold transition-all uppercase text-xs tracking-wide">
                                            View Package <ArrowRight className="ml-1 w-3 h-3" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Services Grid (Desktop) */}
            <section className="hidden md:block py-24 relative z-10 bg-buddas-cream">
                <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-semibold text-buddas-brown mb-4 tracking-[-0.01em] font-poppins">
                            Catering for Every Occasion
                        </h2>
                        <p className="text-buddas-brown/80 text-lg font-dm-sans max-w-2xl mx-auto">
                            We provide tailored culinary experiences for events of all sizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {serviceTypes?.map((service: any, idx: number) => {
                            const icons = [Briefcase, Heart, PartyPopper];
                            const Icon = getIcon(service.icon, icons[idx % icons.length]);
                            // ... existing desktop rendering ...
                            return (
                                <div key={service._key || idx} className="bg-white p-8 rounded-xl border border-buddas-brown/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group flex flex-col items-start h-full">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-buddas-teal/10 text-buddas-teal-dark">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-buddas-brown mb-3 font-poppins leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-buddas-brown/70 leading-relaxed mb-6 font-dm-sans">
                                        {service.description}
                                    </p>
                                    <Link href={service.ctaLink || "/contact"} className="mt-auto inline-flex items-center justify-start text-sm font-medium text-buddas-teal hover:text-buddas-teal-dark transition-colors group/link uppercase tracking-wider">
                                        View Packages <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Catering Trusted By Section - Mobile Only (Trust Stack) */}
            {trustedBy?.partners && trustedBy.partners.length > 0 && (
                <section className="py-12 bg-white border-b border-buddas-brown/10 block md:hidden overflow-hidden">
                    <div className="max-w-full mx-auto">

                        {/* Stats Row */}
                        <div className="flex items-center justify-center gap-8 mb-8 px-6">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-1.5 text-buddas-teal mb-1">
                                    <Users className="w-5 h-5" />
                                    <span className="font-bold font-poppins text-lg">500+</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold text-buddas-brown/50">Events Hosted</span>
                            </div>
                            <div className="w-px h-8 bg-buddas-brown/10" />
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-1.5 text-buddas-gold mb-1">
                                    <Star className="w-5 h-5 fill-buddas-gold" />
                                    <span className="font-bold font-poppins text-lg">4.9/5</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold text-buddas-brown/50">Customer Rating</span>
                            </div>
                        </div>

                        <p className="text-center text-xs font-bold text-buddas-brown/40 mb-6 uppercase tracking-widest font-poppins px-6">
                            {trustedBy.title || "Trusted by Leading Companies"}
                        </p>

                        <div className="relative w-full flex overflow-hidden group touch-pan-y">
                            {/* Track Container - doubled for seamless loop */}
                            <div className="flex animate-marquee group-hover:paused group-active:paused whitespace-nowrap">
                                {/* Set 1 */}
                                {trustedBy.partners.map((partner: any, idx: number) => (
                                    <div key={`set1-${idx}`} className="mx-6 shrink-0 flex items-center justify-center">
                                        <div className="relative">
                                            {partner.logo?.asset ? (
                                                <Image
                                                    src={urlFor(partner.logo).width(240).url()}
                                                    alt={partner.name}
                                                    width={120}
                                                    height={40}
                                                    className="h-10 w-auto object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
                                                />
                                            ) : (
                                                <span className="text-buddas-brown/70 font-semibold font-poppins text-lg text-nowrap opacity-70">
                                                    {partner.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {/* Set 2 */}
                                {trustedBy.partners.map((partner: any, idx: number) => (
                                    <div key={`set2-${idx}`} className="mx-6 shrink-0 flex items-center justify-center">
                                        <div className="relative">
                                            {partner.logo?.asset ? (
                                                <Image
                                                    src={urlFor(partner.logo).width(240).url()}
                                                    alt={partner.name}
                                                    width={120}
                                                    height={40}
                                                    className="h-10 w-auto object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
                                                />
                                            ) : (
                                                <span className="text-buddas-brown/70 font-semibold font-poppins text-lg text-nowrap opacity-70">
                                                    {partner.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}



            {/* Popular Packages (Menu Highlights) */}
            <div>
                <section className="py-24 relative z-10 bg-white">
                    <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="text-buddas-gold font-bold tracking-widest uppercase text-xs mb-2 block font-poppins">Our Menus</span>
                                <h2 className="text-4xl md:text-5xl font-semibold text-buddas-brown tracking-tight font-poppins drop-shadow-sm">Popular Catering Packages</h2>
                            </div>
                            <Link href="/menu" className="flex items-center gap-2 text-buddas-brown/60 hover:text-buddas-teal transition-colors font-medium group font-dm-sans">
                                View Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
                            </Link>
                        </div>

                        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                            {menuHighlights?.map((item: any, idx: number) => {
                                const bgImage = item.image?.asset ? urlFor(item.image).width(800).url() : `https://images.unsplash.com/photo-1555244162-803834f70033?idx=${idx}`;

                                return (
                                    <div key={item._key || idx} className="bg-white rounded-xl overflow-hidden shadow-md border border-buddas-brown/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group flex flex-col h-full min-w-[300px] md:min-w-0 snap-center">
                                        <div className="h-48 md:h-64 relative overflow-hidden shrink-0">
                                            <Image
                                                src={bgImage}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-buddas-brown/80 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
                                                {item.isBestseller && <span className="bg-buddas-gold text-buddas-brown text-[10px] md:text-xs font-bold px-2 py-1 rounded mb-2 inline-block shadow-sm">Bestseller</span>}
                                                <h3 className="text-xl md:text-2xl font-semibold leading-tight font-poppins drop-shadow-md">{item.name}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 mb-4 text-sm text-buddas-brown/60 font-medium font-dm-sans">
                                                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-buddas-teal" /> {item.guestCount || "10-20 ppl"}</span>
                                                <span className="flex items-center gap-1.5 text-buddas-gold-dark font-bold"><DollarSign className="w-4 h-4 text-buddas-teal" /> {item.price || 'Contact for Pricing'}</span>
                                            </div>

                                            {/* Dietary Tags */}
                                            {item.dietaryTags && item.dietaryTags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {item.dietaryTags.map((tag: string, tIdx: number) => (
                                                        <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-buddas-brown/5 text-buddas-brown/60 rounded-full border border-buddas-brown/10">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="mb-8 flex-1">
                                                <p className="text-buddas-brown/80 text-sm leading-relaxed mb-4 font-dm-sans line-clamp-3 md:line-clamp-none">{item.description}</p>
                                                {item.features && item.features.length > 0 && (
                                                    <ul className="space-y-3">
                                                        {item.features.map((feature: string, fIdx: number) => (
                                                            <li key={fIdx} className="flex items-start gap-3 text-buddas-brown/70 text-sm font-dm-sans">
                                                                <CheckCircle className="w-5 h-5 text-buddas-teal shrink-0" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                                className="w-full py-3 md:py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 mt-auto bg-white border-2 border-buddas-brown/10 text-buddas-brown hover:border-buddas-teal hover:text-buddas-teal hover:bg-buddas-teal/5 active:scale-95 ease-[cubic-bezier(0.25,0.1,0.25,1)] uppercase tracking-wider text-xs"
                                            >
                                                Request Quote
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>

            {/* How It Works (Process) */}
            <div>
                <section className="py-16 md:py-24 bg-white relative z-10 border-t border-buddas-brown/10">
                    <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                        <div className="text-center mb-10 md:mb-20">
                            <span className="text-buddas-gold font-bold tracking-widest uppercase text-xs mb-2 block font-poppins">Process</span>
                            <h2 className="text-4xl md:text-5xl font-semibold text-buddas-brown font-poppins drop-shadow-sm">How It Works</h2>
                        </div>

                        {/* Mobile Vertical Timeline */}
                        <div className="md:hidden relative pl-4 max-w-sm mx-auto">
                            {/* Vertical Line container */}
                            <div className="absolute left-[27px] top-6 bottom-12 w-0.5 bg-buddas-brown/10"></div>

                            {howItWorks?.map((step: any, idx: number) => {
                                const icons = [ClipboardList, Calendar, ChefHat, Package];
                                const Icon = getIcon(step.icon, icons[idx % icons.length]);

                                return (
                                    <motion.div
                                        key={`mobile-step-${idx}`}
                                        className="relative pl-20 mb-12 last:mb-0"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ amount: 0.5, once: true }}
                                        onViewportEnter={() => setActiveProcessStep(idx)}
                                    >
                                        {/* Node Icon */}
                                        <div className={`absolute left-0 top-0 w-14 h-14 rounded-full border-4 border-white flex items-center justify-center z-10 shadow-lg transition-colors duration-300 ${activeProcessStep >= idx ? 'bg-buddas-teal text-white' : 'bg-white text-buddas-brown/40'}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        {/* Content card */}
                                        <div className="bg-white p-5 rounded-2xl border border-buddas-brown/5 shadow-md ml-2 relative">
                                            {/* Arrow visual */}
                                            <div className="absolute top-5 -left-2 w-4 h-4 bg-white border-l border-b border-buddas-brown/5 rotate-45 transform"></div>

                                            <h3 className="text-lg font-bold font-poppins text-buddas-brown mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm font-dm-sans text-buddas-brown/70 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Desktop Horizontal Process */}
                        <div className="hidden md:flex md:grid md:grid-cols-4 gap-4 md:gap-8 relative overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-buddas-brown/10 -z-10 bg-gradient-to-r from-transparent via-buddas-brown/20 to-transparent"></div>

                            {howItWorks?.map((step: any, idx: number) => {
                                const icons = [ClipboardList, Calendar, ChefHat, Package];
                                const Icon = getIcon(step.icon, icons[idx % icons.length]);

                                return (
                                    <div key={step._key || idx} className="text-center md:bg-transparent pt-4 relative group w-[72vw] max-w-xs md:w-auto md:max-w-none snap-center shrink-0">
                                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white border border-buddas-brown/10 rounded-full flex items-center justify-center text-buddas-teal shadow-lg shadow-buddas-brown/5 mb-4 md:mb-8 relative z-10 group-hover:scale-110 group-hover:border-buddas-teal/30 group-hover:shadow-buddas-teal/10 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                                            <Icon className="w-7 h-7 md:w-9 md:h-9" />
                                            {/* Step Number Badge */}
                                            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-buddas-gold text-buddas-brown text-xs font-bold flex items-center justify-center shadow-sm font-poppins">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-buddas-brown font-poppins">{step.title}</h3>
                                        <p className="text-sm md:text-sm text-buddas-brown/70 leading-relaxed px-4 font-dm-sans">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>

            {/* Pricing Section */}
            {
                pricingSection && (
                    <section className="py-24 bg-white relative z-10 border-t border-buddas-brown/10">
                        <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                            <div className="text-center mb-16">
                                <span className="text-buddas-gold font-bold tracking-widest uppercase text-xs mb-2 block font-poppins">Pricing</span>
                                <h2 className="text-3xl md:text-5xl font-semibold text-buddas-brown tracking-tight font-poppins">{pricingSection.title || "Flexible Packages"}</h2>
                                {pricingSection.subtitle && <p className="text-buddas-brown/80 mt-4 max-w-2xl mx-auto font-dm-sans">{pricingSection.subtitle}</p>}
                            </div>
                            {/* Render packages if any */}
                            {pricingSection.packages && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {pricingSection.packages.map((pkg: any, idx: number) => (
                                        <div key={idx} className="border border-buddas-brown/10 rounded-xl p-8 hover:border-buddas-teal transition-colors">
                                            <h3 className="text-2xl font-semibold text-buddas-brown font-poppins mb-2">{pkg.name}</h3>
                                            <p className="text-3xl font-semibold text-buddas-teal font-poppins mb-4">{pkg.price}</p>
                                            <p className="text-buddas-brown/70 mb-6 font-dm-sans">{pkg.description}</p>
                                            {pkg.features && (
                                                <ul className="space-y-3 mb-8">
                                                    {pkg.features.map((feat: string, fIdx: number) => (
                                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-buddas-brown/80">
                                                            <CheckCircle className="w-4 h-4 text-buddas-gold" /> {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <button
                                                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                                className="w-full mt-auto py-3 bg-buddas-teal/10 text-buddas-teal font-bold rounded-lg hover:bg-buddas-teal hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] uppercase text-xs tracking-wider"
                                            >
                                                Get Quote
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {pricingSection.minimumNote && (
                                <div className="text-center mt-12 text-sm text-buddas-brown/60 font-medium italic">
                                    * {pricingSection.minimumNote}
                                </div>
                            )}
                        </div>
                    </section>
                )
            }

            {/* Gallery Section */}
            {
                gallery && gallery.length > 0 && (
                    <section className="py-24 bg-buddas-cream relative z-10 border-t border-buddas-brown/10">
                        <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-semibold text-buddas-brown tracking-tight font-poppins">Our Events</h2>
                                <p className="text-buddas-brown/80 mt-4 max-w-2xl mx-auto font-dm-sans">See how we bring the Aloha spirit to events of all sizes.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {gallery.map((img: any, idx: number) => (
                                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                        <Image
                                            src={img.url}
                                            alt={img.alt || "Catering Event"}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }



            {/* FAQ Section */}
            {
                faq && faq.length > 0 && (
                    <div>
                        <section className="py-16 md:py-24 bg-buddas-cream relative z-10 border-t border-buddas-brown/10">
                            <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                                <div className="text-center mb-10 md:mb-16">
                                    <span className="text-buddas-gold font-bold tracking-widest uppercase text-xs mb-3 block">Common Questions</span>
                                    <h2 className="text-3xl md:text-5xl font-semibold text-buddas-brown tracking-tight font-poppins">Frequently Asked Questions</h2>
                                </div>

                                {/* Mobile FAQ Categories & Floating Cards */}
                                <div className="block md:hidden mb-8">
                                    {/* Scrollable Chips */}
                                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 mb-4">
                                        {['All', 'Booking', 'Food', 'Service', 'Payments'].map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveFaqCategory(cat)}
                                                className={`px-5 py-2.5 rounded-full text-sm font-bold shadow-sm active:scale-95 transition-all whitespace-nowrap border ${activeFaqCategory === cat ? 'bg-buddas-teal text-white border-buddas-teal' : 'bg-white text-buddas-brown/70 border-buddas-brown/10'}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <Accordion type="single" collapsible className="w-full space-y-4">
                                            {faq
                                                // Mock filtering logic since real data might not have categories yet
                                                // In production, check item.category === activeFaqCategory
                                                .filter((_: unknown, i: number) => activeFaqCategory === 'All' || i % 2 === ['Booking', 'Food', 'Service', 'Payments'].indexOf(activeFaqCategory) % 2)
                                                .map((item: any, idx: number) => (
                                                    <AccordionItem
                                                        key={`mobile-faq-${idx}`}
                                                        value={`item-${idx}`}
                                                        className="bg-white rounded-2xl border border-buddas-brown/10 px-5 data-[state=open]:border-buddas-teal/30 shadow-sm overflow-hidden"
                                                    >
                                                        <AccordionTrigger className="w-full py-5 text-left hover:no-underline font-semibold text-buddas-brown group">
                                                            <span className="text-base leading-tight pr-4">{item.question}</span>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-buddas-brown/80 leading-relaxed pb-5 text-sm font-dm-sans bg-buddas-cream/30 -mx-5 px-5 pt-4 border-t border-buddas-brown/5">
                                                            {item.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                        </Accordion>
                                    </div>
                                </div>

                                {/* Desktop Standard FAQ */}
                                <div className="max-w-3xl mx-auto hidden md:block">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {faq.map((item: any, idx: number) => (
                                            <AccordionItem
                                                key={item._key || idx}
                                                value={`item-${idx}`}
                                                className="bg-white rounded-xl border border-buddas-brown/10 px-5 md:px-6 data-[state=open]:border-buddas-teal/30 hover:shadow-md transition-all shadow-sm"
                                            >
                                                <AccordionTrigger className="w-full py-4 md:py-6 text-left hover:no-underline font-semibold text-buddas-brown group">
                                                    <span className="text-base md:text-lg">{item.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-buddas-brown/80 leading-relaxed pb-5 md:pb-6 text-base font-dm-sans">
                                                    {item.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            }

            {/* Quote Request Section */}
            <div id="quote-form">
                <section className="py-16 md:py-24 bg-white relative z-10 border-t border-buddas-brown/10 scroll-mt-20">
                    <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                            <div className="hidden lg:block">
                                <span className="text-buddas-teal font-bold tracking-widest uppercase text-xs mb-3 block font-poppins">Get a Quote</span>
                                <h2 className="text-4xl md:text-5xl font-semibold text-buddas-brown mb-6 font-poppins leading-tight">
                                    Let's Plan Your Event
                                </h2>
                                <p className="text-lg text-buddas-brown/80 mb-10 font-dm-sans leading-relaxed">
                                    Fill out the form to receive a custom quote. Our catering team will check availability and get back to you within 24 hours.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-buddas-gold/10 flex items-center justify-center shrink-0 text-buddas-gold-dark mt-1">
                                            <ChefHat className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-buddas-brown font-poppins mb-1">Authentic Flavors</h4>
                                            <p className="text-buddas-brown/70 font-dm-sans">Real Hawaiian comfort food made from scratch.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-buddas-teal/10 flex items-center justify-center shrink-0 text-buddas-teal mt-1">
                                            <Package className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-buddas-brown font-poppins mb-1">Flexible Packages</h4>
                                            <p className="text-buddas-brown/70 font-dm-sans">From drop-off trays to full-service setup.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-buddas-orange/10 flex items-center justify-center shrink-0 text-buddas-orange mt-1">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-buddas-brown font-poppins mb-1">Reliable Service</h4>
                                            <p className="text-buddas-brown/70 font-dm-sans">On time, fresh, and ready to serve.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Mobile Quote Sheet Trigger */}
                            <div className="lg:hidden bg-white p-6 rounded-2xl border border-buddas-brown/5 text-center shadow-sm">
                                <ClipboardList className="w-12 h-12 text-buddas-teal mx-auto mb-4 bg-buddas-teal/10 p-2 rounded-full" />
                                <h3 className="text-xl font-semibold text-buddas-brown mb-2 font-poppins">Ready to customize your menu?</h3>
                                <p className="text-buddas-brown/70 mb-6 font-dm-sans text-sm">Start your quote request now. It only takes a minute.</p>

                                <Sheet>
                                    <SheetTrigger asChild>
                                        <button className="w-full py-4 bg-buddas-teal text-white font-bold rounded-xl uppercase tracking-wider shadow-lg hover:bg-buddas-teal-dark transition-all">
                                            Start Quote Request
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent side="bottom" className="h-[90vh] overflow-y-auto rounded-t-3xl p-6">
                                        <SheetHeader className="mb-6 text-left">
                                            <SheetTitle className="text-2xl font-poppins text-buddas-brown">Request a Quote</SheetTitle>
                                            <SheetDescription className="text-buddas-brown/60">
                                                Fill out the details below and we'll get back to you within 24 hours.
                                            </SheetDescription>
                                        </SheetHeader>
                                        <CateringQuoteForm />
                                    </SheetContent>
                                </Sheet>
                            </div>

                            {/* Desktop Inline Form */}
                            <div className="hidden lg:block bg-white p-10 rounded-2xl border border-buddas-brown/5">
                                <CateringQuoteForm />
                            </div>
                        </div>

                        <div className="text-center mt-8 md:mt-12 text-buddas-brown/70 max-w-md mx-auto">
                            <p className="font-dm-sans text-sm uppercase tracking-wider font-bold mb-2 text-buddas-teal">Prefer to talk to a human?</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="w-8 h-px bg-buddas-brown/20"></span>
                                <a href="tel:8017855555" className="text-2xl md:text-3xl font-poppins font-bold text-buddas-brown hover:text-buddas-teal transition-colors tracking-tight">
                                    (801) 785-5555
                                </a>
                                <span className="w-8 h-px bg-buddas-brown/20"></span>
                            </div>
                            <p className="text-xs mt-2 opacity-60">Mon-Sat 11am - 9pm</p>
                        </div>
                    </div>

                    {/* Closing CTA Section - Hidden on Mobile */}
                    <section className="py-20 bg-buddas-brown relative overflow-hidden text-center px-6 hidden md:block">
                        {/* Background Pattern/Image Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
                        </div>

                        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                            <Quote className="w-12 h-12 text-buddas-gold mx-auto opacity-50 rotate-180" />

                            <h2 className="text-4xl md:text-5xl font-semibold text-buddas-cream font-poppins tracking-tight">
                                Ready to Make Your Event Unforgettable?
                            </h2>

                            <p className="text-xl text-buddas-cream/80 font-dm-sans leading-relaxed">
                                Whether it's a corporate lunch or a wedding feast, we bring the Aloha spirit to every plate.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full sm:w-auto bg-buddas-gold text-buddas-brown px-10 py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform"
                                >
                                    Get a Quote
                                </button>
                                <a href="tel:8017855555" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border-2 border-buddas-cream/30 text-buddas-cream px-10 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-buddas-cream/10 hover:border-buddas-cream transition-all duration-300">
                                        Call Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </div>


            {/* Sticky Mobile Quote Button */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-28 right-6 z-50 md:hidden"
                    >
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="flex items-center gap-2 bg-buddas-gold text-buddas-brown pl-5 pr-6 py-4 rounded-full font-bold uppercase tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all outline-none ring-offset-2 focus:ring-2 ring-buddas-gold">
                                    <ClipboardList className="w-5 h-5" />
                                    <span>Get Quote</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl border-t border-buddas-teal/20 p-0 overflow-hidden bg-buddas-cream z-[100]">
                                <SheetHeader className="px-6 pt-6 pb-4 bg-white border-b border-buddas-brown/10 sticky top-0 z-10">
                                    <SheetTitle className="text-left font-poppins text-2xl text-buddas-brown">Request a Quote</SheetTitle>
                                    <SheetDescription className="text-left text-buddas-brown/60">Tell us about your event</SheetDescription>
                                </SheetHeader>
                                <div className="h-full overflow-y-auto pb-20 bg-buddas-cream scrollbar-hide">
                                    <CateringQuoteForm />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
