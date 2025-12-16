// sanity/schemaTypes/menuCategory.ts
import { defineType, defineField } from "sanity";

const menuCategory = defineType({
    name: "menuCategory",
    title: "Menu Category",
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
            name: "displayOrder",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first in the menu.",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
            name: "icon",
            title: "Icon",
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
});

export default menuCategory;
