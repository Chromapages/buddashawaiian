import { defineType, defineField } from "sanity";

const rewardsPage = defineType({
    name: "rewardsPage",
    title: "Rewards Page",
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
            name: "benefits",
            title: "Benefits / Perks",
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
            name: "steps",
            title: "How It Works",
            type: "array",
            of: [
                defineField({
                    name: "step",
                    title: "Step",
                    type: "object",
                    fields: [
                        defineField({
                            name: "stepNumber",
                            title: "Step Number",
                            type: "number",
                        }),
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

export default rewardsPage;
