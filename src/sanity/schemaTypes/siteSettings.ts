// sanity/schemaTypes/siteSettings.ts
import { defineType, defineField } from "sanity";
import { Settings } from "lucide-react";

const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    icon: Settings,
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
            validation: (Rule) => Rule.max(60).warning("Taglines should be punchy!"),
        }),
        // Announcement Bar
        defineField({
            name: "announcement",
            title: "Announcement Bar",
            type: "object",
            options: { collapsible: true, collapsed: false },
            fields: [
                defineField({
                    name: "isActive",
                    title: "Active",
                    type: "boolean",
                    initialValue: false,
                }),
                defineField({
                    name: "text",
                    title: "Message Text",
                    type: "string",
                    validation: (Rule) => Rule.max(60).warning("Keep announcements short for mobile."),
                }),
                defineField({
                    name: "link",
                    title: "Link (Optional)",
                    type: "url",
                }),
                defineField({
                    name: "colorTheme",
                    title: "Color Theme",
                    type: "string",
                    description: "Colors from official Buddas Brand Guidelines",
                    options: {
                        list: [
                            { title: "Base Teal (#54BFA5)", value: "teal" },
                            { title: "Dark Teal (#1C5F56)", value: "dark-teal" },
                            { title: "Island Gold (#E9C559)", value: "gold" },
                            { title: "Sunset Orange (#D36200)", value: "orange" },
                            { title: "Cocoa Brown (#5A3A1F)", value: "brown" },
                        ],
                    },
                    initialValue: "teal",
                }),
            ],
        }),
        defineField({
            name: "favicon",
            title: "Favicon",
            type: "image",
            description: "Icon used for browser tabs and bookmarks.",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            description: "Logo image for the header/navbar.",
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
            name: "headerCtaStyle",
            title: "Header CTA Style",
            type: "string",
            description: "Controls the color of the 'Order Online' button in the header. Colors from official Buddas Brand Guidelines.",
            options: {
                list: [
                    { title: "Base Teal (#54BFA5)", value: "teal" },
                    { title: "Dark Teal (#1C5F56)", value: "dark-teal" },
                    { title: "Island Gold (#E9C559)", value: "gold" },
                    { title: "Buddas Cream (#FFF8E8)", value: "cream" },
                    { title: "Cocoa Brown (#5A3A1F)", value: "brown" },
                    { title: "Sunset Orange (#D36200)", value: "orange" },
                ],
                layout: "radio",
            },
            initialValue: "teal",
        }),
        defineField({
            name: "heroSlides",
            title: "Home Page Hero Slides",
            type: "array",
            of: [{ type: "heroSlide" }],
            description: "Add one or more slides for the homepage hero section.",
        }),
        defineField({
            name: "mainNavigation",
            title: "Main Navigation",
            type: "array",
            description: "Links to show in the header navigation.",
            of: [
                defineField({
                    name: "navItem",
                    title: "Nav Item",
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
                            type: "string",
                            description: "Relative path (e.g. /menu) or full URL.",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: "label",
                            subtitle: "url",
                        },
                    },
                }),
            ],
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
            name: "seo",
            title: "Default SEO",
            type: "seo",
        }),
    ],
});

export default siteSettings;
