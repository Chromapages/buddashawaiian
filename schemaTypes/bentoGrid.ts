import { defineField, defineType } from "sanity";
import { Sparkles } from "lucide-react";

export default defineType({
    name: "bentoItem",
    title: "Bento Grid Item",
    type: "document",
    icon: Sparkles,
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
            rows: 3,
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "video",
            title: "Video URL (Optional)",
            type: "url",
            description: "Direct link to a loopable video (mp4)",
        }),
        defineField({
            name: "gridSize",
            title: "Grid Size",
            type: "string",
            options: {
                list: [
                    { title: "Small (1x1)", value: "1x1" },
                    { title: "Wide (2x1)", value: "2x1" },
                    { title: "Tall (1x2)", value: "1x2" },
                    { title: "Large (2x2)", value: "2x2" },
                ],
            },
            initialValue: "1x1",
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            name: "isBestSeller",
            title: "Best Seller?",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "gridSize",
            media: "image",
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: `Size: ${subtitle}`,
                media,
            };
        },
    },
});
