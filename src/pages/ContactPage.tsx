import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

import { useForm, ValidationError } from "@formspree/react";

export function ContactPage() {
    const { isDark } = useTheme();

    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        eventType: "",
        message: "",
    });

    // Formspree hook
    const [state, handleSubmit] = useForm("mwvnejgy");

    // Your UI flags (keep your animated button behavior)
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Whenever Formspree succeeds, show success state then reset
    useEffect(() => {
        if (!state.succeeded) return;

        setIsSubmitted(true);

        // (optional) clear fields after success
        setFormState({ name: "", phone: "", eventType: "", message: "" });

        const t = setTimeout(() => setIsSubmitted(false), 3000);
        return () => clearTimeout(t);
    }, [state.succeeded]);

    // Use Formspree submitting flag
    const isSubmitting = state.submitting;

    const inputClasses = useMemo(
        () =>
            `w-full rounded-xl px-4 py-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark
                    ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10"
                    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white"
            }`,
        [isDark],
    );

    // For Formspree: make sure your inputs have "name" attributes.
    // Also: your <select> needs name="eventType"
    // Your <textarea> needs name="message"
    return (
        <div className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6"
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span
                        className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                        Let's Create Something Amazing
                    </span>
                </motion.div>

                <motion.h1
                    className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Get in Touch
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                    Ready to start planning? Contact us today for a free
                    consultation and quote for your next event.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
                    className="space-y-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className={`rounded-2xl p-8 border ${
                            isDark
                                ? "bg-white/5 border-white/10"
                                : "bg-white border-gray-200 shadow-lg"
                        }`}
                    >
                        <h2
                            className={`text-2xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            Contact Information
                        </h2>

                        <div className="space-y-8">
                            {/* Phone */}
                            <motion.div
                                className="flex items-start gap-4"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg"
                                >
                                    <Phone className="w-6 h-6 text-white" />
                                </motion.div>

                                <div>
                                    <h3
                                        className={`font-semibold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                                    >
                                        Phone
                                    </h3>
                                    <p
                                        className={`mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                                    >
                                        Call or WhatsApp us anytime:
                                    </p>

                                    <div className="flex flex-col gap-2">
                                        {["71 14 22 12", "76 98 25 98"].map(
                                            (phone) => (
                                                <motion.a
                                                    target="_blank"
                                                    key={phone}
                                                    href={`tel:${phone.replace(/\s/g, "")}`}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        x: 5,
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`text-2xl font-bold transition-colors ${
                                                        isDark
                                                            ? "text-white hover:text-blue-400"
                                                            : "text-gray-900 hover:text-blue-600"
                                                    }`}
                                                >
                                                    {phone}
                                                </motion.a>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                className="flex items-start gap-4"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    whileHover={{ rotate: -15, scale: 1.1 }}
                                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                                >
                                    <MapPin className="w-6 h-6 text-white" />
                                </motion.div>

                                <div>
                                    <h3
                                        className={`font-semibold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                                    >
                                        Location
                                    </h3>
                                    <p
                                        className={
                                            isDark
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }
                                    >
                                        Serving all regions.
                                        <br />
                                        Based in Lebanon.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Promise Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className={`relative rounded-2xl p-8 overflow-hidden border ${
                            isDark
                                ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-white/10"
                                : "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
                        }`}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                            animate={{
                                backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                ],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundSize: "200% 200%" }}
                        />
                        <h3
                            className={`text-xl font-bold mb-2 relative ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            Our Promise
                        </h3>
                        <motion.p
                            className={`text-lg italic relative ${isDark ? "text-gray-300" : "text-gray-700"}`}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            "You imagine it... We make it happen"
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    className={`rounded-2xl p-8 border ${
                        isDark
                            ? "bg-[#0f0f16] border-white/10"
                            : "bg-white border-gray-200 shadow-xl"
                    }`}
                >
                    <h2
                        className={`text-2xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                        Send us a Message
                    </h2>

                    {/* IMPORTANT: Use Formspree's handleSubmit */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    name: "name",
                                    label: "Name",
                                    type: "text",
                                    placeholder: "Your name",
                                },
                                {
                                    name: "phone",
                                    label: "Phone",
                                    type: "tel",
                                    placeholder: "Your number",
                                },
                            ].map((field, i) => (
                                <motion.div
                                    key={field.name}
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                >
                                    <label
                                        className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
                                    >
                                        {field.label}
                                    </label>

                                    <motion.input
                                        id={field.name}
                                        name={field.name} // ✅ critical for Formspree
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className={inputClasses}
                                        whileFocus={{ scale: 1.01 }}
                                        value={
                                            formState[
                                                field.name as keyof typeof formState
                                            ]
                                        }
                                        onChange={(e) =>
                                            setFormState((prev) => ({
                                                ...prev,
                                                [field.name]: e.target.value,
                                            }))
                                        }
                                    />

                                    <ValidationError
                                        prefix={field.label}
                                        field={field.name}
                                        errors={state.errors}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <label
                                className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
                            >
                                Event Type
                            </label>

                            <select
                                id="eventType"
                                name="eventType" // ✅ critical for Formspree
                                className={inputClasses}
                                value={formState.eventType}
                                onChange={(e) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        eventType: e.target.value,
                                    }))
                                }
                            >
                                <option
                                    value=""
                                    className={
                                        isDark ? "bg-[#0f0f16]" : "bg-white"
                                    }
                                >
                                    Select event type...
                                </option>
                                {[
                                    "Wedding",
                                    "Corporate Event",
                                    "Private Party",
                                    "Concert/Show",
                                    "Other",
                                ].map((type) => (
                                    <option
                                        key={type}
                                        value={type.toLowerCase()}
                                        className={
                                            isDark ? "bg-[#0f0f16]" : "bg-white"
                                        }
                                    >
                                        {type}
                                    </option>
                                ))}
                            </select>

                            <ValidationError
                                prefix="Event Type"
                                field="eventType"
                                errors={state.errors}
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <label
                                className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
                            >
                                Message
                            </label>

                            <motion.textarea
                                id="message"
                                name="message" // ✅ critical for Formspree
                                rows={4}
                                placeholder="Tell us about your event..."
                                className={`${inputClasses} resize-none`}
                                whileFocus={{ scale: 1.01 }}
                                value={formState.message}
                                onChange={(e) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        message: e.target.value,
                                    }))
                                }
                            />

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </motion.div>

                        {/* Optional: show a general error if Formspree rejects */}
                        {state.errors?.length ? (
                            <div
                                className={`text-sm ${isDark ? "text-red-300" : "text-red-600"}`}
                            >
                                Please fix the highlighted fields and try again.
                            </div>
                        ) : null}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 0 30px rgba(59,130,246,0.5)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.span
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        Message Sent!
                                    </motion.span>
                                ) : isSubmitting ? (
                                    <motion.span
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        Sending...
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="default"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center justify-center gap-2"
                                    >
                                        Send Message
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <Send className="w-5 h-5" />
                                        </motion.div>
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {/* Shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
