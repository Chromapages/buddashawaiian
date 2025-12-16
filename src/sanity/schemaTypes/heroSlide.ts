import { defineType, defineField } from "sanity";

const heroSlide = defineType({
    name: "heroSlide",
    title: "Hero Slide",
    type: "object",
    fields: [
        defineField({
            name: "badge",
            title: "Badge Text",
            type: "string",
            description: "Small badge text above the headline (e.g. 'Authentic Hawaiian Flavor')",
            initialValue: "Authentic Hawaiian Flavor",
        }),
        defineField({
            name: "title",
            title: "Headline",
            type: "string",
            description: "Main headline text. Use 'Aloha' in the text to highlight it.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "text",
            rows: 3,
            description: "Subheading or description text.",
        }),
        defineField({
            name: "image",
            title: "Background Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "primaryCtaLabel",
            title: "Primary CTA Label",
            type: "string",
            initialValue: "View Menu",
        }),
        defineField({
            name: "primaryCtaLink",
            title: "Primary CTA Link",
            type: "string",
            initialValue: "/menu",
        }),
        defineField({
            name: "secondaryCtaLabel",
            title: "Secondary CTA Label",
            type: "string",
            initialValue: "See Rewards",
        }),
        defineField({
            name: "secondaryCtaLink",
            title: "Secondary CTA Link",
            type: "string",
            initialValue: "/rewards",
        }),
        defineField({
            name: "features",
            title: "Features List",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Fresh Ingredients", value: "Fresh Ingredients" },
                    { title: "Daily Baked Goods", value: "Daily Baked Goods" },
                    { title: "Family Recipes", value: "Family Recipes" },
                    { title: "Locally Sourced", value: "Locally Sourced" },
                    { title: "Authentic Taste", value: "Authentic Taste" },
                ],
            },
            initialValue: ["Fresh Ingredients", "Daily Baked Goods", "Family Recipes"],
        }),
    ],
});

export default heroSlide;
