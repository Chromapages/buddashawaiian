import { defineType, defineField } from "sanity";
import { BookOpen } from "lucide-react";

const aboutPage = defineType({
    name: "aboutPage",
    title: "About Page",
    icon: BookOpen,
    type: "document",
    groups: [
        { name: "content", title: "Page Content", default: true },
        { name: "teaser", title: "Homepage Teaser" },
        { name: "seo", title: "SEO" },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            group: "content",
            validation: (Rule) => Rule.required(),
        }),

        // --- HOMEPAGE TEASER ---
        defineField({
            name: "teaserTitle",
            title: "Homepage Card Title",
            type: "string",
            group: "teaser",
            initialValue: "Our Roots",
        }),
        defineField({
            name: "teaserSnippet",
            title: "Homepage Card Snippet",
            type: "text",
            rows: 3,
            group: "teaser",
            description: "Short story version for the homepage (~200 chars).",
        }),
        defineField({
            name: "teaserBackgroundImage",
            title: "Homepage Background Image",
            type: "image",
            group: "teaser",
            options: { hotspot: true },
        }),
        defineField({
            name: "stats",
            title: "Homepage Stats",
            type: "array",
            group: "teaser",
            of: [{
                type: "object",
                fields: [
                    { name: "value", title: "Value", type: "string" }, // e.g., "10k+"
                    { name: "label", title: "Label", type: "string" }, // e.g., "Plates Served"
                ],
            }],
            validation: (Rule) => Rule.max(4).warning("Max 4 stats for design consistency."),
        }),

        // --- PAGE CONTENT ---
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
            group: "content",
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "string",
            group: "content",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            group: "content",
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
            name: "storyTitle",
            title: "Story Title",
            type: "string",
            group: "content",
        }),
        defineField({
            name: "storyContent",
            title: "Story Content",
            type: "array",
            group: "content",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "storyImage",
            title: "Story Image",
            type: "image",
            group: "content",
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
            name: "values",
            title: "Our Values",
            type: "array",
            group: "content",
            of: [
                defineField({
                    name: "value",
                    title: "Value",
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
            name: "team",
            title: "Meet the Team",
            type: "array",
            group: "content",
            of: [
                defineField({
                    name: "member",
                    title: "Team Member",
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "role",
                            title: "Role",
                            type: "string",
                        }),
                        defineField({
                            name: "bio",
                            title: "Bio",
                            type: "text",
                            rows: 3,
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
            name: "gallery",
            title: "Photo Gallery",
            type: "array",
            group: "content",
            of: [
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
        defineField({
            name: "seo",
            title: "SEO",
            type: "seo",
            group: "seo",
        }),
    ],
});

export default aboutPage;
