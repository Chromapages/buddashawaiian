// sanity/schemaTypes/siteSettings.ts
import { defineType, defineField } from "sanity";

const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Site Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
        }),
        defineField({
            name: "heroSlides",
            title: "Home Page Hero Slides",
            type: "array",
            of: [{ type: "heroSlide" }],
            description: "Add one or more slides for the homepage hero section.",
        }),
        defineField({
            name: "primaryPhone",
            title: "Primary Phone",
            type: "string",
        }),
        defineField({
            name: "primaryEmail",
            title: "Primary Email",
            type: "string",
        }),
        defineField({
            name: "defaultOrderingUrl",
            title: "Default Ordering URL",
            type: "url",
        }),
        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [
                defineField({
                    name: "socialLink",
                    title: "Social Link",
                    type: "object",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Instagram", value: "instagram" },
                                    { title: "TikTok", value: "tiktok" },
                                    { title: "Facebook", value: "facebook" },
                                    { title: "X (Twitter)", value: "x" },
                                    { title: "YouTube", value: "youtube" },
                                    { title: "Other", value: "other" },
                                ],
                            },
                        }),
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.uri({ allowRelative: false }),
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "headerCtaStyle",
            title: "Header CTA Button Style",
            type: "string",
            options: {
                list: [
                    { title: "Gold (Primary)", value: "gold" },
                    { title: "Orange", value: "orange" },
                    { title: "Teal", value: "teal" },
                    { title: "Brown", value: "brown" },
                    { title: "Cream", value: "cream" },
                    { title: "Thanksgiving", value: "thanksgiving" },
                    { title: "Christmas", value: "christmas" },
                    { title: "Dark", value: "dark" },
                ],
            },
            initialValue: "gold",
        }),
        defineField({
            name: "seo",
            title: "Default SEO",
            type: "seo",
        }),
    ],
});

export default siteSettings;
