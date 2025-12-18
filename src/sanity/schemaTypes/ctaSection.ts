import { defineType, defineField } from "sanity";
import { Megaphone } from "lucide-react";

export default defineType({
    name: "ctaSection",
    title: "Homepage CTA",
    icon: Megaphone,
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Headline",
            type: "string",
            initialValue: "Ready for Aloha?",
        }),
        defineField({
            name: "subtitle",
            title: "Subtext",
            type: "text",
            rows: 2,
            initialValue: "Skip the wait. Order your favorite plate lunches and bakery treats online for quick pickup.",
        }),
        defineField({
            name: "backgroundImage",
            title: "Background Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "primaryCta",
            title: "Primary CTA",
            type: "object",
            fields: [
                { name: "label", title: "Label", type: "string", initialValue: "Order Online" },
                { name: "url", title: "URL", type: "string" },
            ],
        }),
        defineField({
            name: "secondaryCta",
            title: "Secondary CTA",
            type: "object",
            fields: [
                { name: "label", title: "Label", type: "string", initialValue: "View Menu" },
                { name: "url", title: "URL", type: "string", initialValue: "/menu" },
            ],
        }),
    ],
});
