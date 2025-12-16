import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, quote, rating, location } = body;

        if (!name || !quote) {
            return NextResponse.json(
                { error: "Name and quote are required" },
                { status: 400 }
            );
        }

        const token = process.env.SANITY_API_TOKEN;

        if (!token) {
            console.error("Missing SANITY_API_TOKEN");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        const client = createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn,
            token, // Important: using the write token
        });

        const doc = {
            _type: "testimonial",
            name,
            quote,
            rating: Number(rating) || 5,
            roleOrLocation: location,
            source: "Website Submission",
        };

        const result = await client.create(doc);

        return NextResponse.json({ success: true, id: result._id });
    } catch (error) {
        console.error("Error submitting testimonial:", error);
        return NextResponse.json(
            { error: "Failed to submit testimonial" },
            { status: 500 }
        );
    }
}
