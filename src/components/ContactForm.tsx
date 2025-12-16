"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    topic?: string;
    message?: string;
}

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validate = (formData: FormData): FormErrors => {
        const newErrors: FormErrors = {};
        const email = formData.get("email") as string;
        const firstName = formData.get("firstName") as string;
        const message = formData.get("message") as string;

        if (!firstName?.trim()) newErrors.firstName = "First name is required";
        if (!email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!message?.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const newErrors = validate(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setTouched({
                firstName: true,
                lastName: true,
                email: true,
                topic: true,
                message: true,
            });
            setIsSubmitting(false);
            return;
        }

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        alert("Message sent! (Simulation)");
        (e.target as HTMLFormElement).reset();
    };

    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-bold text-[#3A2F2B] uppercase tracking-wide"
                    >
                        First Name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="e.g. Kai"
                        className={cn(
                            "w-full bg-[#FAF2D8]/50 border border-[#3A2F2B] rounded-xl px-5 py-4 text-lg text-[#3A2F2B] placeholder-[#3A2F2B]/30 outline-none transition-all duration-200",
                            "focus:border-[#54BFA5] focus:border-2 focus:bg-white focus:shadow-[0_0_0_4px_rgba(84,191,165,0.1)]",
                            errors.firstName && touched.firstName && "border-red-500 focus:border-red-500"
                        )}
                        onBlur={() => handleBlur("firstName")}
                    />
                    {errors.firstName && touched.firstName && (
                        <p className="text-red-500 text-sm font-medium animate-in slide-in-from-top-1">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-bold text-[#3A2F2B] uppercase tracking-wide"
                    >
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="e.g. Loa"
                        className={cn(
                            "w-full bg-[#FAF2D8]/50 border border-[#3A2F2B] rounded-xl px-5 py-4 text-lg text-[#3A2F2B] placeholder-[#3A2F2B]/30 outline-none transition-all duration-200",
                            "focus:border-[#54BFA5] focus:border-2 focus:bg-white focus:shadow-[0_0_0_4px_rgba(84,191,165,0.1)]"
                        )}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#3A2F2B] uppercase tracking-wide"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="kai@example.com"
                    className={cn(
                        "w-full bg-[#FAF2D8]/50 border border-[#3A2F2B] rounded-xl px-5 py-4 text-lg text-[#3A2F2B] placeholder-[#3A2F2B]/30 outline-none transition-all duration-200",
                        "focus:border-[#54BFA5] focus:border-2 focus:bg-white focus:shadow-[0_0_0_4px_rgba(84,191,165,0.1)]",
                        errors.email && touched.email && "border-red-500 focus:border-red-500"
                    )}
                    onBlur={() => handleBlur("email")}
                />
                {errors.email && touched.email && (
                    <p className="text-red-500 text-sm font-medium animate-in slide-in-from-top-1">
                        {errors.email}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="topic"
                    className="block text-sm font-bold text-[#3A2F2B] uppercase tracking-wide"
                >
                    Topic
                </label>
                <input
                    id="topic"
                    name="topic"
                    type="text"
                    placeholder="General Inquiry, Catering, Feedback..."
                    className={cn(
                        "w-full bg-[#FAF2D8]/50 border border-[#3A2F2B] rounded-xl px-5 py-4 text-lg text-[#3A2F2B] placeholder-[#3A2F2B]/30 outline-none transition-all duration-200",
                        "focus:border-[#54BFA5] focus:border-2 focus:bg-white focus:shadow-[0_0_0_4px_rgba(84,191,165,0.1)]"
                    )}
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="block text-sm font-bold text-[#3A2F2B] uppercase tracking-wide"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you today?"
                    className={cn(
                        "w-full bg-[#FAF2D8]/50 border border-[#3A2F2B] rounded-xl px-5 py-4 text-lg text-[#3A2F2B] placeholder-[#3A2F2B]/30 outline-none transition-all duration-200 resize-none",
                        "focus:border-[#54BFA5] focus:border-2 focus:bg-white focus:shadow-[0_0_0_4px_rgba(84,191,165,0.1)]",
                        errors.message && touched.message && "border-red-500 focus:border-red-500"
                    )}
                    onBlur={() => handleBlur("message")}
                />
                {errors.message && touched.message && (
                    <p className="text-red-500 text-sm font-medium animate-in slide-in-from-top-1">
                        {errors.message}
                    </p>
                )}
            </div>

            <div className="space-y-4">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-[#54BFA5] text-[#3A2F2B] hover:bg-[#54BFA5]/90 font-bold text-lg rounded-xl shadow-none hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-200"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>
                <p className="text-center text-[#3A2F2B]/60 text-sm font-medium">
                    We usually reply within 24 hours.
                </p>
            </div>
        </form>
    );
}
