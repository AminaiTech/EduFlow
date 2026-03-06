"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How long does onboarding take?",
        answer: "We typically have schools fully operational on Acafort within 2 to 4 weeks. This includes data migration from your old systems and specialized training for your administrators and teaching staff."
    },
    {
        question: "Is our school's data secure?",
        answer: "Absolutely. We employ bank-level encryption, multi-tenant data isolation, and regular security audits. Your institutional data is always yours and is never shared with third parties."
    },
    {
        question: "Do parents need a smartphone to participate?",
        answer: "While our dedicated Parent Portal is optimized for smartphones and modern browsers, critical notifications (like attendance or fee updates) can also be sent via SMS directly to basic phones."
    },
    {
        question: "Can we integrate with our current accounting or HR systems?",
        answer: "Acafort includes extensive built-in tools for financial and staff management. If your school has legacy systems you must retain, our enterprise tier provides custom API bridges to synchronize data."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-slate-950/20 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-indigo-400">Questions</span></h2>
                    <p className="text-slate-400 text-lg">Everything you need to know about transitioning to Acafort.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl bg-slate-900/50 overflow-hidden hover:border-indigo-500/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-6 flex justify-between items-center"
                            >
                                <span className="font-semibold text-lg text-slate-200">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-indigo-400 shrink-0 ml-4"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5 text-lg">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
