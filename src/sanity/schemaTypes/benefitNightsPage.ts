import { defineType, defineField } from "sanity";

const benefitNightsPage = defineType({
    name: "benefitNightsPage",
    title: "Events & Fundraising",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "string",
        }),
        defineField({
            name: "heroBadge",
            title: "Hero Badge Text",
            type: "string",
            description: "e.g. \"Full Service Event Planning\"",
            initialValue: "Full Service Event Planning"
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
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
            name: "heroCtaLabel",
            title: "Hero CTA Label",
            type: "string",
        }),
        defineField({
            name: "heroCtaLink",
            title: "Hero CTA Link",
            type: "url",
        }),
        defineField({
            name: "trustedBy",
            title: "Trusted By (Partners)",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Section Title",
                    type: "string",
                    initialValue: "Event Partners & Corporate Clients",
                }),
                defineField({
                    name: "partners",
                    title: "Partners",
                    type: "array",
                    of: [
                        defineField({
                            name: "partner",
                            title: "Partner",
                            type: "object",
                            fields: [
                                defineField({ name: "name", title: "Name", type: "string" }),
                                defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "headlinePercentage",
            title: "Headline Percentage / Offer",
            type: "string",
            description: "e.g., \"20% Giveback\"",
        }),
        defineField({
            name: "benefitsSectionTitle",
            title: "Benefits Section Title",
            type: "string",
            initialValue: "Designed for Every Occasion"
        }),
        defineField({
            name: "benefitsSectionSubtitle",
            title: "Benefits Section Subtitle",
            type: "text",
            rows: 2,
            initialValue: "We don't just provide food; we provide an atmosphere. Choose the category that best fits your upcoming event."
        }),
        defineField({
            name: "benefits",
            title: "Benefits / Perks (Why Host With Us)",
            type: "array",
            of: [
                defineField({
                    name: "benefit",
                    title: "Benefit",
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
            name: "howItWorksSectionTitle",
            title: "How It Works Section Title",
            type: "string",
            initialValue: "Everything You Need"
        }),
        defineField({
            name: "howItWorksSectionSubtitle",
            title: "How It Works Section Subtitle",
            type: "text",
            rows: 2,
            initialValue: "Comprehensive event services so you can enjoy the moment."
        }),
        defineField({
            name: "howItWorks",
            title: "How It Works",
            type: "array",
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
            name: "statsSection",
            title: "Stats / Break Section (Experience the Art of Food)",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                    initialValue: "Experience the Art of Food",
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                    rows: 3,
                    initialValue: "Our team of world-class chefs uses only the freshest, locally sourced ingredients to create masterpieces on every plate.",
                }),
                defineField({
                    name: "image",
                    title: "Background Image",
                    type: "image",
                    options: { hotspot: true },
                }),
                defineField({
                    name: "stat1Value",
                    title: "Stat 1 Value",
                    type: "string",
                    initialValue: "500+",
                }),
                defineField({
                    name: "stat1Label",
                    title: "Stat 1 Label",
                    type: "string",
                    initialValue: "Events Annually",
                }),
                defineField({
                    name: "stat2Value",
                    title: "Stat 2 Value",
                    type: "string",
                    initialValue: "4.9",
                }),
                defineField({
                    name: "stat2Label",
                    title: "Stat 2 Label",
                    type: "string",
                    initialValue: "/ 5 Client Satisfaction",
                }),
            ],
        }),
        defineField({
            name: "eventTypes",
            title: "Event Types",
            type: "array",
            description: "Cards showcasing different types of events (e.g., Fundraisers, Catering, Private Parties)",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "string",
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                        }),
                        defineField({
                            name: "ctaLabel",
                            title: "Button Label",
                            type: "string",
                        }),
                        defineField({
                            name: "ctaLink",
                            title: "Button Link",
                            type: "string",
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: "fundraisingProgram",
            title: "Fundraising Program Details",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Section Title",
                    type: "string",
                    initialValue: "Fundraising Made Delicious"
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                    initialValue: "Host a Benefit Night with us and we’ll donate 20% of sales back to your cause. It’s the easiest way to raise funds for your school, team, or non-profit."
                }),
                defineField({
                    name: "percentage",
                    title: "Giveback Percentage",
                    type: "string",
                    initialValue: "20%"
                }),
                defineField({
                    name: "programImage",
                    title: "Program Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    }
                }),
                defineField({
                    name: "flyerDownload",
                    title: "Flyer/Info PDF",
                    type: "file",
                    description: "Optional downloadable flyer for the program"
                })
            ]
        }),
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "quote",
                            title: "Quote",
                            type: "text",
                            rows: 3
                        }),
                        defineField({
                            name: "author",
                            title: "Author/Organization",
                            type: "string",
                        }),
                        defineField({
                            name: "role",
                            title: "Role/Event Type",
                            type: "string",
                            description: "e.g. 'PTA President' or 'Wedding Reception'"
                        }),
                        defineField({
                            name: "image",
                            title: "Author Image",
                            type: "image",
                            options: { hotspot: true }
                        })
                    ]
                }
            ]
        }),
        defineField({
            name: "pastEventsGallery",
            title: "Past Events Gallery",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Gallery Title",
                    type: "string",
                    initialValue: "Memories Made with Buddas"
                }),
                defineField({
                    name: "images",
                    title: "Images",
                    type: "array",
                    of: [{ type: "image", options: { hotspot: true } }],
                    options: {
                        layout: 'grid'
                    }
                })
            ]
        }),

        defineField({
            name: "packages",
            title: "Catering Packages",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            title: "Package Name",
                            type: "string",
                            description: "e.g. 'Ohana Buffet', 'Island Boxed Lunch'"
                        }),
                        defineField({
                            name: "price",
                            title: "Price",
                            type: "string",
                            description: "e.g. '$25 / person'"
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 3
                        }),
                        defineField({
                            name: "features",
                            title: "Included Features",
                            type: "array",
                            of: [{ type: "string" }]
                        }),
                        defineField({
                            name: "highlight",
                            title: "Highlight (Best Value)",
                            type: "boolean",
                            initialValue: false
                        })
                    ]
                }
            ]
        }),
        defineField({
            name: "closingCta",
            title: "Closing CTA",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                }),
                defineField({
                    name: "subtitle",
                    title: "Subtitle",
                    type: "string",
                }),
                defineField({
                    name: "buttonLabel",
                    title: "Button Label",
                    type: "string",
                }),
                defineField({
                    name: "buttonLink",
                    title: "Button Link",
                    type: "string",
                }),
            ]
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "seo",
        }),
    ],
});

export default benefitNightsPage;
