import { defineType, defineField } from "sanity";

const promotion = defineType({
    name: "promotion",
    title: "Promotion",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
            description: "e.g. 'Lunch Rush Special', 'Double Points Day'",
        }),
        defineField({
            name: "badge",
            title: "Badge Text",
            type: "string",
            description: "e.g. 'EXPIRES IN 2H', 'REWARDS MEMBER', 'NEW ARRIVAL'",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
            description: "Short promo description",
        }),
        defineField({
            name: "promoCode",
            title: "Promo Code (Optional)",
            type: "string",
            description: "e.g. 'ALOHA20'",
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
                    { title: "Red (Urgency)", value: "red" },
                    { title: "Teal (Loyalty)", value: "teal" },
                    { title: "Amber (New Item)", value: "amber" },
                ],
            },
            initialValue: "red",
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
