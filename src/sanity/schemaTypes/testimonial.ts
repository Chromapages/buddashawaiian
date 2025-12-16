// sanity/schemaTypes/testimonial.ts
import { defineType, defineField } from "sanity";

const testimonial = defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        defineField({
            name: "approved",
            title: "Approved",
            type: "boolean",
            description: "Only approved testimonials will be shown on the website.",
            initialValue: false,
        }),
        defineField({
            name: "spam",
            title: "Mark as Spam",
            type: "boolean",
            initialValue: false,
        }),
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
        defineField({
            name: "googleReview",
            title: "Google Review Details",
            type: "object",
            description: "Optional fields when the quote comes from Google Reviews.",
            fields: [
                defineField({
                    name: "reviewUrl",
                    title: "Review URL",
                    type: "url",
                    description: "Direct link to the Google review.",
                }),
                defineField({
                    name: "foodRating",
                    title: "Food Rating",
                    type: "number",
                    validation: (Rule) => Rule.min(0).max(5),
                }),
                defineField({
                    name: "serviceRating",
                    title: "Service Rating",
                    type: "number",
                    validation: (Rule) => Rule.min(0).max(5),
                }),
                defineField({
                    name: "atmosphereRating",
                    title: "Atmosphere Rating",
                    type: "number",
                    validation: (Rule) => Rule.min(0).max(5),
                }),
            ],
        }),
    ],
});

export default testimonial;
