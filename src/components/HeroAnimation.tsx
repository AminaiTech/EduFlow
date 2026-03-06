"use client";

import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck, Database, Server } from "lucide-react";

export default function HeroAnimation() {
    // Array of mock data for animated chart bars
    const chartBars = [30, 45, 35, 60, 45, 75, 55, 90, 65, 85];

    return (
        <div className="w-full aspect-[4/3] bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl flex flex-col">
            {/* Top Navigation Mock */}
            <div className="h-10 border-b flex items-center px-4 gap-2 bg-slate-900/80 border-white/5 relative z-20">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-4 h-3 w-24 bg-slate-800 rounded flex-1 max-w-[150px]" />
                <div className="ml-auto w-6 h-6 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-500/60" />
                </div>
            </div>

            <div className="flex-1 flex p-4 gap-4 relative z-10">
                {/* Sidebar Mock */}
                <div className="w-28 hidden sm:flex flex-col gap-2 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-6 w-full bg-indigo-500/20 rounded border border-indigo-500/30 mb-2"
                    />
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className={`h-5 rounded bg-slate-800/80 ${i % 2 === 0 ? 'w-3/4' : 'w-5/6'}`}
                        />
                    ))}
                    <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
                </div>

                {/* Dashboard Main Content */}
                <div className="flex-1 flex flex-col gap-4 relative">
                    {/* Header */}
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="h-3 w-20 bg-slate-700 rounded"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-6 w-3/4 sm:w-48 bg-slate-200 rounded"
                            />
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { icon: Users, color: "text-blue-400", bg: "bg-blue-400/20", delay: 0.5 },
                            { icon: Zap, color: "text-amber-400", bg: "bg-amber-400/20", delay: 0.6 }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: stat.delay, type: "spring" }}
                                className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 flex flex-col gap-2 relative overflow-hidden group hover:border-indigo-500/50 transition-colors"
                            >
                                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                                    <stat.icon size={16} className={stat.color} />
                                </div>
                                <div className="space-y-1.5 mt-1">
                                    <div className="h-2 w-1/2 bg-slate-600 rounded" />
                                    <div className="h-4 w-3/4 bg-slate-200 rounded" />
                                </div>
                                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-colors duration-500" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Chart Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="flex-1 bg-slate-800/30 rounded-xl border border-slate-700/30 p-4 flex flex-col gap-3 relative overflow-hidden"
                    >
                        <div className="flex justify-between items-center">
                            <div className="h-3 w-16 bg-slate-600/80 rounded" />
                            <div className="h-3 w-10 bg-slate-700 rounded" />
                        </div>

                        <div className="flex-1 flex items-end gap-1.5 sm:gap-2 relative z-10 w-full mt-2">
                            {/* Animated Bars */}
                            {chartBars.map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9 + i * 0.05, type: "spring", stiffness: 40 }}
                                    className="flex-1 bg-gradient-to-t from-indigo-500/30 to-indigo-400/80 rounded-t-sm relative group"
                                >
                                    {/* Tooltip on bar hover (visual mock) */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-[8px] px-1.5 py-0.5 rounded shadow-lg transition-opacity pointer-events-none text-slate-300">
                                        Data
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scanning Line overlay */}
                        <motion.div
                            animate={{ y: ["0%", "100%", "0%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-[2px] bg-indigo-400/30 shadow-[0_0_15px_3px_rgba(99,102,241,0.4)] z-20 pointer-events-none"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Floating Status Notification */}
            <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
                className="absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 p-2.5 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-md z-30 ring-1 ring-white/5"
            >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center relative">
                    {/* Ping effect behind icon */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-50" />
                    <ShieldCheck size={16} className="text-emerald-400 relative z-10" />
                </div>
                <div className="space-y-1.5 pr-2">
                    <div className="h-2 w-20 bg-slate-300 rounded" />
                    <div className="h-1.5 w-12 bg-slate-500 rounded" />
                </div>
            </motion.div>
        </div>
    );
}
