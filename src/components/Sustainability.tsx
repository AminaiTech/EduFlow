"use client";

import { motion } from "framer-motion";
import { TreeDeciduous, Leaf, CloudRain, GraduationCap, Globe2, BookOpenCheck, Recycle } from "lucide-react";

const impacts = [
    {
        title: "Digital Process Cycles",
        description: "Moving from physical registers to digital approvals. We architect workflows that remove administrative friction and the need for physical printing.",
        icon: Leaf,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Resource Efficiency",
        description: "Our multi-tenant architecture eliminates individual server waste, aligning with global standards for responsible digital production.",
        icon: TreeDeciduous,
        color: "text-green-400",
        bg: "bg-green-400/10"
    },
    {
        title: "Ethical Growth (SDG 12)",
        description: "Intentionally designed for responsible consumption. Every digitized school prevents an average of 5,000 pages of operational waste annually.",
        icon: Recycle,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    }
];

export default function Sustainability() {
    return (
        <section id="impact" className="py-24 relative overflow-hidden">
            {/* Decorative Green Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                            <CloudRain size={16} />
                            Sustainability First
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Infrastructure for a <span className="text-emerald-400 leading-normal">Resilient</span> Future
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Every school using <span className="text-white">EduFlow</span> contributes to a greener, paperless future. We eliminate administrative friction to help you build a more sustainable and efficient education system.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                    <Globe2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Global Impact Alignment</h4>
                                    <p className="text-slate-500">Directly contributing to UN Sustainable Development Goals for quality education and responsible production.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                    <BookOpenCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Paperless Report Cycles</h4>
                                    <p className="text-slate-500">From attendance to grading, remove the need for physical printing across the entire academic year.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid gap-6">
                        {impacts.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all group"
                            >
                                <div className="flex gap-6 items-center">
                                    <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
