"use client";

import { usePathname } from "next/navigation";
import { AnnouncementBar } from "./AnnouncementBar";

interface ConditionalAnnouncementProps {
    data?: any;
}

export function ConditionalAnnouncement({ data }: ConditionalAnnouncementProps) {
    const pathname = usePathname();

    // Don't render announcement bar on Sanity Studio pages
    if (pathname?.startsWith("/studio")) {
        return null;
    }

    return <AnnouncementBar data={data} />;
}
