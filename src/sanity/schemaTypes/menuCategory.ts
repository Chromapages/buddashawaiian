// sanity/schemaTypes/menuCategory.ts
import { defineType, defineField } from "sanity";
import { List } from "lucide-react";

const menuCategory = defineType({
    name: "menuCategory",
    title: "Menu Category",
    icon: List,
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
            name: "visible",
            title: "Visible",
            type: "boolean",
            description: "Toggle to hide this category from the live menu without deleting it.",
            initialValue: true,
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
        defineField({
            name: "iconName",
            title: "Icon Name (Lucide)",
            type: "string",
            description: "Use a Lucide icon name like 'ChefHat', 'Utensils', 'Coffee'. See lucide.dev/icons.",
            options: {
                list: [
                    { title: "Chef Hat", value: "ChefHat" },
                    { title: "Utensils", value: "Utensils" },
                    { title: "Coffee", value: "Coffee" },
                    { title: "Cookie", value: "Cookie" },
                    { title: "Pizza", value: "Pizza" },
                    { title: "Sandwich", value: "Sandwich" },
                    { title: "Drumstick", value: "Drumstick" },
                    { title: "Fish", value: "Fish" },
                    { title: "Salad", value: "Salad" },
                    { title: "Leaf", value: "Leaf" },
                ],
            },
        }),
    ],
});

export default menuCategory;
