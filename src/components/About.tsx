"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Target,
    Leaf,
    ShieldCheck,
    Zap,
    GraduationCap,
    Recycle,
    TrendingUp,
    Settings2
} from "lucide-react";

const sdgs = [
    { id: 4, title: "Quality Education", icon: GraduationCap, color: "text-blue-400", bg: "bg-blue-400/10" },
    { id: 12, title: "Responsible Production", icon: Recycle, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { id: 8, title: "Decent Work & Growth", icon: TrendingUp, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { id: 9, title: "Industry & Innovation", icon: Settings2, color: "text-cyan-400", bg: "bg-cyan-400/10" }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full -mr-96 -mt-96" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-3/5 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-2">
                            <Target size={16} />
                            Our Mission & Vision
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Backbone</span> <br />
                            of Modern Schools.
                        </h2>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <span className="text-white font-semibold">EduFlow</span> is a next-generation school management platform developed by <Link href="https://aminaitech.com" target="_blank" className="text-white font-semibold hover:text-indigo-400 transition-colors underline underline-offset-4">Aminai Tech</Link>, a technology startup dedicated to building sustainable digital infrastructure for education.
                            </p>
                            <p>
                                EduFlow was founded on a simple insight: many educational institutions are limited not by talent or ambition, but by <span className="text-indigo-300">outdated, paper-based processes</span> that slow operations, increase costs, and harm the environment. Our mission is to replace these inefficiencies with a streamlined, fully digital ecosystem that enables schools to operate smarter and more sustainably.
                            </p>
                            <p>
                                By digitizing student records, academic workflows, administrative approvals, and reporting processes, EduFlow significantly reduces reliance on paper, minimizes duplication of records, and lowers operational waste. This transition not only improves efficiency and data accuracy but also supports environmentally responsible practices within educational institutions.
                            </p>
                            <p className="border-l-2 border-indigo-500 pl-6 italic bg-indigo-500/5 py-4 rounded-r-2xl">
                                By removing administrative friction and paper-heavy processes, we allow educators to focus on what truly matters: <span className="text-white">delivering quality education and mentoring the next generation of leaders.</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/5 space-y-8 lg:pt-16"
                    >
                        <div className="bg-slate-900 shadow-2xl border border-white/5 rounded-[2.5rem] p-8 space-y-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Leaf className="text-emerald-400" />
                                    Global Impact Alignment
                                </h3>
                                <p className="text-slate-400 text-sm mb-8">
                                    At <Link href="https://aminaitech.com" target="_blank" className="text-white hover:text-indigo-400 transition-colors underline underline-offset-4 font-semibold">Aminai Tech</Link>, we intentionally align EduFlow with the United Nations Sustainable Development Goals to build greener, more resilient systems.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {sdgs.map((sdg) => (
                                        <div key={sdg.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/10 transition-all">
                                            <div className={`w-10 h-10 ${sdg.bg} ${sdg.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                                <sdg.icon size={20} />
                                            </div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Goal {sdg.id}</p>
                                            <p className="text-xs font-bold text-slate-200">{sdg.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mb-16 -mr-16" />
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-indigo-600 shadow-xl shadow-indigo-600/20">
                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Security First</h4>
                                <p className="text-indigo-100 text-sm italic">Ensuring institutional data is isolated and encrypted at every level.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
