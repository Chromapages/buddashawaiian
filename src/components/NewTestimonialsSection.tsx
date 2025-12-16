"use client";

import { Star, Quote, X, Loader2, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Testimonial {
    _id: string;
    name: string;
    roleOrLocation?: string;
    quote: string;
    rating?: number;
    source?: string;
}

interface NewTestimonialsSectionProps {
    testimonials?: Testimonial[];
}

export function NewTestimonialsSection({ testimonials = [] }: NewTestimonialsSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        rating: 5,
        quote: ''
    });

    // If no testimonials, use fallbacks matching the design for preview
    const displayTestimonials = testimonials.length > 0 ? testimonials.slice(0, 3) : [
        {
            _id: "1",
            name: "Leilani K.",
            roleOrLocation: "Local Guide",
            quote: "The Kalua Pork is smokey, tender, and absolutely perfect. It reminds me of the lunch wagons back home on the North Shore. A true gem in Utah Valley.",
            rating: 5
        },
        {
            _id: "2",
            name: "Marcus T.",
            roleOrLocation: "Food Blogger",
            quote: "Best Malasadas in the valley, hands down. Get them while they're hot! We stop by every Friday just for the bakery treats.",
            rating: 4.5
        },
        {
            _id: "3",
            name: "Sarah Jenkins",
            roleOrLocation: "Event Coordinator",
            quote: "We hired Mauka Grill for our corporate summer luau and they crushed it. The team was professional and the food quantity was generous.",
            rating: 5
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setSubmitStatus('success');
            setTimeout(() => {
                setIsModalOpen(false);
                setSubmitStatus('idle');
                setFormData({ name: '', location: '', rating: 5, quote: '' });
            }, 2000);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="testimonials" className="py-16 md:py-24 2xl:py-32 bg-white relative">
            <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 px-2">
                    <div>
                        <span className="text-orange-600 font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-orange-600"></span>
                            Community Love
                        </span>
                        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-zinc-900 dark:text-white mt-3 font-[family-name:var(--font-poppins)]">Talk of the Town</h2>
                    </div>
                    <div className="flex gap-2 hidden md:flex">
                        <button
                            className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-zinc-600" />
                        </button>
                        <button
                            className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-zinc-600" />
                        </button>
                    </div>
                </div>

                {/* Write Review Button */}
                <div className="flex justify-end mb-8 px-2">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-full"
                    >
                        <Plus className="w-4 h-4" />
                        Write a Review
                    </button>
                </div>

                {/* Review Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8 2xl:gap-10">
                    {displayTestimonials.map((item) => (
                        <TestimonialCard key={item._id} item={item} />
                    ))}
                </div>
            </div>

            {/* Write Review Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                            <h3 className="text-xl font-semibold text-zinc-900">Write a Review</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-zinc-400 hover:text-zinc-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {submitStatus === 'success' ? (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-semibold text-zinc-900 mb-2">Mahalo!</h4>
                                <p className="text-zinc-500">Your review has been submitted for approval.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Role or Location (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                                        value={formData.location}
                                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                                        placeholder="e.g. Local Guide"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                type="button"
                                                key={star}
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                                            >
                                                <Star
                                                    className={`w-8 h-8 ${formData.rating >= star ? 'fill-teal-500 text-teal-500' : 'text-zinc-300'}`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Your Review</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                                        value={formData.quote}
                                        onChange={e => setFormData({ ...formData, quote: e.target.value })}
                                        placeholder="Tell us about your experience..."
                                    />
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Review"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

function TestimonialCard({ item }: { item: Testimonial }) {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

    // Check if quote is long enough to truncate (approx 150 chars)
    const isLong = item.quote.length > 150;
    const displayQuote = isLong ? item.quote.substring(0, 150) + "..." : item.quote;

    return (
        <>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 relative group hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 flex flex-col h-full">
                <div className="absolute top-8 right-8 text-teal-200 group-hover:text-teal-100 transition-colors">
                    <Quote className="w-12 h-12 fill-current opacity-20" />
                </div>
                <div className="flex gap-1 text-teal-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(item.rating || 5) ? 'fill-current' : 'text-teal-200'}`}
                        />
                    ))}
                </div>
                <div className="relative z-10 flex-grow mb-6">
                    <p className="text-zinc-700 text-lg leading-relaxed">
                        "{displayQuote}"
                    </p>
                    {isLong && (
                        <button
                            onClick={() => setIsReadMoreOpen(true)}
                            className="mt-2 text-sm font-medium text-teal-600 hover:text-teal-700 underline underline-offset-2 decoration-teal-200 hover:decoration-teal-500 transition-all"
                        >
                            Read full review
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/50">
                    <div>
                        <div className="font-semibold text-zinc-900">{item.name}</div>
                        <div className="text-xs text-zinc-500">{item.roleOrLocation || "Verified Review"}</div>
                    </div>
                </div>
            </div>

            {/* Read More Modal */}
            {isReadMoreOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 relative">
                        <button
                            onClick={() => setIsReadMoreOpen(false)}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors p-2 bg-zinc-50 hover:bg-zinc-100 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-10">
                            <div className="flex gap-1 text-teal-500 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${i < Math.floor(item.rating || 5) ? 'fill-current' : 'text-teal-200'}`}
                                    />
                                ))}
                            </div>

                            <Quote className="w-10 h-10 text-teal-200 fill-current mb-4" />

                            <p className="text-zinc-800 text-xl leading-relaxed mb-8">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div>
                                    <div className="font-bold text-zinc-900 text-lg">{item.name}</div>
                                    <div className="text-sm text-zinc-500">{item.roleOrLocation || "Verified Review"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function Check({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
