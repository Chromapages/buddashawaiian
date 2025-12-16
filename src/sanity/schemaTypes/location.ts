// sanity/schemaTypes/location.ts
import { defineType, defineField } from "sanity";

const location = defineType({
    name: "location",
    title: "Location",
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
            name: "addressLine1",
            title: "Address Line 1",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "addressLine2",
            title: "Address Line 2",
            type: "string",
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "state",
            title: "State",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "zip",
            title: "ZIP Code",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string",
        }),
        defineField({
            name: "hours",
            title: "Hours",
            type: "array",
            of: [
                defineField({
                    name: "hoursEntry",
                    title: "Hours Entry",
                    type: "object",
                    fields: [
                        defineField({
                            name: "dayOfWeek",
                            title: "Day of Week",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Monday", value: "monday" },
                                    { title: "Tuesday", value: "tuesday" },
                                    { title: "Wednesday", value: "wednesday" },
                                    { title: "Thursday", value: "thursday" },
                                    { title: "Friday", value: "friday" },
                                    { title: "Saturday", value: "saturday" },
                                    { title: "Sunday", value: "sunday" },
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "openTime",
                            title: "Open Time",
                            type: "string",
                            description: 'e.g., \"11:00 AM\"',
                        }),
                        defineField({
                            name: "closeTime",
                            title: "Close Time",
                            type: "string",
                            description: 'e.g., \"9:00 PM\"',
                        }),
                        defineField({
                            name: "isClosed",
                            title: "Closed",
                            type: "boolean",
                            initialValue: false,
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "mapUrl",
            title: "Google Maps URL",
            type: "url",
        }),
        defineField({
            name: "orderingUrl",
            title: "Ordering URL (Optional)",
            type: "url",
        }),
        defineField({
            name: "isPrimaryLocation",
            title: "Primary Location",
            type: "boolean",
            initialValue: false,
        }),
    ],
});

export default location;
