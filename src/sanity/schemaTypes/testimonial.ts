import { defineType, defineField } from "sanity";
import { MessageCircle } from "lucide-react";

const testimonial = defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    icon: MessageCircle,
    groups: [
        { name: "review", title: "Review", default: true },
        { name: "moderation", title: "Moderation" },
        { name: "source", title: "Source Details" },
    ],
    fields: [
        defineField({
            name: "approved",
            title: "Approved",
            type: "boolean",
            description: "Only approved testimonials will be shown on the website.",
            initialValue: false,
            group: "moderation",
        }),
        defineField({
            name: "spam",
            title: "Mark as Spam",
            type: "boolean",
            initialValue: false,
            group: "moderation",
        }),
        defineField({
            name: "featured",
            title: "Featured on Homepage",
            type: "boolean",
            initialValue: false,
            group: "moderation",
            description: "Show this testimonial in the homepage carousel.",
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            group: "review",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "roleOrLocation",
            title: "Role / Location",
            type: "string",
            group: "review",
        }),
        defineField({
            name: "avatar",
            title: "Customer Avatar",
            type: "image",
            group: "review",
            options: { hotspot: true },
        }),
        defineField({
            name: "date",
            title: "Date of Review",
            type: "date",
            group: "review",
            initialValue: () => new Date().toISOString().split('T')[0],
        }),
        defineField({
            name: "quote",
            title: "Quote",
            type: "text",
            rows: 3,
            group: "review",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            group: "review",
            description: "Optional rating (e.g., 4.8)",
            validation: (Rule) => Rule.min(0).max(5),
            initialValue: 5,
        }),
        defineField({
            name: "source",
            title: "Source",
            type: "string",
            group: "source",
            description: "e.g., Google, Yelp.",
        }),
        defineField({
            name: "googleReview",
            title: "Google Review Details",
            type: "object",
            group: "source",
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
