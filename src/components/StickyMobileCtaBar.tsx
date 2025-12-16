"use client";

import Link from "next/link";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyMobileCtaBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-buddas-brown/10 p-4 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-t-2xl">
            <div className="grid grid-cols-3 gap-2">
                <Button asChild variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-xs text-buddas-brown hover:bg-buddas-brown/5">
                    <Link href="/menu">
                        <UtensilsCrossed className="w-5 h-5 text-buddas-gold" />
                        <span>Menu</span>
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-xs text-buddas-brown hover:bg-buddas-brown/5">
                    <Link href="/locations">
                        <MapPin className="w-5 h-5 text-buddas-teal" />
                        <span>Locations</span>
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-xs text-buddas-brown hover:bg-buddas-brown/5">
                    <a href="tel:+19091234567"> {/* TODO: Replace with dynamic phone */}
                        <Phone className="w-5 h-5 text-buddas-orange" />
                        <span>Call</span>
                    </a>
                </Button>
            </div>
        </div>
    );
}
