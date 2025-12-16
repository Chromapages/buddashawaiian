"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface HoursEntry {
    dayOfWeek: string; // "monday", "tuesday", etc.
    openTime: string; // "11:00 AM"
    closeTime: string; // "9:00 PM"
    isClosed?: boolean;
}

interface HoursStatusProps {
    hours: HoursEntry[];
}

export function HoursStatus({ hours }: HoursStatusProps) {
    const [status, setStatus] = useState<string>("Loading...");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const now = new Date();
        const currentDay = days[now.getDay()]; // getDay() returns 0 for Sunday

        const todayHours = hours?.find(h => h.dayOfWeek?.toLowerCase() === currentDay);

        if (!todayHours || todayHours.isClosed) {
            setStatus("Closed Today");
        } else {
            setStatus(`Today: ${todayHours.openTime} – ${todayHours.closeTime}`);
        }
    }, [hours]);

    if (!mounted) {
        return (
            <div className="flex items-center gap-2 opacity-90">
                <Clock className="w-3.5 h-3.5 text-zinc-900" />
                <span>Checking hours...</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 opacity-90">
            <Clock className="w-3.5 h-3.5 text-zinc-900" />
            <span>{status}</span>
        </div>
    );
}
