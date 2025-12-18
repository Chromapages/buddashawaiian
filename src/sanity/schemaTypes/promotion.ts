import { defineType, defineField } from "sanity";
import { Megaphone } from "lucide-react";

const promotion = defineType({
    name: "promotion",
    title: "Promotion",
    icon: Megaphone,
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().max(40).warning("Keep titles punchy (max 40 chars)."),
            description: "e.g. 'Lunch Rush Special', 'Double Points Day'",
        }),
        defineField({
            name: "badge",
            title: "Badge Text",
            type: "string",
            validation: (Rule) => Rule.max(20).warning("Badges must be short (max 20 chars)."),
            description: "e.g. 'EXPIRES IN 2H', 'REWARDS MEMBER'",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule) => Rule.max(90).warning("Keep descriptions to 1-2 lines (max 90 chars)."),
            description: "Short promo description",
        }),
        defineField({
            name: "image",
            title: "Promo Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "promoCode",
            title: "Global Promo Code (Optional)",
            type: "string",
            description: "e.g. 'WEB20'. For tracked tracking (IG20, FB20), create separate records or use the description to guide staff (ROAS).",
        }),
        defineField({
            name: "ctaLabel",
            title: "CTA Button Label (Optional)",
            type: "string",
            description: "e.g. 'View Rewards', 'Order Now'",
        }),
        defineField({
            name: "ctaLink",
            title: "CTA Button Link (Optional)",
            type: "string",
            description: "e.g. '/rewards', '/menu'",
        }),
        defineField({
            name: "colorTheme",
            title: "Color Theme",
            type: "string",
            options: {
                list: [
                    { title: "Sunset Orange (Urgency/Limited)", value: "orange" },
                    { title: "Base Teal (Loyalty/Standard)", value: "teal" },
                    { title: "Island Gold (New/Value)", value: "gold" },
                    { title: "Cocoa Brown (Community/News)", value: "brown" },
                ],
            },
            initialValue: "teal",
        }),
        defineField({
            name: "campaignType",
            title: "Campaign Goal",
            type: "string",
            options: {
                list: [
                    { title: "Conversion (Hard Sell - BOGO/%)", value: "conversion" },
                    { title: "Crave (Food Focus)", value: "crave" },
                    { title: "Community (Events/News)", value: "community" },
                ]
            },
            initialValue: "conversion"
        }),
        defineField({
            name: "icon",
            title: "Background Icon",
            type: "string",
            options: {
                list: [
                    { title: "Clock/Stopwatch (Urgency)", value: "clock" },
                    { title: "Gift (Rewards)", value: "gift" },
                    { title: "Chef Hat (New Item)", value: "chefhat" },
                ],
            },
            initialValue: "clock",
            description: "Select the decorative background icon",
        }),
        defineField({
            name: "isActive",
            title: "Active",
            type: "boolean",
            initialValue: true,
            description: "Only active promotions will display on the homepage.",
        }),
        defineField({
            name: "displayOrder",
            title: "Display Order",
            type: "number",
            initialValue: 0,
            description: "Lower numbers appear first.",
        }),
    ],
    preview: {
        select: {
            title: "title",
            badge: "badge",
            isActive: "isActive",
        },
        prepare({ title, badge, isActive }) {
            return {
                title: title,
                subtitle: `${badge || "No badge"} • ${isActive ? "Active" : "Inactive"}`,
            };
        },
    },
});

export default promotion;
