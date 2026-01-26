"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Schools Managed", value: "120+" },
    { label: "Active Students", value: "45k+" },
    { label: "Paper Saved (Est)", value: "2M+" },
    { label: "System Uptime", value: "99.9%" }
];

export default function Stats() {
    return (
        <section id="stats" className="py-20 border-y border-white/5 bg-slate-950/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
