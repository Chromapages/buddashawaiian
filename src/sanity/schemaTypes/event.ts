import { defineField, defineType } from "sanity";

const event = defineType({
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Event Title",
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
            name: "date",
            title: "Date & Time",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            initialValue: "Buddas Hawaiian BBQ",
        }),
        defineField({
            name: "image",
            title: "Event Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "ctaLabel",
            title: "CTA Label (e.g. RSVP)",
            type: "string",
            initialValue: "RSVP Now"
        }),
        defineField({
            name: "ctaLink",
            title: "CTA Link (URL)",
            type: "url",
        }),
    ],
    preview: {
        select: {
            title: "title",
            date: "date",
            media: "image",
        },
        prepare({ title, date, media }) {
            return {
                title,
                subtitle: date ? new Date(date).toLocaleDateString() : "No date",
                media,
            };
        },
    },
});

export default event;
