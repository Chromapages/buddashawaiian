"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import {
    Mail,
    MapPin,
    Phone,
    User,
    Wine,
    ChevronDown,
    Send,
    Instagram,
    Linkedin,
    Twitter,
    Loader2,
    CheckCircle2,
    Plus,
    Building2,
    Clock,
    PlusCircle,
    Check,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MICROCOPY } from "@/lib/microcopy";
import { Button } from "@/components/ui/button";

import { urlFor } from "@/sanity/lib/image";

interface ContactClientProps {
    primaryLocation: any;
    pageData?: {
        heroTitle?: string;
        heroSubtitle?: string;
        heroImage?: any;
        formTitle?: string;
        formSubtitle?: string;
        eventTypes?: string[];
        faq?: Array<{
            question: string;
            answer: string;
        }>;
    };
}

export function ContactClient({ primaryLocation, pageData }: ContactClientProps) {
    const [guestCount, setGuestCount] = useState<number>(50);
    const [eventType, setEventType] = useState<string>(pageData?.eventTypes?.[0] || "Wedding Catering");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Form Logic State
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const MAX_CHARS = 500;

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const eventTypes = pageData?.eventTypes || ["Wedding Catering", "Corporate Event", "Social Party", "Private Chef", "Other"];

    // Parallax & Scroll Animations
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 200]); // Parallax: moves down slower than scroll
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]); // Fade out content
    const scaleBg = useTransform(scrollY, [0, 500], [1, 1.1]); // Subtle scale up on scroll (optional ambient feel)

    return (
        <div className="bg-buddas-cream min-h-screen font-sans text-buddas-brown">
            {/* Parallax Hero */}
            <header className="relative h-[45vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-buddas-brown">
                <motion.div
                    style={{ y: yBg, scale: scaleBg }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={pageData?.heroImage?.asset ? urlFor(pageData.heroImage).url() : "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2400&auto=format&fit=crop"}
                        alt="Contact Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-buddas-brown/50"></div>
                </motion.div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-4 mt-8 md:mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight font-poppins drop-shadow-md mb-4">
                            {pageData?.heroTitle ? (
                                pageData.heroTitle
                            ) : (
                                <>
                                    Questions? <br />
                                    <span className="text-buddas-teal italic font-serif drop-shadow-sm">We're Here, Ohana.</span>
                                </>
                            )}
                        </h1>
                        <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto font-light drop-shadow-sm">
                            {pageData?.heroSubtitle || "From catering your big day to answering your questions, we're ready to help bring the Aloha spirit to your table."}
                        </p>
                    </motion.div>

                    {/* Mobile Quick Action Pill */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-4 pt-4 md:hidden"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <a href="tel:+15550123456" className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/30 transition-all active:scale-95 shadow-lg">
                                <Phone className="w-4 h-4 fill-current" />
                                <span>Call</span>
                            </a>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-buddas-teal/80 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-buddas-teal transition-all active:scale-95 shadow-lg">
                                <MapPin className="w-4 h-4" />
                                <span>Map</span>
                            </a>
                        </div>

                        {/* Trust Signal Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/80"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-buddas-teal animate-pulse"></span>
                            Est. 2015 · Aloha Spirit
                        </motion.div>
                    </motion.div>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hidden md:flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "loop" }}
                >
                    <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </header>

            {/* Main Content Card */}
            <main className="relative z-20 -mt-24 px-4 pb-20">
                <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto bg-white rounded-2xl shadow-2xl shadow-zinc-900/5 border border-zinc-100 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16">
                            <div className="mb-10">
                                <h2 className="text-3xl font-semibold text-buddas-brown tracking-tight mb-2 font-poppins">
                                    {pageData?.formTitle || "Send us a message"}
                                </h2>
                                <p className="text-buddas-brown/60">
                                    {pageData?.formSubtitle || "Fill out the form below and we'll get back to you within 24 hours."}
                                </p>
                            </div>

                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-buddas-brown mb-2">Message Sent!</h3>
                                            <p className="text-buddas-brown/60 max-w-xs mx-auto">
                                                Mahalo! We've received your inquiry and will get back to you shortly.
                                            </p>
                                        </div>
                                        <Button
                                            onClick={() => setIsSuccess(false)}
                                            className="mt-4 bg-buddas-teal text-white hover:bg-buddas-teal-dark"
                                        >
                                            Send Another
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        className="space-y-8"
                                        onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        exit={{ opacity: 0, y: -20 }}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.1
                                                }
                                            }
                                        }}
                                    >
                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* First Name */}
                                            <div className="space-y-2 group">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-buddas-brown/70 ml-1 group-focus-within:text-buddas-teal transition-colors">First Name</label>
                                                <input type="text" placeholder="Jane" className="w-full px-4 py-3.5 rounded-lg bg-white border border-buddas-brown/20 shadow-inner text-buddas-brown placeholder:text-buddas-brown/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-buddas-teal/20 focus:border-buddas-teal transition-all" />
                                            </div>
                                            {/* Last Name */}
                                            <div className="space-y-2 group">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-buddas-brown/70 ml-1 group-focus-within:text-buddas-teal transition-colors">Last Name</label>
                                                <input type="text" placeholder="Doe" className="w-full px-4 py-3.5 rounded-lg bg-white border border-buddas-brown/20 shadow-inner text-buddas-brown placeholder:text-buddas-brown/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-buddas-teal/20 focus:border-buddas-teal transition-all" />
                                            </div>
                                        </motion.div>

                                        {/* Email */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2 group">
                                            <div className="flex justify-between">
                                                <label className={`text-xs font-semibold uppercase tracking-wider ml-1 transition-colors ${emailError ? 'text-red-500' : 'text-buddas-brown/70 group-focus-within:text-buddas-teal'}`}>Email Address</label>
                                                {emailError && <span className="text-xs text-red-500 font-medium animate-pulse">{emailError}</span>}
                                            </div>
                                            <div className="relative">
                                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${emailError ? 'text-red-400' : 'text-buddas-brown/40 group-focus-within:text-buddas-teal'}`} />
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        if (emailError) setEmailError("");
                                                    }}
                                                    onBlur={() => {
                                                        if (email && !validateEmail(email)) {
                                                            setEmailError("Please enter a valid email");
                                                        }
                                                    }}
                                                    placeholder="jane@example.com"
                                                    className={`w-full pl-11 pr-4 py-3.5 rounded-lg bg-white border shadow-inner text-buddas-brown placeholder:text-buddas-brown/40 focus:bg-white focus:outline-none focus:ring-2 transition-all ${emailError
                                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                                        : 'border-buddas-brown/20 focus:border-buddas-teal focus:ring-buddas-teal/20'
                                                        }`}
                                                />
                                                {email && !emailError && validateEmail(email) && (
                                                    <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 animate-in zoom-in" />
                                                )}
                                            </div>
                                        </motion.div>

                                        {/* Custom Dropdown Trigger (Event Type) */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2 relative">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-buddas-brown/70 ml-1">Event Type</label>
                                            <div
                                                className="relative group cursor-pointer"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                <div className={`w-full px-4 py-3.5 rounded-lg bg-white border ${isDropdownOpen ? 'border-buddas-teal ring-2 ring-buddas-teal/20' : 'border-buddas-brown/20 shadow-sm'} text-buddas-brown flex items-center justify-between hover:border-buddas-teal/50 transition-all`}>
                                                    <span className="flex items-center gap-2">
                                                        <Wine className="text-buddas-teal w-5 h-5" />
                                                        {eventType}
                                                    </span>
                                                    <ChevronDown className={`text-buddas-brown/40 w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>

                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-zinc-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                                    {eventTypes.map((type) => (
                                                        <div
                                                            key={type}
                                                            className="px-4 py-3 hover:bg-buddas-cream cursor-pointer text-buddas-brown hover:text-buddas-teal-dark transition-colors flex items-center gap-2"
                                                            onClick={() => {
                                                                setEventType(type);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            {eventType === type && <Check className="w-4 h-4 text-buddas-teal" />}
                                                            <span className={eventType === type ? "font-semibold ml-0" : "ml-6"}>{type}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>

                                        {/* Custom Slider (Guest Count) */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4 pt-2">
                                            <div className="flex justify-between items-end">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-buddas-brown/70 ml-1">Guest Estimate</label>
                                                <span className="text-sm font-bold text-buddas-teal bg-buddas-teal/10 px-2 py-1 rounded-md">{guestCount} Guests</span>
                                            </div>
                                            <div className="relative w-full h-6 flex items-center">
                                                <input
                                                    type="range"
                                                    min="10"
                                                    max="500"
                                                    value={guestCount}
                                                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-buddas-brown/10 rounded-full appearance-none cursor-pointer accent-buddas-teal focus:outline-none focus:ring-2 focus:ring-buddas-teal/20"
                                                />
                                            </div>
                                            <div className="flex justify-between text-xs text-buddas-brown/40 font-medium">
                                                <span>10</span>
                                                <span>500+</span>
                                            </div>
                                        </motion.div>

                                        {/* Message */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2 group">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-buddas-brown/70 ml-1 group-focus-within:text-buddas-teal transition-colors">Message</label>
                                                <span className={`text-[10px] font-medium tracking-wide ${message.length >= MAX_CHARS ? 'text-red-500' : 'text-buddas-brown/40'}`}>
                                                    {message.length} / {MAX_CHARS}
                                                </span>
                                            </div>
                                            <textarea
                                                rows={4}
                                                value={message}
                                                maxLength={MAX_CHARS}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Tell us about your dietary requirements, theme ideas..."
                                                className="w-full px-4 py-3.5 rounded-lg bg-white border border-buddas-brown/20 shadow-inner text-buddas-brown placeholder:text-buddas-brown/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-buddas-teal/20 focus:border-buddas-teal transition-all resize-none"
                                            ></textarea>
                                        </motion.div>

                                        {/* Custom Toggle / Checkbox */}
                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-3">
                                            <label className="relative flex items-center cursor-pointer p-1">
                                                <input type="checkbox" className="sr-only peer" />
                                                <div className="w-5 h-5 border-2 border-buddas-brown/30 rounded-[6px] peer-checked:bg-buddas-teal peer-checked:border-buddas-teal transition-all flex items-center justify-center text-white peer-checked:scale-110 duration-200 ease-out">
                                                    <Check className="w-3.5 h-3.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
                                                </div>
                                            </label>
                                            <p className="text-sm text-buddas-brown/60 leading-tight pt-1">
                                                I agree to the <Link href="#" className="text-buddas-brown underline decoration-zinc-300 underline-offset-2 hover:decoration-buddas-orange transition-colors">Terms of Service</Link> and <Link href="#" className="text-buddas-brown underline decoration-zinc-300 underline-offset-2 hover:decoration-buddas-orange transition-colors">Privacy Policy</Link>.
                                            </p>
                                        </motion.div>

                                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-6 rounded-lg bg-buddas-teal text-white text-base font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:translate-y-[-2px] hover:bg-buddas-teal-dark active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none"
                                            >
                                                {isSubmitting ? (
                                                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                                ) : (
                                                    <>
                                                        {MICROCOPY.sendRequest || "Send Request"}
                                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            className="w-full lg:w-2/5 bg-buddas-cream border-t lg:border-t-0 lg:border-l border-buddas-brown/10 p-8 md:p-12 relative overflow-hidden"
                        >
                            {/* Decorative Pattern */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-buddas-orange/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-buddas-teal/20 rounded-full blur-3xl"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between space-y-12">
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                    <h3 className="text-xl font-semibold text-buddas-brown mb-6 flex items-center gap-2 font-poppins">
                                        <MapPin className="text-buddas-brown w-6 h-6" />
                                        Visit Our Kitchen
                                    </h3>

                                    {/* Google Maps Embed */}
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-buddas-brown/20 group mb-4">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.4371424638875!2d-111.7366577!3d40.3548305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d853ad86df1af%3A0x2c17a0f9a8aad114!2sBudda&#39;s%20Bakery%20%26%20Breakfast!5e0!3m2!1sen!2sus!4v1765920548351!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="absolute inset-0"
                                            title="Budda's Hawaiian Location"
                                        ></iframe>
                                        <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-buddas-brown shadow-sm flex items-center gap-1 pointer-events-none">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Open Now
                                        </div>
                                    </div>

                                    {/* Get Directions CTA */}
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-buddas-teal hover:text-buddas-teal-dark transition-colors group/link mb-8"
                                    >
                                        Get Directions
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>

                                    <div className="grid gap-4">
                                        {/* Headquarters Card */}
                                        <motion.a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-buddas-brown/5 hover:bg-white hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-buddas-teal/10 text-buddas-teal flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-buddas-teal group-hover:text-white transition-all duration-300">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-buddas-brown/50 mb-1">Headquarters</p>
                                                <p className="text-sm md:text-base font-medium text-buddas-brown leading-tight">
                                                    {primaryLocation?.addressLine1 || "205 E 700 S"}<br />
                                                    {primaryLocation ? `${primaryLocation.city}, ${primaryLocation.state} ${primaryLocation.zip}` : "Pleasant Grove, Utah 84062"}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-buddas-brown/20 group-hover:text-buddas-teal group-hover:translate-x-1 transition-all" />
                                        </motion.a>

                                        {/* Contact Card */}
                                        <motion.a
                                            href={`tel:${primaryLocation?.phone || "+18017010617"}`}
                                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-buddas-brown/5 hover:bg-white hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-buddas-teal/10 text-buddas-teal flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-buddas-teal group-hover:text-white transition-all duration-300">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-buddas-brown/50 mb-1">Contact Info</p>
                                                <p className="text-sm md:text-base font-medium text-buddas-brown leading-tight mb-0.5">
                                                    {primaryLocation?.phone || "+1 (801) 701-0617"}
                                                </p>
                                                <span className="text-xs text-buddas-brown/60 group-hover:text-buddas-orange transition-colors">
                                                    hello@buddas.com
                                                </span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-buddas-teal/10 flex items-center justify-center group-hover:bg-buddas-teal text-buddas-teal group-hover:text-white transition-all">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                        </motion.a>

                                        {/* Office Hours Card */}
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-buddas-brown/5 hover:bg-white hover:shadow-sm transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-buddas-teal/10 text-buddas-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                                                <Clock className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-buddas-brown/50 mb-1">Office Hours</p>
                                                <div className="flex flex-col gap-0.5">
                                                    <p className="text-sm md:text-base font-medium text-buddas-brown leading-tight flex justify-between">
                                                        <span>Mon - Fri</span>
                                                        <span className="font-bold">9am - 6pm</span>
                                                    </p>
                                                    <p className="text-xs text-buddas-brown/60 flex justify-between">
                                                        <span>Sat - Sun</span>
                                                        <span>Events Only</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Socials */}
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                    <p className="text-xs font-bold uppercase tracking-widest text-buddas-brown/40 mb-4">Follow Us</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-buddas-brown text-white flex items-center justify-center transition-all shadow-md hover:-translate-y-1 hover:bg-buddas-teal">
                                            <Instagram className="w-6 h-6 md:w-5 md:h-5" />
                                        </a>
                                        <a href="#" className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-white border border-buddas-brown/10 text-buddas-brown flex items-center justify-center transition-all shadow-sm hover:-translate-y-1 hover:bg-buddas-brown hover:text-white">
                                            <Twitter className="w-6 h-6 md:w-5 md:h-5" />
                                        </a>
                                        <a href="#" className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-white border border-buddas-brown/10 text-buddas-brown flex items-center justify-center transition-all shadow-sm hover:-translate-y-1 hover:bg-buddas-brown hover:text-white">
                                            <Linkedin className="w-6 h-6 md:w-5 md:h-5" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <div>
                <section className="py-20 px-6 max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto 2xl:px-16 w-full">
                    <div className="text-center mb-12">
                        <span className="text-buddas-orange font-bold tracking-widest uppercase text-xs mb-3 block">Support</span>
                        <h2 className="text-3xl font-semibold text-buddas-brown tracking-tight font-poppins">Frequently Asked Questions</h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
                    >
                        {(pageData?.faq || [
                            {
                                question: "How far in advance should I book?",
                                answer: "We recommend booking at least 3 months in advance for large events (weddings, galas) and 2 weeks for smaller corporate gatherings to ensure availability."
                            },
                            {
                                question: "Do you accommodate dietary restrictions?",
                                answer: "Absolutely. Our culinary team specializes in creating delicious menus for vegan, gluten-free, keto, and kosher requirements without compromising on taste."
                            },
                            {
                                question: "Is there a minimum guest count?",
                                answer: "Our minimum for full-service catering is 10 guests. For smaller private chef experiences, we can accommodate groups as small as 2."
                            }
                        ]).map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                className={`group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${openFaqIndex === index ? 'bg-white border-buddas-teal/20 shadow-md scale-[1.02]' : 'bg-white/60 backdrop-blur-sm border-buddas-brown/5 hover:bg-white hover:shadow-sm'}`}
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className={`font-semibold text-base transition-colors duration-300 ${openFaqIndex === index ? 'text-buddas-teal' : 'text-buddas-brown'}`}>{item.question}</h3>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${openFaqIndex === index ? 'bg-buddas-teal text-white rotate-[135deg]' : 'bg-buddas-teal/10 text-buddas-teal group-hover:bg-buddas-teal group-hover:text-white'}`}>
                                        <PlusCircle className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className={`grid transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <p className="text-buddas-brown/70 text-sm leading-relaxed overflow-hidden pr-2">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
