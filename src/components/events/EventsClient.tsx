"use client";

import {
    Sparkles,
    CalendarPlus,
    Mouse,
    CheckCircle,
    Heart,
    Briefcase,
    GlassWater,
    ChefHat,
    HandPlatter,
    Armchair,
    Wine,
    Leaf,
    MapPin,
    Phone,
    Mail
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface EventsClientProps {
    data: any;
}

export function EventsClient({ data }: EventsClientProps) {
    const {
        heroTitle,
        heroSubtitle,
        heroImage,
        heroCtaLabel,
        heroCtaLink
    } = data;

    // Use Sanity image if available, else fallback to the design's specific Unsplash image
    const heroImageUrl = heroImage?.asset ? urlFor(heroImage).width(2000).url() : 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop';

    // Parallax background for immersive break
    const breakBgUrl = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop';

    return (
        <div className="bg-white min-h-screen font-sans text-buddas-dark">
            {/* Parallax Hero Section */}
            <header className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-buddas-dark">
                {/* Parallax Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImageUrl}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-buddas-dark/40 backdrop-blur-[1px]"></div>
                </div>

                <AnimatedSection className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8 mt-10">
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        <span>Full Service Event Planning</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] font-poppins drop-shadow-lg">
                        {heroTitle || <>Events That <br /><span className="text-buddas-orange italic font-serif pr-2 drop-shadow-md">Taste</span> Extraordinary</>}
                    </h1>

                    <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        {heroSubtitle || "Whether it's an intimate gathering or a gala for thousands, we craft immersive culinary experiences tailored to your vision."}
                    </p>

                    <div className="pt-8">
                        <Link href={heroCtaLink || "/contact"}>
                            <button className="bg-buddas-orange text-white px-10 py-4 rounded-xl font-bold transition-all shadow-[0_4px_0_0_#BC9D40,0_8px_20px_-4px_rgba(233,197,89,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#BC9D40,0_12px_24px_-4px_rgba(233,197,89,0.5)] active:translate-y-1 active:shadow-[0_0_0_0_#BC9D40,inset_0_2px_4px_rgba(0,0,0,0.2)] flex items-center gap-2 mx-auto">
                                <CalendarPlus className="w-5 h-5" />
                                {heroCtaLabel || "Start Planning"}
                            </button>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                    <Mouse className="w-8 h-8" />
                </div>
            </header>

            <AnimatedSection delay={100}>
                <section className="border-b border-zinc-200/60 bg-white relative z-10">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-widest mb-10">Event Partners & Corporate Clients</p>
                        <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Simulating logos with text due to lack of lucide generic brand icons, 
                            in a real scenario we'd use SVGs or the simple-icons via Image */}
                            {['Google', 'Sony', 'Vimeo', 'Tesla', 'Pinterest', 'Uber'].map((brand) => (
                                <span key={brand} className="text-2xl font-black text-buddas-dark hover:text-buddas-orange transition-colors cursor-default select-none font-poppins">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <section className="py-24 relative z-10 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-20 text-center max-w-3xl mx-auto">
                            <span className="text-buddas-orange font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-buddas-dark tracking-tight mb-6 font-poppins">Designed for Every Occasion</h2>
                            <p className="text-zinc-500 text-lg">We don't just provide food; we provide an atmosphere. Choose the category that best fits your upcoming event.</p>
                        </div>

                        {/* Alternating Layout */}
                        <div className="space-y-24">

                            {/* Weddings */}
                            <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-buddas-brown/5 hover:-translate-y-2 transition-transform duration-500 order-1 md:order-1">
                                    <Image
                                        src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1200&auto=format&fit=crop"
                                        alt="Weddings"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-pink-500 shadow-lg">
                                        <Heart className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="order-2 md:order-2 space-y-6 md:pl-8">
                                    <h3 className="text-3xl font-bold text-buddas-dark font-poppins">Weddings & Galas</h3>
                                    <p className="text-zinc-500 leading-relaxed text-lg">
                                        From the rehearsal dinner to the reception, we create menus that reflect your love story. Our wedding specialists handle every detail, including linens, china, and table service.
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Custom Cake Design
                                        </li>
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Full Bar Service
                                        </li>
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            White Glove Service
                                        </li>
                                    </ul>
                                    <div className="pt-6">
                                        <button className="text-buddas-dark font-semibold border-b-2 border-buddas-dark pb-1 hover:text-buddas-orange hover:border-buddas-orange transition-colors">
                                            View Wedding Brochure
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Corporate */}
                            <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 space-y-6 md:pr-8">
                                    <h3 className="text-3xl font-bold text-buddas-dark font-poppins">Corporate Functions</h3>
                                    <p className="text-zinc-500 leading-relaxed text-lg">
                                        Fuel your team with nutritious, brain-boosting meals. We offer scalable solutions for conferences, board meetings, and company retreats with seamless logistics.
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Boxed Lunches & Buffets
                                        </li>
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Coffee & Break Stations
                                        </li>
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Brand-Themed Menus
                                        </li>
                                    </ul>
                                    <div className="pt-6">
                                        <button className="text-buddas-dark font-semibold border-b-2 border-buddas-dark pb-1 hover:text-buddas-orange hover:border-buddas-orange transition-colors">
                                            Download Corporate Kit
                                        </button>
                                    </div>
                                </div>
                                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-buddas-brown/5 hover:-translate-y-2 transition-transform duration-500 order-1 md:order-2">
                                    <Image
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
                                        alt="Corporate"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-blue-500 shadow-lg">
                                        <Briefcase className="w-7 h-7" />
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-buddas-brown/5 hover:-translate-y-2 transition-transform duration-500 order-1 md:order-1">
                                    <Image
                                        src="https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=1200&auto=format&fit=crop"
                                        alt="Social"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-green-500 shadow-lg">
                                        <GlassWater className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="order-2 md:order-2 space-y-6 md:pl-8">
                                    <h3 className="text-3xl font-bold text-buddas-dark font-poppins">Social Parties</h3>
                                    <p className="text-zinc-500 leading-relaxed text-lg">
                                        Birthdays, anniversaries, or just because. We bring the restaurant experience to your home or venue with interactive food stations and chef demonstrations.
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Interactive Chef Stations
                                        </li>
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Cocktail Mixologists
                                        </li>
                                        <li className="flex items-center gap-3 text-buddas-brown">
                                            <CheckCircle className="w-5 h-5 text-buddas-orange" />
                                            Clean-up Included
                                        </li>
                                    </ul>
                                    <div className="pt-6">
                                        <button className="text-buddas-dark font-semibold border-b-2 border-buddas-dark pb-1 hover:text-buddas-orange hover:border-buddas-orange transition-colors">
                                            See Party Packages
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <section className="py-40 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={breakBgUrl}
                            alt="Immersive Break"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-buddas-dark/60 backdrop-blur-[2px]"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="col-span-1 md:col-span-2 text-white">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-poppins">Experience the Art of Food</h2>
                            <p className="text-white/80 text-xl leading-relaxed max-w-xl">
                                Our team of world-class chefs uses only the freshest, locally sourced ingredients to create masterpieces on every plate.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div className="flex items-baseline text-white">
                                <span className="text-6xl font-bold text-buddas-orange">500</span>
                                <span className="text-2xl font-medium ml-2">+</span>
                            </div>
                            <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Events Annually</span>

                            <div className="w-full h-px bg-white/20 my-2"></div>

                            <div className="flex items-baseline text-white">
                                <span className="text-6xl font-bold text-buddas-orange">4.9</span>
                                <span className="text-2xl font-medium ml-2">/ 5</span>
                            </div>
                            <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Client Satisfaction</span>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={300}>
                <section className="py-24 bg-white relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-buddas-dark mb-4 tracking-tight font-poppins">Everything You Need</h2>
                            <p className="text-zinc-500">Comprehensive event services so you can enjoy the moment.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Service Items */}
                            <div className="bg-[#FFFBF2] p-8 rounded-[2rem] border border-buddas-orange/20 shadow-[0_4px_6px_-1px_rgba(233,197,89,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(233,197,89,0.15)] hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-buddas-dark mb-6 shadow-inner">
                                    <ChefHat className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-buddas-dark mb-2">Private Chefs</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">Dedicated culinary experts preparing meals live at your event.</p>
                            </div>

                            <div className="bg-[#FFFBF2] p-8 rounded-[2rem] border border-buddas-orange/20 shadow-[0_4px_6px_-1px_rgba(233,197,89,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(233,197,89,0.15)] hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-buddas-dark mb-6 shadow-inner">
                                    <HandPlatter className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-buddas-dark mb-2">Service Staff</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">Professional waiters, bartenders, and hostesses trained in hospitality.</p>
                            </div>

                            <div className="bg-[#FFFBF2] p-8 rounded-[2rem] border border-buddas-orange/20 shadow-[0_4px_6px_-1px_rgba(233,197,89,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(233,197,89,0.15)] hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-buddas-dark mb-6 shadow-inner">
                                    <Armchair className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-buddas-dark mb-2">Rentals & Decor</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">We coordinate tables, chairs, linens, and floral arrangements.</p>
                            </div>

                            <div className="bg-[#FFFBF2] p-8 rounded-[2rem] border border-buddas-orange/20 shadow-[0_4px_6px_-1px_rgba(233,197,89,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(233,197,89,0.15)] hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-buddas-dark mb-6 shadow-inner">
                                    <Wine className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-buddas-dark mb-2">Beverage Service</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">Custom cocktails, wine pairing, and coffee bar setups.</p>
                            </div>

                            <div className="bg-[#FFFBF2] p-8 rounded-[2rem] border border-buddas-orange/20 shadow-[0_4px_6px_-1px_rgba(233,197,89,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(233,197,89,0.15)] hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-buddas-dark mb-6 shadow-inner">
                                    <Leaf className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-buddas-dark mb-2">Dietary Specialists</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">Gluten-free, vegan, halal, and allergen-safe options for guests.</p>
                            </div>

                            <div className="bg-[#FFFBF2] p-8 rounded-[2rem] border border-buddas-orange/20 hover:border-buddas-orange/50 transition-colors">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-buddas-dark mb-6 shadow-sm">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-buddas-dark mb-2">Venue Sourcing</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">We help you find the perfect location through our partner network.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={400}>
                <section className="py-24 relative overflow-hidden z-10 bg-buddas-dark">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                    {/* Animated Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-buddas-orange/20 rounded-full blur-[100px] animate-pulse"></div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-poppins">Ready to Create a Memorable Event?</h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Contact our event specialists today to discuss your vision and receive a complimentary tasting consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full bg-white text-buddas-dark px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_0_0_rgb(200,200,200),0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_rgb(200,200,200),0_12px_24px_-4px_rgba(0,0,0,0.15)] active:translate-y-1 active:shadow-[0_0_0_0_rgb(200,200,200),inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    Schedule Call
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg active:translate-y-0">
                                <Mail className="w-5 h-5" />
                                Request Quote
                            </button>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
}
