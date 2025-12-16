"use client";

import * as React from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function AccessibleMenuToggle() {
    const [isAccessible, setIsAccessible] = React.useState(false);

    React.useEffect(() => {
        if (isAccessible) {
            document.documentElement.classList.add("accessible-mode");
        } else {
            document.documentElement.classList.remove("accessible-mode");
        }
    }, [isAccessible]);

    return (
        <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm border border-buddas-brown/10">
            <Eye className="w-4 h-4 text-buddas-brown" />
            <Label htmlFor="accessible-mode" className="text-sm font-medium text-buddas-brown cursor-pointer">
                Accessible View
            </Label>
            <Switch
                id="accessible-mode"
                checked={isAccessible}
                onCheckedChange={setIsAccessible}
            />
        </div>
    );
}
