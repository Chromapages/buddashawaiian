// sanity/schemaTypes/program.ts
import { defineType, defineField } from "sanity";

const program = defineType({
    name: "program",
    title: "Program",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
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
                    validation: (Rule) =>
                        Rule.required().error("Alt text is required for hero images."),
                }),
            ],
        }),
        defineField({
            name: "headlinePercentage",
            title: "Headline Percentage / Offer",
            type: "string",
            description: "e.g., \"Up to 25% Giveback\" or \"Free Budda Roll\".",
        }),
        defineField({
            name: "benefits",
            title: "Benefits",
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
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "steps",
            title: "How It Works – Steps",
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
            name: "packages",
            title: "Packages (Catering Only)",
            type: "array",
            of: [
                defineField({
                    name: "package",
                    title: "Package",
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            title: "Name",
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
                            name: "idealGroupSize",
                            title: "Ideal Group Size",
                            type: "string",
                            description: 'e.g., \"10–15\", \"20–30\"',
                        }),
                        defineField({
                            name: "priceRange",
                            title: "Price Range",
                            type: "string",
                            description: 'e.g., \"$12–$18 per person\"',
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
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
            name: "ctaLabel",
            title: "CTA Label",
            type: "string",
        }),
        defineField({
            name: "ctaHref",
            title: "CTA URL",
            type: "url",
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "seo",
        }),
    ],
});

export default program;
