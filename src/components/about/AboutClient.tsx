"use client";

import {
    Leaf,
    Star,
    Users,
    Quote,
    Clock,
    Heart,
    ArrowRight,
    Check,
    Loader2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface AboutClientProps {
    data: any; // Legacy prop name from page.tsx mapping, usually passed as pageData={data}
}

export function AboutClient({ data }: AboutClientProps) {
    // Handle both prop patterns just in case (direct prop or nested)
    const pageData = data || {};

    const {
        heroTitle,
        heroSubtitle,
        heroImage,
        storyTitle,
        storyContent,
        storyImage,
        heritage,
        values,
        closingCta
    } = pageData;

    // Use default image if none provided
    const heroImageUrl = heroImage?.asset ? urlFor(heroImage).width(2400).url() : 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2400&auto=format&fit=crop';
    const kitchenBgUrl = 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2000&auto=format&fit=crop';
    const testimonialBgUrl = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop';

    return (
        <div className="bg-buddas-cream min-h-screen font-sans text-buddas-brown">
            {/* Parallax Hero */}
            <header className="relative h-[45vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-buddas-brown">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImageUrl}
                        alt="About Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-buddas-brown/60"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6 mt-16"
                >
                    <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-buddas-gold font-semibold tracking-widest uppercase text-xs shadow-lg mb-2"
                    >
                        Est. 2015 • Hawaii
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] font-poppins drop-shadow-lg">
                        {heroTitle || <>Where Hawaiian Tradition <br /><span className="text-buddas-orange font-serif italic drop-shadow-md">Meets Family Love</span></>}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        {heroSubtitle || "We took the classic Hawaiian plate lunch—generous, flavorful, humble—and engineered it for the modern family on the go."}
                    </p>
                </motion.div>
            </header>


            <section className="py-24 relative z-10 bg-buddas-cream">
                <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="relative order-first lg:order-last">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-buddas-brown/10"
                            >
                                {storyImage?.asset ? (
                                    <Image
                                        src={urlFor(storyImage).width(1200).url()}
                                        alt="Our Story"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <Image
                                        src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop"
                                        alt="Our Roots"
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </motion.div>
                        </div>

                        <div className="space-y-8 order-last lg:order-first">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-semibold text-buddas-brown tracking-tight font-poppins"
                            >
                                {storyTitle || "Bringing Aloha to the Table"}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6 text-lg text-buddas-brown/80 leading-relaxed"
                            >
                                {storyContent ? (
                                    <PortableText value={storyContent} />
                                ) : (
                                    <>
                                        <p>
                                            In a world of transactional fast food and faceless delivery apps, Buddas is the warm hug. We are the spot where the steam rises off the rice, the mac salad is always creamy, and the "Aloha" isn't just a marketing slogan—it's the way we treat every order.
                                        </p>

                                        <blockquote className="border-l-4 border-buddas-teal pl-6 py-2 my-8 italic text-xl md:text-2xl text-buddas-brown font-serif">
                                            "Buddas is the warm hug. The spot where steam rises off the rice and Aloha is real."
                                        </blockquote>

                                        <p>
                                            We exist to share the specific warmth of island-inspired comfort food—fast, consistent, and family-friendly.
                                        </p>
                                    </>
                                )}
                            </motion.div>

                            {/* Mobile "Quick Facts" Carousel */}
                            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-8 pt-4 scrollbar-hide">
                                <div className="snap-center shrink-0 w-[200px] md:w-auto p-6 rounded-2xl bg-white border border-buddas-brown/5 shadow-sm">
                                    <span className="block text-4xl font-semibold text-buddas-brown mb-2 font-poppins">3+</span>
                                    <span className="text-xs text-buddas-brown/60 uppercase tracking-widest font-bold">Locations</span>
                                </div>
                                <div className="snap-center shrink-0 w-[200px] md:w-auto p-6 rounded-2xl bg-white border border-buddas-brown/5 shadow-sm">
                                    <span className="block text-4xl font-semibold text-buddas-brown mb-2 font-poppins">100k+</span>
                                    <span className="text-xs text-buddas-brown/60 uppercase tracking-widest font-bold">Plates Served</span>
                                </div>
                                <div className="snap-center shrink-0 w-[200px] md:w-auto p-6 rounded-2xl bg-white border border-buddas-brown/5 shadow-sm md:hidden lg:hidden">
                                    <span className="block text-4xl font-semibold text-buddas-brown mb-2 font-poppins">10+</span>
                                    <span className="text-xs text-buddas-brown/60 uppercase tracking-widest font-bold">Years of Aloha</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Heritage Section (Replaces Kitchen Interlude) */}

            <section className="py-24 md:py-40 relative flex items-center justify-center mt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heritage?.image?.asset ? urlFor(heritage.image).url() : kitchenBgUrl}
                        alt="Heritage"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                    {/* Mobile/Tablet Overlay - Darker for readability */}
                    <div className="absolute inset-0 bg-buddas-brown/90 lg:bg-buddas-brown/80"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">


                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 font-poppins">
                        {heritage?.title || "Rooted in Tradition"}
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                    >
                        {heritage?.content ? (
                            <PortableText value={heritage.content} />
                        ) : (
                            <p>
                                "Aloha" isn't just a greeting; it's a way of life. It means treating every guest like family and every plate like a gift. We honor the islands by keeping our flavors authentic and our welcome warm.
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>


            {/* Values Section */}

            <section className="py-24 bg-buddas-cream relative z-10">
                <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 2xl:px-16">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <span className="text-buddas-orange font-bold tracking-widest uppercase text-xs mb-3 block">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-buddas-brown tracking-tight font-poppins">The Buddas Way</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
                        {values?.length > 0 ? (
                            values.map((value: any, idx: number) => {
                                const icons = [Leaf, Star, Users];
                                const Icon = icons[idx % icons.length];
                                // Bento Logic: Index 0 spans 2 columns on mobile
                                const isHero = idx === 0;
                                const spanClass = isHero ? "col-span-2" : "col-span-1";
                                const cardBg = isHero ? "bg-white/80 backdrop-blur-md border-white/30 shadow-lg" : "bg-white border-buddas-brown/5 shadow-sm";

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`${spanClass} ${cardBg} group p-6 md:p-8 rounded-2xl hover:bg-buddas-teal/5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] border hover:-translate-y-2 md:col-span-1`}
                                    >
                                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-buddas-teal/10 text-buddas-teal rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-inner border border-buddas-brown/5 group-hover:scale-110 transition-transform duration-300`}>
                                            {value.icon?.asset ? (
                                                <Image src={urlFor(value.icon).url()} width={32} height={32} alt="" />
                                            ) : (
                                                <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                            )}
                                        </div>
                                        <h3 className={`${isHero ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-semibold text-buddas-brown mb-2 md:mb-3 font-poppins`}>{value.title}</h3>
                                        <p className="text-sm md:text-base text-buddas-brown/60 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                )
                            })
                        ) : (
                            // Brand Pillar Fallbacks (Mapped to Bento)
                            <>
                                <div className="col-span-2 md:col-span-1 group p-6 md:p-8 rounded-2xl bg-white hover:bg-buddas-teal/5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] border border-buddas-brown/5 shadow-sm hover:-translate-y-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-buddas-teal/10 text-buddas-teal rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-inner border border-buddas-brown/5">
                                        <Heart className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-buddas-brown mb-2 md:mb-3 font-poppins">Flavor & Freshness</h3>
                                    <p className="text-sm md:text-base text-buddas-brown/60 leading-relaxed">
                                        "The Crave." Real food, cooked fresh. Not sitting under a heat lamp. The Katsu is crisp, and the rice is always hot.
                                    </p>
                                </div>
                                <div className="col-span-1 md:col-span-1 group p-6 md:p-8 rounded-2xl bg-white hover:bg-buddas-teal/5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] border border-buddas-brown/5 shadow-sm hover:-translate-y-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-buddas-teal/10 text-buddas-teal rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-inner border border-buddas-brown/5">
                                        <Clock className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-buddas-brown mb-2 md:mb-3 font-poppins">Convenience</h3>
                                    <p className="text-sm md:text-base text-buddas-brown/60 leading-relaxed">
                                        Dinner solved in 3 taps.
                                    </p>
                                </div>
                                <div className="col-span-1 md:col-span-1 group p-6 md:p-8 rounded-2xl bg-white hover:bg-buddas-teal/5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] border border-buddas-brown/5 shadow-sm hover:-translate-y-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-buddas-teal/10 text-buddas-teal rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-inner border border-buddas-brown/5">
                                        <Users className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-buddas-brown mb-2 md:mb-3 font-poppins">Value</h3>
                                    <p className="text-sm md:text-base text-buddas-brown/60 leading-relaxed">
                                        No tiny portions.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section >
            <section className="py-32 relative flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={testimonialBgUrl}
                        alt="Testimonial Background"
                        fill
                        className="object-cover"
                    />
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-buddas-brown/90"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <Quote className="text-white/20 w-10 h-10 mb-6 mx-auto" />
                        <h2 className="text-xl md:text-3xl font-serif italic text-white leading-relaxed mb-8">
                            "I have never seen a team so dedicated to the craft. Buddas didn't just cater our charity gala; they created an atmosphere of warmth that our guests are still talking about."
                        </h2>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-white font-semibold tracking-wide uppercase font-poppins">Jonathan Doe</span>
                            <span className="text-white/60 text-sm">Director, Global Arts Foundation</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Closing CTA Section */}
            <section className="hidden md:block py-24 relative bg-buddas-teal overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 font-poppins">
                        {closingCta?.title || "Join Our Ohana"}
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        {closingCta?.subtitle || "Sign up for exclusive offers, community event invites, and a little slice of Aloha in your inbox."}
                    </p>

                    {/* Newsletter Form */}
                    <NewsletterForm />
                </div>
            </section>

        </div >
    );
}

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="relative group">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    className="w-full h-14 pl-6 pr-36 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-buddas-gold transition-all"
                />
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="absolute right-1 top-1 bottom-1 px-6 rounded-xl bg-white text-buddas-teal font-bold tracking-wide uppercase text-sm hover:bg-buddas-cream transition-colors flex items-center justify-center min-w-[100px]"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "success" ? (
                        <Check className="w-5 h-5 text-green-600" />
                    ) : (
                        <span className="flex items-center gap-2">
                            Join <ArrowRight className="w-4 h-4" />
                        </span>
                    )}
                </button>
            </div>
            {status === "success" && (
                <p className="absolute -bottom-8 left-0 right-0 text-center text-sm font-medium text-white/90 animate-in fade-in slide-in-from-top-2">
                    Welcome to the Ohana! 🌺
                </p>
            )}
        </form>
    );
}
