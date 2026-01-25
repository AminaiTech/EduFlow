"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Modernizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Education</span> Management
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl">
                            A comprehensive Multi-Tenant School Management System powered by Django and Flutter. Host thousands of schools with isolated data, custom branding, and automated onboarding.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl shadow-indigo-500/25 active:scale-95">
                                Start Free Trial
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold transition-all backdrop-blur-sm active:scale-95">
                                Watch Demo
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-3 shadow-2xl">
                            <Image
                                src="/dashboard-preview.png"
                                alt="EduFlow Dashboard"
                                width={800}
                                height={600}
                                className="rounded-[2rem] w-full h-auto"
                                priority
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 px-6 py-3 rounded-2xl text-sm font-semibold text-indigo-300"
                        >
                            Multi-Tenant
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -right-6 bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30 px-6 py-3 rounded-2xl text-sm font-semibold text-cyan-300"
                        >
                            Academic Tracking
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
                    </motion.div>
                </div>
            </div>

            {/* Mesh Background */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
