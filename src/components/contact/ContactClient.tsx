"use client";

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
    Plus,
    Building2,
    Clock,
    PlusCircle,
    Check
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ContactClientProps {
    primaryLocation: any;
}

export function ContactClient({ primaryLocation }: ContactClientProps) {
    const [guestCount, setGuestCount] = useState<number>(50);
    const [eventType, setEventType] = useState<string>("Wedding Catering");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const eventTypes = ["Wedding Catering", "Corporate Event", "Social Party", "Private Chef", "Other"];

    return (
        <div className="bg-white min-h-screen font-sans text-buddas-dark">
            {/* Parallax Hero */}
            <header className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-buddas-dark">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2400&auto=format&fit=crop"
                        alt="Contact Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-buddas-dark/50"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 mt-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight font-poppins drop-shadow-md">
                        Let's Plan Your <br />
                        <span className="text-buddas-orange italic font-serif drop-shadow-sm">Perfect Event</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-light drop-shadow-sm">
                        Have a question or want to book our catering services? We're here to help you create unforgettable culinary memories.
                    </p>
                </div>
            </header>

            {/* Main Content Card */}
            <main className="relative z-20 -mt-24 px-4 pb-20">
                <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-900/5 border border-zinc-100 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Contact Form Section */}
                        <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16">
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-buddas-dark tracking-tight mb-2 font-poppins">Send us a message</h2>
                                <p className="text-zinc-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">First Name</label>
                                        <input type="text" placeholder="Jane" className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner text-zinc-800 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-buddas-orange transition-all" />
                                    </div>
                                    {/* Last Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner text-zinc-800 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-buddas-orange transition-all" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                                        <input type="email" placeholder="jane@example.com" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner text-zinc-800 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-buddas-orange transition-all" />
                                    </div>
                                </div>

                                {/* Custom Dropdown Trigger (Event Type) */}
                                <div className="space-y-2 relative">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Event Type</label>
                                    <div
                                        className="relative group cursor-pointer"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <div className={`w-full px-4 py-3.5 rounded-xl bg-white border ${isDropdownOpen ? 'border-buddas-orange ring-2 ring-orange-100' : 'border-zinc-200 shadow-sm'} text-zinc-800 flex items-center justify-between hover:border-zinc-300 transition-all`}>
                                            <span className="flex items-center gap-2">
                                                <Wine className="text-buddas-orange w-5 h-5" />
                                                {eventType}
                                            </span>
                                            <ChevronDown className={`text-zinc-400 w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                    </div>

                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-zinc-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                            {eventTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    className="px-4 py-3 hover:bg-orange-50 cursor-pointer text-zinc-700 hover:text-buddas-dark transition-colors flex items-center gap-2"
                                                    onClick={() => {
                                                        setEventType(type);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                >
                                                    {eventType === type && <Check className="w-4 h-4 text-buddas-orange" />}
                                                    <span className={eventType === type ? "font-semibold ml-0" : "ml-6"}>{type}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Custom Slider (Guest Count) */}
                                <div className="space-y-4 pt-2">
                                    <div className="flex justify-between items-end">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Guest Estimate</label>
                                        <span className="text-sm font-bold text-buddas-orange bg-orange-50 px-2 py-1 rounded-md">{guestCount} Guests</span>
                                    </div>
                                    <div className="relative w-full h-6 flex items-center">
                                        <input
                                            type="range"
                                            min="10"
                                            max="500"
                                            value={guestCount}
                                            onChange={(e) => setGuestCount(parseInt(e.target.value))}
                                            className="w-full h-2 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-buddas-orange focus:outline-none focus:ring-2 focus:ring-orange-100"
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-zinc-400 font-medium">
                                        <span>10</span>
                                        <span>500+</span>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Message</label>
                                    <textarea rows={4} placeholder="Tell us about your dietary requirements, theme ideas..." className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner text-zinc-800 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-buddas-orange transition-all resize-none"></textarea>
                                </div>

                                {/* Custom Toggle / Checkbox */}
                                <div className="flex items-start gap-3">
                                    <label className="relative flex items-center cursor-pointer p-1">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-5 h-5 border-2 border-zinc-300 rounded-[6px] peer-checked:bg-buddas-orange peer-checked:border-buddas-orange transition-all flex items-center justify-center text-white">
                                            <Check className="w-3.5 h-3.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                    </label>
                                    <p className="text-sm text-zinc-500 leading-tight pt-1">
                                        I agree to the <Link href="#" className="text-buddas-dark underline decoration-zinc-300 underline-offset-2 hover:decoration-buddas-orange transition-colors">Terms of Service</Link> and <Link href="#" className="text-buddas-dark underline decoration-zinc-300 underline-offset-2 hover:decoration-buddas-orange transition-colors">Privacy Policy</Link>.
                                    </p>
                                </div>

                                <button type="submit" className="w-full py-4 bg-buddas-dark hover:bg-zinc-800 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_4px_0_0_rgba(0,0,0,0.5),0_8px_15px_-4px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.5),0_12px_24px_-4px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_0_0_0_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(0,0,0,0.5)]">
                                    Send Request
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Info Sidebar */}
                        <div className="w-full lg:w-2/5 bg-zinc-50 border-t lg:border-t-0 lg:border-l border-zinc-100 p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative Pattern */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-zinc-200/40 rounded-full blur-3xl"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between space-y-12">
                                <div>
                                    <h3 className="text-xl font-bold text-buddas-dark mb-6 flex items-center gap-2 font-poppins">
                                        <MapPin className="text-buddas-orange w-6 h-6" />
                                        Visit Our Kitchen
                                    </h3>

                                    {/* Custom Map Card */}
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-zinc-200 group mb-8">
                                        <Image
                                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                                            alt="Location Map"
                                            fill
                                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-buddas-dark/10 group-hover:bg-buddas-dark/0 transition-colors"></div>
                                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-800 shadow-sm flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Open Now
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0">
                                                <Building2 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-buddas-dark text-sm">Headquarters</p>
                                                <p className="text-zinc-500 text-sm leading-relaxed mt-0.5">
                                                    {primaryLocation?.addressLine1 || "123 Culinary Avenue, Suite 400"}<br />
                                                    {primaryLocation ? `${primaryLocation.city}, ${primaryLocation.state} ${primaryLocation.zip}` : "New York, NY 10012"}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-buddas-dark text-sm">Contact Info</p>
                                                <p className="text-zinc-500 text-sm mt-0.5 hover:text-buddas-orange transition-colors cursor-pointer">
                                                    {primaryLocation?.phone || "+1 (555) 0123-456"}
                                                </p>
                                                <p className="text-zinc-500 text-sm hover:text-buddas-orange transition-colors cursor-pointer">
                                                    hello@buddas.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-buddas-dark text-sm">Office Hours</p>
                                                <p className="text-zinc-500 text-sm mt-0.5">Mon - Fri: 9am - 6pm</p>
                                                <p className="text-zinc-500 text-sm">Sat - Sun: Events Only</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Socials */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Follow Us</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-12 h-12 rounded-full bg-buddas-dark text-white flex items-center justify-center transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(0,0,0,0.3),0_8px_15px_-3px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(0,0,0,0.1),0_8px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-white active:translate-y-1 active:shadow-none">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(0,0,0,0.1),0_8px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-white active:translate-y-1 active:shadow-none">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* FAQ Section */}
            <section className="py-20 px-6 max-w-4xl mx-auto w-full">
                <div className="text-center mb-12">
                    <span className="text-buddas-orange font-bold tracking-widest uppercase text-xs mb-3 block">Support</span>
                    <h2 className="text-3xl font-bold text-buddas-dark tracking-tight font-poppins">Frequently Asked Questions</h2>
                </div>

                <div className="grid gap-4">
                    {/* FAQ Item 1 */}
                    <div className="group bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-lg hover:border-orange-100 transition-all cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-buddas-dark">How far in advance should I book?</h3>
                            <PlusCircle className="text-zinc-400 w-6 h-6 group-hover:text-buddas-orange group-hover:rotate-45 transition-all" />
                        </div>
                        <p className="text-zinc-500 text-sm mt-3 leading-relaxed hidden group-hover:block animate-in fade-in duration-300">
                            We recommend booking at least 3 months in advance for large events (weddings, galas) and 2 weeks for smaller corporate gatherings to ensure availability.
                        </p>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="group bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-lg hover:border-orange-100 transition-all cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-buddas-dark">Do you accommodate dietary restrictions?</h3>
                            <PlusCircle className="text-zinc-400 w-6 h-6 group-hover:text-buddas-orange group-hover:rotate-45 transition-all" />
                        </div>
                        <p className="text-zinc-500 text-sm mt-3 leading-relaxed hidden group-hover:block animate-in fade-in duration-300">
                            Absolutely. Our culinary team specializes in creating delicious menus for vegan, gluten-free, keto, and kosher requirements without compromising on taste.
                        </p>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="group bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-lg hover:border-orange-100 transition-all cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-buddas-dark">Is there a minimum guest count?</h3>
                            <PlusCircle className="text-zinc-400 w-6 h-6 group-hover:text-buddas-orange group-hover:rotate-45 transition-all" />
                        </div>
                        <p className="text-zinc-500 text-sm mt-3 leading-relaxed hidden group-hover:block animate-in fade-in duration-300">
                            Our minimum for full-service catering is 10 guests. For smaller private chef experiences, we can accommodate groups as small as 2.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
