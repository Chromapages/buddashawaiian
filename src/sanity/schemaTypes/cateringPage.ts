import { defineType, defineField } from "sanity";
import { ChefHat } from "lucide-react";

const cateringPage = defineType({
    name: "cateringPage",
    title: "Catering Page",
    icon: ChefHat,
    type: "document",
    groups: [
        { name: "content", title: "Page Content", default: true },
        { name: "teaser", title: "Homepage Teaser" },
        { name: "menu", title: "Menu & Services" },
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
            group: "content",
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "string",
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
            name: "heroCtaLabel",
            title: "Hero CTA Label",
            type: "string",
            group: "content",
        }),
        defineField({
            name: "heroCtaLink",
            title: "Hero CTA Link",
            type: "url",
            group: "content",
        }),
        defineField({
            name: "introduction",
            title: "Introduction Text",
            type: "text",
            rows: 3,
            group: "content",
            description: "A welcoming message introducing the catering services.",
        }),

        // --- HOMEPAGE TEASER CONFIG (MOVED TO TOP LEVEL TO RESTORE DATA) ---
        // Call to Action Badges
        defineField({
            name: "teaserBadge",
            title: "Catering Badge",
            type: "string",
            group: "teaser",
            initialValue: "The Office Hero",
            validation: (Rule) => Rule.max(20).warning("Keep badges short."),
        }),
        defineField({
            name: "eventsBadge",
            title: "Events Badge",
            type: "string",
            group: "teaser",
            initialValue: "Private Parties",
            validation: (Rule) => Rule.max(20).warning("Keep badges short."),
        }),
        defineField({
            name: "communityBadge",
            title: "Community Badge",
            type: "string",
            group: "teaser",
            initialValue: "Benefit Nights",
            validation: (Rule) => Rule.max(20).warning("Keep badges short."),
        }),

        // CATERING CARD
        defineField({
            name: "cateringTitle",
            title: "Catering Card Title",
            type: "string",
            group: "teaser",
            initialValue: "Feed the Whole Crew",
        }),
        defineField({
            name: "cateringDescription",
            title: "Catering Card Description",
            type: "text",
            group: "teaser",
            rows: 2,
            initialValue: "From office lunches to wedding receptions, bring the aloha spirit to your next gathering.",
        }),
        defineField({
            name: "cateringImage",
            title: "Catering Card Image",
            type: "image",
            group: "teaser",
            options: { hotspot: true },
        }),
        defineField({
            name: "cateringCtaLabel",
            title: "Catering CTA Label",
            type: "string",
            group: "teaser",
            initialValue: "View Catering",
        }),
        defineField({
            name: "cateringCtaLink",
            title: "Catering CTA Link",
            type: "url",
            group: "teaser",
        }),

        // EVENTS CARD
        defineField({
            name: "eventsTitle",
            title: "Events Card Title",
            type: "string",
            group: "teaser",
            initialValue: "Celebrate with Us",
        }),
        defineField({
            name: "eventsDescription",
            title: "Events Card Description",
            type: "text",
            group: "teaser",
            rows: 2,
            initialValue: "Reserve our dining area or outdoor patio for your special occasion.",
        }),
        defineField({
            name: "eventsImage",
            title: "Events Card Image",
            type: "image",
            group: "teaser",
            options: { hotspot: true },
        }),
        defineField({
            name: "eventsCtaLabel",
            title: "Events CTA Label",
            type: "string",
            group: "teaser",
            initialValue: "Book an Event",
        }),
        defineField({
            name: "eventsCtaLink",
            title: "Events CTA Link",
            type: "url",
            group: "teaser",
        }),

        // COMMUNITY CARD
        defineField({
            name: "communityTitle",
            title: "Community Card Title",
            type: "string",
            group: "teaser",
            initialValue: "Fundraising & Community",
        }),
        defineField({
            name: "communityDescription",
            title: "Community Card Description",
            type: "text",
            group: "teaser",
            rows: 2,
            initialValue: "Partner with us for benefit nights, school fundraisers, and community events.",
        }),
        defineField({
            name: "communityImage",
            title: "Community Card Image",
            type: "image",
            group: "teaser",
            options: { hotspot: true },
        }),
        defineField({
            name: "communityCtaLabel",
            title: "Community CTA Label",
            type: "string",
            group: "teaser",
            initialValue: "Learn More",
        }),
        defineField({
            name: "communityCtaLink",
            title: "Community CTA Link",
            type: "url",
            group: "teaser",
        }),

        // --- MENU SECTION ---
        defineField({
            name: "serviceTypes",
            title: "Service Types",
            type: "array",
            group: "menu",
            of: [
                defineField({
                    name: "serviceType",
                    title: "Service Type",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 2,
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "menuHighlights",
            title: "Menu Highlights / Packages",
            type: "array",
            group: "menu",
            of: [
                defineField({
                    name: "item",
                    title: "Item",
                    type: "object",
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
                            rows: 2,
                        }),
                        defineField({
                            name: "price",
                            title: "Price / Price Range",
                            type: "string",
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "howItWorks",
            title: "How It Works",
            type: "array",
            group: "menu",
            of: [
                defineField({
                    name: "step",
                    title: "Step",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 2,
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "faq",
            title: "FAQ",
            type: "array",
            group: "menu",
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

export default cateringPage;
