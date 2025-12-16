"use client";

import { usePathname } from "next/navigation";
import { NewNavbar } from "@/components/NewNavbar";

interface ConditionalHeaderProps {
    logoUrl?: string;
    orderUrl?: string;
    ctaStyle?: string;
}

export function ConditionalHeader({ logoUrl, orderUrl, ctaStyle }: ConditionalHeaderProps) {
    const pathname = usePathname();

    // Don't render header on Sanity Studio pages
    if (pathname?.startsWith("/studio")) {
        return null;
    }

    return <NewNavbar logoUrl={logoUrl} orderUrl={orderUrl} ctaStyle={ctaStyle} />;
}
