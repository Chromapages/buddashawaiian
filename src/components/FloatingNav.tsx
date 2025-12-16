"use client";

import { motion } from "framer-motion";
import { Home, UtensilsCrossed, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function FloatingNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Menu", href: "/menu", icon: UtensilsCrossed },
        { name: "Order", href: "/order", icon: ShoppingBag, badge: 3 },
    ];

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none md:hidden">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="glass-panel pointer-events-auto flex items-center gap-1 rounded-full p-2 shadow-2xl shadow-black/20"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative flex h-12 w-12 flex-col items-center justify-center rounded-full transition-all duration-300",
                                isActive
                                    ? "bg-buddas-teal text-white shadow-lg shadow-buddas-teal/30"
                                    : "text-deep-ocean/60 hover:bg-white/20 hover:text-deep-ocean"
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            {item.badge && (
                                <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-golden-glaze opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-golden-glaze"></span>
                                </span>
                            )}
                        </Link>
                    );
                })}
            </motion.nav>
        </div>
    );
}
