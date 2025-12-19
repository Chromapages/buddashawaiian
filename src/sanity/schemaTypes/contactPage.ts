import { defineType, defineField } from "sanity";
import { Mail } from "lucide-react";

const contactPage = defineType({
    name: "contactPage",
    title: "Contact Page",
    icon: Mail,
    type: "document",
    groups: [
        { name: "content", title: "Page Content", default: true },
        { name: "form", title: "Form Configuration" },
        { name: "seo", title: "SEO" },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Internal Title",
            type: "string",
            group: "content",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
            description: "Main headline (e.g., 'Questions? We're Here, Ohana.')",
            group: "content",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "text",
            rows: 2,
            description: "Subtitle text below the headline",
            group: "content",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
            group: "content",
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "formTitle",
            title: "Form Section Title",
            type: "string",
            initialValue: "Send us a message",
            group: "form",
        }),
        defineField({
            name: "formSubtitle",
            title: "Form Section Subtitle",
            type: "string",
            initialValue: "Fill out the form below and we'll get back to you within 24 hours.",
            group: "form",
        }),
        defineField({
            name: "eventTypes",
            title: "Event Types",
            type: "array",
            of: [{ type: "string" }],
            description: "Options for the 'Event Type' dropdown",
            group: "form",
            initialValue: ["Wedding Catering", "Corporate Event", "Social Party", "Private Chef", "Other"],
        }),
        defineField({
            name: "faq",
            title: "Frequently Asked Questions",
            type: "array",
            group: "content",
            of: [
                defineField({
                    name: "faqItem",
                    title: "FAQ Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "question",
                            title: "Question",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "answer",
                            title: "Answer",
                            type: "text",
                            rows: 3,
                            validation: (Rule) => Rule.required(),
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

export default contactPage;
