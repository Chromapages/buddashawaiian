// sanity/schemaTypes/buddalinksPage.ts
import { defineType, defineField } from "sanity";

const buddalinksPage = defineType({
    name: "buddalinksPage",
    title: "Buddalinks Link Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            initialValue: "Buddalinks",
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
            initialValue: { current: "links" },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "logo",
            title: "Logo",
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
            name: "heroImage",
            title: "Hero Background Image",
            type: "image",
            options: { hotspot: true },
            description: "Background image for the top band on the /links page.",
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
            description: "Optional short line under the logo.",
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
                                    { title: "Facebook", value: "facebook" },
                                    { title: "Instagram", value: "instagram" },
                                    { title: "Email", value: "email" },
                                    { title: "TikTok", value: "tiktok" },
                                    { title: "Other", value: "other" },
                                ],
                                layout: "radio",
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
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "primaryLinks",
            title: "Primary Links",
            type: "array",
            description: "Big buttons like Order Online, View Menu, Find Us.",
            of: [
                defineField({
                    name: "primaryLink",
                    title: "Primary Link",
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "style",
                            title: "Style",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Primary (Dark Teal)", value: "primary" },
                                    { title: "Gold", value: "gold" },
                                    { title: "White", value: "white" },
                                ],
                                layout: "dropdown",
                            },
                            initialValue: "primary",
                        }),
                        defineField({
                            name: "order",
                            title: "Order",
                            type: "number",
                            description: "Lower numbers appear first.",
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "promo",
            title: "Promo Banner",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                }),
                defineField({
                    name: "body",
                    title: "Body",
                    type: "text",
                    rows: 2,
                }),
                defineField({
                    name: "ctaLabel",
                    title: "CTA Label",
                    type: "string",
                }),
                defineField({
                    name: "ctaUrl",
                    title: "CTA URL",
                    type: "url",
                }),
            ],
        }),
        defineField({
            name: "featureTiles",
            title: "Feature Tiles",
            type: "array",
            of: [
                defineField({
                    name: "featureTile",
                    title: "Feature Tile",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
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
                        defineField({
                            name: "accent",
                            title: "Accent Color (fallback)",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Gold", value: "gold" },
                                    { title: "Teal", value: "teal" },
                                    { title: "Orange", value: "orange" },
                                ],
                                layout: "radio",
                            },
                            initialValue: "gold",
                        }),
                    ],
                }),
            ],
        }),
    ],
});

export default buddalinksPage;
