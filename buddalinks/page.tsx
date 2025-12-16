"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);



    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    {
      title: "Order Online",
      url: "https://order.example.com",
      variant: "primary" as const,
    },
    {
      title: "View Menu",
      url: "https://menu.example.com",
      variant: "primary" as const,
    },
    {
      title: "Find Us",
      url: "https://maps.google.com",
      variant: "secondary" as const,
    },
  ];

  const featureCards = [
    {
      title: "Catering",
      url: "#catering",
      accentColor: "#E9C559",
    },
    {
      title: "Shop New",
      url: "#new",
      accentColor: "#54BFA5",
    },
    {
      title: "Now on Sale!",
      url: "#sale",
      accentColor: "#F38D2D",
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Mail, url: "mailto:info@buddashawaiian.com", label: "Email" },
  ];

  return (
    <main
      className="min-h-screen w-full relative overflow-x-hidden bg-[#FAF2D8]"
      role="main"
    >
      {/* Hero Image Section */}
      <header className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E9C559] via-[#54BFA5] to-[#F38D2D]">
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-md mx-auto p-4 space-y-4">
        {/* Logo Card Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm -mt-16 relative z-10 mx-auto text-center">
          <img
            src="/logo.webp"
            alt="Budda's Hawaiian Logo"
            className="mx-auto w-48 h-auto drop-shadow-lg mb-4"
          />
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2 pt-2">
          <a
            href="https://order.example.com"
            className="block w-full text-center py-3 px-5 bg-[#1C5F56] text-white font-medium rounded-full shadow-sm hover:opacity-90 transition-opacity"
          >
            Order Online
          </a>
          <a
            href="https://menu.example.com"
            className="block w-full text-center py-3 px-5 bg-[#E9C559] text-gray-800 font-medium rounded-full shadow-sm hover:opacity-90 transition-opacity"
          >
            View Menu
          </a>
          <a
            href="https://maps.google.com"
            className="block w-full text-center py-3 px-5 bg-white text-[#1C5F56] font-medium rounded-full shadow-sm hover:opacity-90 transition-opacity"
          >
            Find Us
          </a>
        </div>

        {/* Promotional Banner */}
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl text-[#3A2F2B]">Grab a Free Roll!</h2>
            <p className="text-sm text-gray-500">Join Budda Rewards as a new member, and get a free roll!</p>
          </div>
          <a
            href="#freebie"
            className="bg-[#E9C559] text-gray-800 font-semibold py-2 px-4 rounded-full flex items-center space-x-2 shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <span>CLAIM</span>
            <ArrowUp className="w-4 h-4 rotate-90" aria-hidden="true" />
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-4">
          <a href="#bestsellers" className="group block text-center">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-full bg-gradient-to-br from-[#E9C559] to-[#F38D2D]" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#E9C559] border-2 border-white" />
            </div>
            <span className="mt-2 inline-block font-semibold text-xs tracking-wider uppercase text-[#3A2F2B]">Catering</span>
          </a>
          <a href="#new" className="group block text-center">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-full bg-gradient-to-br from-[#54BFA5] to-[#1C5F56]" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#54BFA5] border-2 border-white" />
            </div>
            <span className="mt-2 inline-block font-semibold text-xs tracking-wider uppercase text-[#3A2F2B]">Budda Benefits</span>
          </a>
          <a href="#sale" className="group block text-center">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-full bg-gradient-to-br from-[#F38D2D] to-[#E9C559]" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#F38D2D] border-2 border-white" />
            </div>
            <span className="mt-2 inline-block font-semibold text-xs tracking-wider uppercase text-[#3A2F2B]">Whats New</span>
          </a>
        </div>

      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 sm:right-8 p-3 rounded-full bg-[#E9C559] text-[#3A2F2B] shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E9C559]/50 z-40"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </main>
  );
}
