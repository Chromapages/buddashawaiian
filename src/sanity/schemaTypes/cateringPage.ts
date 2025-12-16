import { defineType, defineField } from "sanity";

const cateringPage = defineType({
    name: "cateringPage",
    title: "Catering Page",
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
        // Events Section
        defineField({
            name: "eventsTitle",
            title: "Events Title",
            type: "string",
            initialValue: "Celebrate with Us",
        }),
        defineField({
            name: "eventsDescription",
            title: "Events Description",
            type: "text",
            rows: 3,
            initialValue: "Reserve our dining area or outdoor patio for your special occasion. We handle the food, you enjoy the party.",
        }),
        defineField({
            name: "eventsImage",
            title: "Events Image",
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
            name: "eventsCtaLabel",
            title: "Events CTA Label",
            type: "string",
            initialValue: "Book an Event",
        }),
        defineField({
            name: "eventsCtaLink",
            title: "Events CTA Link",
            type: "url",
        }),
        defineField({
            name: "introduction",
            title: "Introduction Text",
            type: "text",
            rows: 3,
            description: "A welcoming message introducing the catering services.",
        }),
        defineField({
            name: "serviceTypes",
            title: "Service Types",
            type: "array",
            of: [
                defineField({
                    name: "serviceType",
                    title: "Service Type",
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
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "menuHighlights",
            title: "Menu Highlights / Packages",
            type: "array",
            of: [
                defineField({
                    name: "item",
                    title: "Item",
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
                            name: "price",
                            title: "Price / Price Range",
                            type: "string",
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
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

export default cateringPage;
