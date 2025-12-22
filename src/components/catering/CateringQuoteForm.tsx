"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, Calendar, Users, FileText, CheckCircle, ChevronRight, ChevronLeft, Minus, Plus, PartyPopper, Briefcase, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    eventType?: string;
    guestCount?: string;
    eventDate?: string;
    message?: string;
}

const EVENT_TYPES = [
    { id: "Corporate Lunch", label: "Corporate Lunch", icon: Briefcase },
    { id: "Wedding / Rehearsal", label: "Wedding", icon: Heart },
    { id: "Private Party", label: "Private Party", icon: PartyPopper },
    { id: "Community Event", label: "Community", icon: Users },
    { id: "Other", label: "Other", icon: Sparkles },
];

export function CateringQuoteForm() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Form State (Controlled for easier masking/stepper)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventType: "",
        guestCount: "30", // Default nice styling
        eventDate: "",
        message: ""
    });

    const formRef = useRef<HTMLFormElement>(null);

    // --- Helpers ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            // Simple Phone Masking (XXX) XXX-XXXX
            const numbers = value.replace(/\D/g, "");
            let formatted = numbers;
            if (numbers.length > 0) formatted = `(${numbers.slice(0, 3)}`;
            if (numbers.length > 3) formatted += `) ${numbers.slice(3, 6)}`;
            if (numbers.length > 6) formatted += `-${numbers.slice(6, 10)}`;

            setFormData(prev => ({ ...prev, [name]: formatted }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const updateGuests = (increment: number) => {
        const current = parseInt(formData.guestCount) || 0;
        const potential = current + increment;
        const newValue = Math.max(10, potential).toString();
        setFormData(prev => ({ ...prev, guestCount: newValue }));
    };

    const validateStep = (currentStep: number): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (currentStep === 1) {
            if (!formData.eventType) newErrors.eventType = "Please select an event type";
            if (!formData.eventDate) newErrors.eventDate = "Please choose a date";
            if (!formData.guestCount || parseInt(formData.guestCount) < 10) newErrors.guestCount = "Min 10 guests";
        }

        if (currentStep === 2) {
            if (!formData.firstName.trim()) newErrors.firstName = "Required";
            if (!formData.lastName.trim()) newErrors.lastName = "Required";
            if (!formData.email.trim()) {
                newErrors.email = "Required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = "Invalid email";
            }
            if (!formData.phone.trim()) newErrors.phone = "Required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            // Shake effect or feedback?
            isValid = false;
        }

        return isValid;
    };

    const handleNext = () => {
        if (validateStep(1)) {
            setDirection(1);
            setStep(2);
        }
    };

    const handleBack = () => {
        setDirection(-1);
        setStep(1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep(2)) return;

        setIsSubmitting(true);
        // Simulate API
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    // --- Animations ---
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95
        })
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 text-center h-[50vh]"
            >
                <div className="w-20 h-20 bg-buddas-teal/10 rounded-full flex items-center justify-center mb-6 text-buddas-teal">
                    <PartyPopper className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-buddas-brown font-poppins mb-2">Quote Requested!</h3>
                <p className="text-buddas-brown/70 font-dm-sans mb-8">
                    We've got your details. Our team will verify availability and send you a custom proposal shortly.
                </p>
                <Button onClick={() => { setIsSuccess(false); setStep(1); setFormData({ ...formData, eventType: "" }); }} variant="outline">
                    Start New Quote
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-buddas-brown/5">
                <motion.div
                    className="h-full bg-buddas-teal"
                    initial={{ width: "50%" }}
                    animate={{ width: step === 1 ? "50%" : "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden" noValidate>
                <div className="flex-1 overflow-x-hidden overflow-y-auto px-6 pt-8 pb-32 relative">
                    <AnimatePresence initial={false} custom={direction} mode="wait">

                        {/* STEP 1: EVENT DETAILS */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                className="space-y-8 min-h-full"
                            >
                                <div className="space-y-2 text-center mb-6">
                                    <h2 className="text-2xl font-bold text-buddas-brown font-poppins">Tell us about your event</h2>
                                    <p className="text-buddas-brown/60 text-sm">Step 1 of 2</p>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-buddas-brown uppercase tracking-wide">
                                        What's the occasion? <span className="text-buddas-orange">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {EVENT_TYPES.map((type) => (
                                            <motion.button
                                                key={type.id}
                                                type="button"
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => {
                                                    setFormData({ ...formData, eventType: type.id });
                                                    if (errors.eventType) setErrors({ ...errors, eventType: undefined });
                                                }}
                                                className={cn(
                                                    "p-4 rounded-xl border-2 text-left transition-all duration-200 flex flex-col gap-2",
                                                    formData.eventType === type.id
                                                        ? "border-buddas-teal bg-buddas-teal/5 shadow-md"
                                                        : "border-buddas-brown/10 bg-white hover:border-buddas-teal/50"
                                                )}
                                            >
                                                <type.icon className={cn("w-6 h-6", formData.eventType === type.id ? "text-buddas-teal" : "text-buddas-brown/60")} />
                                                <span className={cn(
                                                    "text-sm font-bold",
                                                    formData.eventType === type.id ? "text-buddas-teal" : "text-buddas-brown"
                                                )}>{type.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                    {errors.eventType && <p className="text-buddas-orange text-xs font-medium animate-pulse">{errors.eventType}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-buddas-brown uppercase tracking-wide">
                                            When is it? <span className="text-buddas-orange">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                name="eventDate"
                                                value={formData.eventDate}
                                                onChange={handleInputChange}
                                                className={cn(
                                                    "w-full bg-white border-2 rounded-xl px-4 py-4 text-base font-dm-sans outline-none transition-all min-h-[58px]",
                                                    "focus:border-buddas-teal focus:shadow-[0_0_0_4px_rgba(84,191,165,0.1)]",
                                                    errors.eventDate ? "border-buddas-orange" : "border-buddas-brown/10"
                                                )}
                                            />
                                        </div>
                                        {errors.eventDate && <p className="text-buddas-orange text-xs font-medium">{errors.eventDate}</p>}
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-buddas-brown uppercase tracking-wide">
                                            How many guests? <span className="text-buddas-orange">*</span>
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <motion.button
                                                type="button"
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => updateGuests(-10)}
                                                className="w-14 h-14 rounded-xl border-2 border-buddas-brown/10 flex items-center justify-center text-buddas-brown hover:bg-buddas-brown/5"
                                            >
                                                <Minus className="w-5 h-5" />
                                            </motion.button>
                                            <div className="flex-1 relative">
                                                <input
                                                    type="number"
                                                    name="guestCount"
                                                    value={formData.guestCount}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full text-center bg-white border-2 rounded-xl py-4 text-xl font-bold font-dm-sans outline-none min-h-[58px]",
                                                        "focus:border-buddas-teal",
                                                        errors.guestCount ? "border-buddas-orange" : "border-buddas-brown/10"
                                                    )}
                                                />
                                            </div>
                                            <motion.button
                                                type="button"
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => updateGuests(10)}
                                                className="w-14 h-14 rounded-xl bg-buddas-brown text-white flex items-center justify-center hover:bg-buddas-brown/90 shadow-lg shadow-buddas-brown/20"
                                            >
                                                <Plus className="w-5 h-5" />
                                            </motion.button>
                                        </div>
                                        {errors.guestCount && <p className="text-buddas-orange text-xs font-medium">{errors.guestCount}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: CONTACT INFO */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                className="space-y-6 min-h-full"
                            >
                                <div className="space-y-2 text-center mb-6">
                                    <h2 className="text-2xl font-bold text-buddas-brown font-poppins">Where should we send it?</h2>
                                    <p className="text-buddas-brown/60 text-sm">Step 2 of 2</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-buddas-brown">First Name</label>
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="Kai"
                                            className={cn("w-full bg-white border-2 rounded-xl px-4 py-3 outline-none focus:border-buddas-teal", errors.firstName ? "border-buddas-orange" : "border-buddas-brown/10")}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-buddas-brown">Last Name</label>
                                        <input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Loa"
                                            className={cn("w-full bg-white border-2 rounded-xl px-4 py-3 outline-none focus:border-buddas-teal", errors.lastName ? "border-buddas-orange" : "border-buddas-brown/10")}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-buddas-brown">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="kai@example.com"
                                        className={cn("w-full bg-white border-2 rounded-xl px-4 py-3 outline-none focus:border-buddas-teal", errors.email ? "border-buddas-orange" : "border-buddas-brown/10")}
                                    />
                                    {errors.email && <p className="text-buddas-orange text-xs">{errors.email}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-buddas-brown">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="(808) 555-0123"
                                        className={cn("w-full bg-white border-2 rounded-xl px-4 py-3 outline-none focus:border-buddas-teal", errors.phone ? "border-buddas-orange" : "border-buddas-brown/10")}
                                    />
                                    {errors.phone && <p className="text-buddas-orange text-xs">{errors.phone}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-buddas-brown">Dietary Requests / Details</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Any vibes we should know about?"
                                        className="w-full bg-white border-2 border-buddas-brown/10 rounded-xl px-4 py-3 outline-none focus:border-buddas-teal resize-none"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* STICKY FOOTER */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-buddas-brown/10 z-50 md:static md:bg-transparent md:border-0 md:p-0">
                    <div className="max-w-md mx-auto flex gap-3">
                        {step === 2 && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleBack}
                                className="h-14 w-14 rounded-xl border-2 border-buddas-brown/10 flex items-center justify-center shrink-0"
                            >
                                <ChevronLeft className="w-6 h-6 text-buddas-brown" />
                            </Button>
                        )}
                        <Button
                            type={step === 2 ? "submit" : "button"}
                            onClick={step === 1 ? handleNext : undefined}
                            disabled={isSubmitting}
                            className={cn(
                                "flex-1 h-14 text-white font-bold font-poppins text-lg rounded-xl shadow-lg transition-all uppercase tracking-wide",
                                isSubmitting ? "bg-buddas-teal/80" : "bg-buddas-teal hover:bg-buddas-teal-dark hover:translate-y-[-2px]"
                            )}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sending...
                                </>
                            ) : step === 1 ? (
                                <span className="flex items-center">
                                    Next Step <ChevronRight className="ml-2 w-5 h-5" />
                                </span>
                            ) : (
                                "Request Quote"
                            )}
                        </Button>
                    </div>
                    {step === 1 && (
                        <p className="text-center text-buddas-brown/50 text-[10px] font-dm-sans mt-3">
                            Check availability instantly. No payment required.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
