"use client";

import { motion } from "framer-motion";
import {
    Building2,
    GraduationCap,
    Users2,
    ShieldCheck,
    Smartphone,
    Zap
} from "lucide-react";

const features = [
    {
        title: "Database Schema Isolation",
        description: "Each school gets its own isolated database schema for maximum security and total data separation.",
        icon: Building2,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Platform Admin Control",
        description: "Centralized dashboard for superusers to onboard schools, manage domains, and monitor system health.",
        icon: ShieldCheck,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    },
    {
        title: "Dynamic Website Templates",
        description: "SEO-optimized Next.js templates that automatically adapt to the school's specific sections and branding.",
        icon: Smartphone,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    },
    {
        title: "Automated Onboarding",
        description: "Instant school setup with automated schema creation and domain provisioning for new tenants.",
        icon: Zap,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Tenant-Scoped Academics",
        description: "Manage academic years, terms, and sections with full data isolation between institutions.",
        icon: GraduationCap,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "Advanced Student Tracking",
        description: "Comprehensive enrollment management with region-specific fields and multi-step parent profiles.",
        icon: Users2,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-slate-950/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Built for <span className="text-indigo-500">Excellence</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Every tool you need to transform your educational institution into a modern, data-driven environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-indigo-500/30 transition-all group"
                        >
                            <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
