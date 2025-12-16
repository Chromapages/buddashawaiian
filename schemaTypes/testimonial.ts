// sanity/schemaTypes/testimonial.ts
import { defineType, defineField } from "sanity";

const testimonial = defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "roleOrLocation",
            title: "Role / Location",
            type: "string",
        }),
        defineField({
            name: "quote",
            title: "Quote",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            description: "Optional rating (e.g., 4.8)",
            validation: (Rule) => Rule.min(0).max(5),
        }),
        defineField({
            name: "source",
            title: "Source",
            type: "string",
            description: "e.g., Google, Yelp.",
        }),
    ],
});

export default testimonial;
