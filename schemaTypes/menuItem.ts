// sanity/schemaTypes/menuItem.ts
import { defineType, defineField } from "sanity";

const menuItem = defineType({
    name: "menuItem",
    title: "Menu Item",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "menuCategory" }],
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
            description: "Enter price as a number (e.g., 11.99).",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "priceNote",
            title: "Price Note (Optional)",
            type: "string",
            description: 'For special cases like \"Market price\" or combo notes.',
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
                list: [
                    { title: "Spicy", value: "spicy" },
                    { title: "Keiki-friendly", value: "keikiFriendly" },
                    { title: "Popular", value: "popular" },
                    { title: "Vegetarian", value: "vegetarian" },
                    { title: "Gluten-friendly", value: "glutenFriendly" },
                ],
            },
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
                    validation: (Rule) =>
                        Rule.required().error("Alt text is required for menu item images."),
                }),
            ],
        }),
        defineField({
            name: "isSignature",
            title: "Signature Item",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "highlightOnHome",
            title: "Highlight on Home Page",
            type: "boolean",
            initialValue: false,
        }),
    ],
});

export default menuItem;
