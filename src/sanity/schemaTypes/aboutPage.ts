import { defineType, defineField } from "sanity";

const aboutPage = defineType({
    name: "aboutPage",
    title: "About Page",
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
            name: "storyTitle",
            title: "Story Title",
            type: "string",
        }),
        defineField({
            name: "storyContent",
            title: "Story Content",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "storyImage",
            title: "Story Image",
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
            name: "values",
            title: "Our Values",
            type: "array",
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
        }),
    ],
});

export default aboutPage;
