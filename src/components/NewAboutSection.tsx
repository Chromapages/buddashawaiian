import { toPlainText } from "@portabletext/react";
import Link from "next/link";

interface AboutData {
    storyTitle?: string;
    storyContent?: any[];
}

interface NewAboutSectionProps {
    aboutData?: AboutData;
}

export function NewAboutSection({ aboutData }: NewAboutSectionProps) {
    // Use Sanity data with fallbacks
    const title = aboutData?.storyTitle || "Our Roots";
    const backgroundImage =
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80";

    // Extract plain text from storyContent blocks, or use fallback
    const fullStoryText = aboutData?.storyContent
        ? toPlainText(aboutData.storyContent)
        : "Founded in 2024, Budda's Hawaiian started with a simple family recipe for Kalua Pork and a dream to share the spirit of Hawaii with Utah County. Located at the base of Mount Timpanogos, we blend traditional island flavors with the mountain lifestyle of Pleasant Grove.";

    // Truncate to ~200 characters for snippet
    const storySnippet = fullStoryText.length > 200
        ? fullStoryText.substring(0, 200).trim() + "..."
        : fullStoryText;

    return (
        <section
            id="about"
            className="relative py-24 2xl:py-32 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

            <div className="relative max-w-3xl 2xl:max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6 font-[family-name:var(--font-poppins)]">{title}</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    {storySnippet}
                </p>

                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium transition-colors"
                >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>

                <div className="mt-12 flex justify-center gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-semibold text-zinc-900 tracking-tight">10k+</div>
                        <div className="text-sm text-zinc-500 mt-1">Plates Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-semibold text-zinc-900 tracking-tight">4.9</div>
                        <div className="text-sm text-zinc-500 mt-1">Star Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-semibold text-zinc-900 tracking-tight">100%</div>
                        <div className="text-sm text-zinc-500 mt-1">Aloha Spirit</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
