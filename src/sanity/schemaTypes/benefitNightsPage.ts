import { defineType, defineField } from "sanity";

const benefitNightsPage = defineType({
    name: "benefitNightsPage",
    title: "Benefit Nights Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "string",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "heroCtaLabel",
            title: "Hero CTA Label",
            type: "string",
        }),
        defineField({
            name: "heroCtaLink",
            title: "Hero CTA Link",
            type: "url",
        }),
        defineField({
            name: "headlinePercentage",
            title: "Headline Percentage / Offer",
            type: "string",
            description: "e.g., \"20% Giveback\"",
        }),
        defineField({
            name: "benefits",
            title: "Benefits / Perks (Why Host With Us)",
            type: "array",
            of: [
                defineField({
                    name: "benefit",
                    title: "Benefit",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 2,
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "howItWorks",
            title: "How It Works",
            type: "array",
            of: [
                defineField({
                    name: "step",
                    title: "Step",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 2,
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "faq",
            title: "FAQ",
            type: "array",
            of: [
                defineField({
                    name: "faqItem",
                    title: "FAQ Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "question",
                            title: "Question",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "answer",
                            title: "Answer",
                            type: "text",
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "seo",
        }),
    ],
});

export default benefitNightsPage;
