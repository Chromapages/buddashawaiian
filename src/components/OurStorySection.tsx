import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { ArrowRight } from "lucide-react";

interface OurStorySectionProps {
    title: string;
    content: any;
    mainImage: any;
    secondaryImage?: any;
}

export function OurStorySection({ title, content, mainImage, secondaryImage }: OurStorySectionProps) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Text Column (Spans 5 cols) */}
                    <div className="lg:col-span-5 relative z-10">
                        <div className="relative">
                            {/* Decorative Arrow */}
                            <div className="hidden lg:block absolute -right-24 top-20 text-[#54BFA5] rotate-12 opacity-80">
                                <svg width="80" height="40" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 25 C 30 10, 70 10, 90 25" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                                    <path d="M85 20 L 90 25 L 85 30" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </div>

                            <h2 className="font-display text-5xl md:text-6xl text-[#3A2F2B] mb-8 leading-tight">
                                {title}
                            </h2>

                            <div className="prose prose-xl md:prose-2xl text-[#3A2F2B]/80 prose-p:leading-relaxed prose-headings:font-display prose-headings:text-[#3A2F2B]">
                                {/* Drop Cap Styling via CSS class or inline logic */}
                                <div className="first-letter:float-left first-letter:text-7xl first-letter:font-display first-letter:text-[#3A2F2B] first-letter:mr-3 first-letter:mt-[-10px]">
                                    <PortableText value={content} />
                                </div>
                            </div>

                            {/* Founder Signature */}
                            <div className="mt-12 pt-8 border-t border-[#3A2F2B]/10">
                                <p className="font-handwriting text-3xl text-[#3A2F2B] rotate-[-2deg]">
                                    The Budda's Family
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Images Column (Spans 7 cols) */}
                    <div className="lg:col-span-7 relative mt-12 lg:mt-0">
                        {/* Gold Blob Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E9C559]/10 rounded-full blur-3xl -z-10" />

                        <div className="relative h-[600px] w-full">
                            {/* Image A: Large Vertical */}
                            {mainImage?.asset && (
                                <div className="absolute top-0 right-0 w-[75%] h-[85%] rounded-2xl overflow-hidden shadow-xl z-10 transform hover:scale-[1.02] transition-transform duration-700">
                                    <Image
                                        src={urlFor(mainImage).width(800).height(1000).url()}
                                        alt="Our Story Main"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Image B: Smaller Landscape (Overlapping) */}
                            {secondaryImage?.asset && (
                                <div className="absolute bottom-0 left-0 w-[60%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white transform hover:-translate-y-2 transition-transform duration-700">
                                    <Image
                                        src={urlFor(secondaryImage).width(600).height(400).url()}
                                        alt="Our Story Secondary"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
