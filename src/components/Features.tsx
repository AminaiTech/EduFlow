"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Users2,
    Zap,
    FileText,
    MessageSquare,
    Wallet
} from "lucide-react";

const features = [
    {
        title: "Smart Academic Orchestration",
        description: "Seamlessly manage terms, class levels, and subjects with an intelligent scheduling system designed for modern schools.",
        icon: GraduationCap,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    },
    {
        title: "Unified Student Records",
        description: "Comprehensive lifetime profiles for every student, featuring detailed academic history, regional tracking, and demographic insights.",
        icon: Users2,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Automated Staff Workflows",
        description: "Empower your teachers with automated attendance tracking and smart grading tools that eliminate repetitive paperwork.",
        icon: Zap,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    },
    {
        title: "Instant Progress Reporting",
        description: "Generate professional, data-rich report cards and academic summaries in seconds. No more end-of-term manual calculations.",
        icon: FileText,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Parent Engagement Portal",
        description: "Foster total transparency with a dedicated portal for parents to track real-time attendance, grades, and school announcements.",
        icon: MessageSquare,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "Financial Oversight",
        description: "Keep track of tuition fees, payment histories, and financial standing for every student with a clear, audited dashboard.",
        icon: Wallet,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
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
                        Empowering Your <span className="text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">School Community</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Move beyond simple management. Acafort provides the tools to foster excellence, transparency, and growth for every stakeholder.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10 cursor-default"
                        >
                            <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
