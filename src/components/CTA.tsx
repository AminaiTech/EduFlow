"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section id="contact" className="py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/30"
                >
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Empower Your School Today
                        </h2>
                        <p className="text-indigo-100 text-lg md:text-xl mb-12 opacity-90">
                            Ready to scale your educational ecosystem? Join Aminai Tech and streamline your management today.
                        </p>
                        <form
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all"
                                required
                            />
                            <Link
                                href="/onboarding"
                                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center"
                            >
                                Start Free Trial
                            </Link>
                        </form>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] -ml-32 -mb-32" />
                </motion.div>
            </div>
        </section>
    );
}
