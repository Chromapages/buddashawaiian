"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NewNavbarProps {
    logoUrl?: string;
    orderUrl?: string;
    ctaStyle?: string;
}

const MotionLink = motion.create(Link);

export function NewNavbar({ logoUrl, orderUrl, ctaStyle }: NewNavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const defaultOrderUrl = "https://order.toasttab.com/online/buddas-hawaiian-bbq-pleasant-grove-pg-123-state-st";

    // Map Sanity CTA styles to Tailwind classes
    const getCtaColors = (style?: string) => {
        switch (style) {
            case "gold":
                return "bg-[#E9C559] text-[#3A2F2B] hover:bg-[#1C5F56] hover:text-[#FAF2D8] active:bg-[#54BFA5] active:text-[#3A2F2B] focus:outline-none focus:ring-2 focus:ring-[#1C5F56] focus:ring-offset-2";
            case "orange":
                return "bg-orange-600 text-white hover:bg-orange-700";
            case "teal":
                return "bg-teal-600 text-white hover:bg-teal-700";
            case "brown":
                return "bg-amber-900 text-white hover:bg-amber-950";
            case "cream":
                return "bg-stone-100 text-zinc-900 hover:bg-stone-200 border border-zinc-200";
            case "thanksgiving":
                return "bg-teal-800 text-white hover:bg-teal-900";
            case "christmas":
                return "bg-red-700 text-white hover:bg-red-800";
            case "dark":
            default:
                // Canonical Primary CTA as requested (Gold)
                return "bg-[#E9C559] text-[#3A2F2B] hover:bg-[#1C5F56] hover:text-[#FAF2D8] active:bg-[#54BFA5] active:text-[#3A2F2B] focus:outline-none focus:ring-2 focus:ring-[#1C5F56] focus:ring-offset-2";
        }
    };

    const ctaClasses = getCtaColors(ctaStyle);

    // Hardcoded Nav Links as requested
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/catering", label: "Catering" },
        { href: "/benefit-nights", label: "Events" }, // "Events" maps to benefit nights based on current nav
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (path: string) => pathname === path;

    // Mobile Menu Variants
    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#fff8e8] dark:bg-zinc-900 border-b-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-all duration-300">
            <div className="w-full px-6 lg:px-12 xl:px-16">
                <header className="flex items-center justify-between py-4">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 text-black dark:text-white">
                        <Link href="/" className="flex items-center gap-2 group relative">
                            {/* Subtle logo lift on hover */}
                            <motion.div
                                whileHover={{ y: -1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                {logoUrl ? (
                                    <motion.img
                                        src={logoUrl}
                                        alt="Hula Grill & Bakery"
                                        className="h-16 w-auto object-contain drop-shadow-sm"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    />
                                ) : (
                                    <>
                                        <div className="size-8 text-primary flex items-center justify-center">
                                            <Flame className="w-8 h-8 text-orange-500 drop-shadow-sm" />
                                        </div>
                                        <h2 className="text-2xl font-display tracking-wide uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">Hula Grill & Bakery</h2>
                                    </>
                                )}
                            </motion.div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex flex-1 justify-end items-center gap-6">
                        <nav className="flex items-center gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-white/5 shadow-inner">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-5 py-2.5 rounded-xl text-base font-poppins font-semibold tracking-wide uppercase transition-all duration-200 group
                                            ${active
                                                ? "text-[#1C5F56] bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,1)] ring-1 ring-black/5"
                                                : "text-[#3A2F2B] hover:text-[#1C5F56] hover:bg-white/60 hover:shadow-sm"
                                            }
                                        `}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {link.label}
                                            {active && (
                                                <motion.div
                                                    layoutId="active-dot"
                                                    className="w-1.5 h-1.5 rounded-full bg-[#54BFA5]"
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="h-8 w-px bg-stone-300 dark:bg-stone-700 mx-2" />

                        <MotionLink
                            href={orderUrl || defaultOrderUrl}
                            target="_blank"
                            className={`flex items-center justify-center rounded-xl h-12 px-8 text-sm font-poppins uppercase font-bold tracking-wide transition-all 
                                shadow-[0_4px_0_0_#BC9D40,0_8px_20px_-4px_rgba(233,197,89,0.4)]
                                active:shadow-[0_0_0_0_#BC9D40,inset_0_2px_4px_rgba(0,0,0,0.2)]
                                active:translate-y-1
                                hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#1C5F56,0_12px_24px_-4px_rgba(28,95,86,0.5)]
                                ${ctaClasses}
                                border-t border-white/20
                            `}
                        >
                            Order Online
                        </MotionLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-[#3A2F2B] dark:text-white hover:bg-[#fff8e8] rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </header>
            </div >

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-x-0 top-[88px] bg-[#fff8e8] dark:bg-zinc-900 border-t border-white/50 dark:border-white/10 p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <MotionLink
                                    key={link.href}
                                    href={link.href}
                                    className={`text-lg font-poppins tracking-wide uppercase transition-all py-4 px-6 rounded-2xl block border flex items-center justify-between group
                                        ${isActive(link.href)
                                            ? "bg-white border-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] text-[#1C5F56] font-bold"
                                            : "border-transparent bg-white/40 text-[#3A2F2B] hover:bg-white/80 hover:shadow-sm hover:translate-x-1 font-medium"}
                                    `}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <div className="w-2 h-2 rounded-full bg-[#1C5F56]" />
                                    )}
                                </MotionLink>
                            ))}
                            <motion.div className="pt-6 pb-4" variants={itemVariants}>
                                <MotionLink
                                    href={orderUrl || defaultOrderUrl}
                                    target="_blank"
                                    className={`flex items-center justify-center rounded-2xl h-14 w-full text-lg font-poppins uppercase font-bold tracking-wider transition-all 
                                        shadow-[0_4px_0_0_#BC9D40,0_8px_20px_-4px_rgba(233,197,89,0.4)]
                                        active:shadow-[0_0_0_0_#BC9D40,inset_0_2px_4px_rgba(0,0,0,0.2)]
                                        active:translate-y-1
                                        ${ctaClasses} border-t border-white/20`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Order Online
                                </MotionLink>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

