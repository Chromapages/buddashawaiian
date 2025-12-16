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
    Quote
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface CateringClientProps {
    data: any;
}

export function CateringClient({ data }: CateringClientProps) {
    const {
        heroTitle,
        heroSubtitle,
        heroImage,
        heroCtaLabel,
        heroCtaLink,
        serviceTypes,
        menuHighlights,
        howItWorks
    } = data;

    // Use default image if none provided
    const heroImageUrl = heroImage?.asset ? urlFor(heroImage).width(2000).url() : 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop';
    const quoteBgUrl = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop';

    return (
        <div className="bg-white min-h-screen font-sans text-zinc-900">
            {/* Parallax Hero */}
            <header className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-zinc-900">
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

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-buddas-orange/30 text-buddas-orange text-xs font-bold uppercase tracking-wider shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-4 h-4" />
                        <span>Premium Events & Weddings</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 font-poppins">
                        {heroTitle || "Exquisite Catering for Unforgettable Moments"}
                    </h1>

                    <p className="text-xl text-buddas-cream/80 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {heroSubtitle || "From corporate luncheons to grand weddings, we bring culinary excellence to your table."}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <Link href={heroCtaLink || "/contact"} className="w-full sm:w-auto">
                            <button className="w-full flex items-center justify-center gap-2 bg-buddas-orange text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_0_0_#BC9D40,0_8px_20px_-4px_rgba(233,197,89,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#BC9D40,0_12px_24px_-4px_rgba(233,197,89,0.5)] active:translate-y-1 active:shadow-[0_0_0_0_#BC9D40,inset_0_2px_4px_rgba(0,0,0,0.2)]">
                                <CalendarPlus className="w-5 h-5" />
                                {heroCtaLabel || "Book an Event"}
                            </button>
                        </Link>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)] active:scale-95">
                            <Download className="w-5 h-5" />
                            Download Menu
                        </button>
                    </div>
                </div>
            </header>

            {/* Trusted Partners (Logos) */}
            <section className="border-y border-zinc-200/60 bg-white/50 backdrop-blur-sm relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8">Trusted by World Class Companies</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60">
                        {/* Using text placeholders to be safe, styling them to look logo-esque */}
                        {['Google', 'Netflix', 'Meta', 'Spotify', 'Airbnb', 'Uber'].map((brand) => (
                            <span key={brand} className="text-xl md:text-2xl font-bold text-zinc-300 hover:text-zinc-800 transition-colors cursor-default select-none font-poppins">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight font-poppins">Catering for Every Occasion</h2>
                        <p className="text-zinc-500 text-lg">We provide tailored culinary experiences for events of all sizes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceTypes?.map((service: any, idx: number) => {
                            // Icon mapping based on index or title logic could go here, for now cycling generic ones if not matched
                            const icons = [Briefcase, Heart, PartyPopper];
                            const Icon = icons[idx % icons.length];

                            // Color themes
                            const themes = [
                                { bg: 'bg-orange-50', text: 'text-buddas-orange' },
                                { bg: 'bg-pink-50', text: 'text-pink-500' },
                                { bg: 'bg-blue-50', text: 'text-blue-500' },
                            ];
                            const theme = themes[idx % themes.length];

                            return (
                                <div key={service._key || idx} className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 group">
                                    <div className={`w-14 h-14 ${theme.bg} rounded-2xl flex items-center justify-center ${theme.text} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-buddas-dark mb-3 font-poppins">{service.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed mb-6 min-h-[4.5rem]">
                                        {service.description}
                                    </p>
                                    <Link href="#" className="inline-flex items-center text-sm font-semibold text-buddas-dark hover:text-buddas-orange transition-colors group/link">
                                        View Packages <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Parallax Break Section */}
            <section className="py-32 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={quoteBgUrl}
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    <Quote className="w-12 h-12 text-orange-400 mb-6 opacity-80 mx-auto fill-orange-400/20" />
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8 font-poppins drop-shadow-lg">
                        "The food was absolutely spectacular. Buddas turned our corporate retreat into a culinary adventure we will never forget."
                    </h3>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur overflow-hidden relative shadow-lg">
                            {/* Hardcoded avatar placeholder */}
                            <div className="w-full h-full bg-zinc-300 flex items-center justify-center text-xs font-bold text-zinc-600">DM</div>
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white drop-shadow-md">David Miller</p>
                            <p className="text-sm text-white/70 drop-shadow-sm">CEO, TechStart Inc.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Packages (Menu Highlights) */}
            <section className="py-24 relative z-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-buddas-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Menus</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-buddas-dark tracking-tight font-poppins">Popular Catering Packages</h2>
                        </div>
                        <button className="flex items-center gap-2 text-zinc-500 hover:text-buddas-orange transition-colors font-medium group">
                            View All Menus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menuHighlights?.map((item: any, idx: number) => {
                            const bgImage = item.image?.asset ? urlFor(item.image).width(800).url() : `https://images.unsplash.com/photo-1555244162-803834f70033?idx=${idx}`;

                            return (
                                <div key={item._key || idx} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-zinc-100 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                                    <div className="h-64 relative overflow-hidden shrink-0">
                                        <Image
                                            src={bgImage}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 text-white right-6">
                                            {idx === 0 && <span className="bg-buddas-orange text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block shadow-lg">Bestseller</span>}
                                            <h3 className="text-2xl font-bold leading-tight font-poppins drop-shadow-md">{item.name}</h3>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 mb-6 text-sm text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 10-50 ppl</span>
                                            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> {item.price || '$$'}</span>
                                        </div>
                                        <div className="mb-8 flex-1">
                                            <p className="text-zinc-600/90 text-sm leading-relaxed mb-4">{item.description}</p>
                                            {/* Fake list items if needed for design visuals, or omit */}
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 text-zinc-600 text-sm">
                                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                                    <span>Premium Ingredients</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-zinc-600 text-sm">
                                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                                    <span>Customizable Options</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mt-auto bg-white border-2 border-zinc-100 text-zinc-600 hover:border-buddas-orange hover:text-buddas-orange hover:shadow-md active:scale-95">
                                            Select Package
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-orange-50/50 relative z-10 border-t border-orange-100/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-buddas-orange font-bold tracking-widest uppercase text-xs mb-2 block">Process</span>
                        <h2 className="text-4xl font-bold text-buddas-dark font-poppins">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-zinc-200 -z-10 bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

                        {howItWorks?.map((step: any, idx: number) => {
                            const icons = [ClipboardList, Calendar, ChefHat, Package];
                            const Icon = icons[idx % icons.length];

                            return (
                                <div key={step._key || idx} className="text-center md:bg-transparent pt-4 relative">
                                    <div className="w-20 h-20 mx-auto bg-white border border-zinc-100 rounded-full flex items-center justify-center text-buddas-orange shadow-xl shadow-buddas-orange/10 mb-8 relative z-10 group hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-9 h-9" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-buddas-dark font-poppins">{step.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed px-4">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
