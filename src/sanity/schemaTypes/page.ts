// sanity/schemaTypes/page.ts
import { defineType, defineField } from "sanity";

const page = defineType({
    name: "page",
    title: "Page",
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
            name: "contentBlocks",
            title: "Content Blocks",
            type: "array",
            of: [
                { type: "block" },
                // You can add custom section objects here later (imageSection, stats, etc.)
            ],
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "seo",
        }),
    ],
});

export default page;
