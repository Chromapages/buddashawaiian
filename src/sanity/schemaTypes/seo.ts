// sanity/schemaTypes/seo.ts
import { defineType, defineField } from "sanity";

const seo = defineType({
    name: "seo",
    title: "SEO",
    type: "object",
    fields: [
        defineField({
            name: "metaTitle",
            title: "Meta Title",
            type: "string",
            validation: (Rule) => Rule.max(60),
        }),
        defineField({
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.max(160),
        }),
        defineField({
            name: "ogImage",
            title: "Open Graph Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    validation: (Rule) =>
                        Rule.required().error("Alt text is required for OG images."),
                }),
            ],
        }),
    ],
});

export default seo;
