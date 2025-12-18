import { defineField, defineType } from "sanity";

export default defineType({
    name: "trustedBySection",
    title: "Trusted By Section",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Section Title",
            type: "string",
            initialValue: "Order Buddas on Your Favorite Apps",
        }),
        defineField({
            name: "platforms",
            title: "Platforms",
            type: "array",
            of: [
                defineField({
                    name: "platform",
                    title: "Platform",
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            title: "Name",
                            type: "string",
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                        }),
                        defineField({
                            name: "logo",
                            title: "Logo",
                            type: "image",
                            description: "Use SVG or high-quality WebP. Max 30KB. Monochromatic preferred for 'Trusted By' strips.",
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                    validation: (Rule) => Rule.required(),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
            validation: (Rule) => Rule.max(5),
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title || "Trusted By Section",
            };
        },
    },
});
