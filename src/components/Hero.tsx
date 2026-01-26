"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
                            The sustainable <span className="text-white font-semibold">digital backbone</span> for modern educational institutions. Empowering schools with a streamlined ecosystem that eliminates administrative friction and paper-heavy workflows.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link href="/onboarding" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl shadow-indigo-500/25 active:scale-95">
                                Start Free Trial
                            </Link>
                            <Link href="/onboarding" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold transition-all backdrop-blur-sm active:scale-95">
                                Watch Demo
                            </Link>
                        </div>

                        <div className="flex items-center gap-6">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Available soon on:</p>
                            <div className="flex gap-4">
                                <Link
                                    href="https://app.eduflow.com" // Placeholder for web app redirect
                                    target="_blank"
                                    className="group relative flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-2 rounded-xl hover:border-indigo-500/30 transition-all active:scale-95"
                                >
                                    <div className="bg-white text-slate-900 rounded-lg p-1.5 grayscale group-hover:grayscale-0 transition-all">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.523 15.3414C17.5029 15.3082 14.3986 10.1582 14.3986 10.1582C14.0729 9.61036 13.5677 9.4 13 9.4C12.43 9.4 11.91 9.61 11.6 10.16L8.47 15.34C8.47 15.34 5.37 20.49 5.35 20.53V20.54C5.12 20.91 4.98 21.34 4.98 21.8C4.98 23.01 5.97 24 7.18 24H18.82C20.03 24 21.02 23.01 21.02 21.8C21.02 21.34 20.88 20.91 20.65 20.54L17.523 15.3414Z M18.82 22.8H7.18C6.63 22.8 6.18 22.35 6.18 21.8C6.18 21.57 6.27 21.36 6.42 21.2L9.55 16.02L13 10.32L16.45 16.02L19.58 21.2C19.73 21.36 19.82 21.57 19.82 21.8C19.82 22.35 19.37 22.8 18.82 22.8ZM13 0C9.69 0 7 2.69 7 6C7 6.28 7.02 6.55 7.06 6.81L9.22 8.35C10.28 7.51 11.58 7 13 7C14.42 7 15.72 7.51 16.78 8.35L18.94 6.81C18.98 6.55 19 6.28 19 6C19 2.69 16.31 0 13 0ZM13 5.4C12.67 5.4 12.4 5.13 12.4 4.8C12.4 4.47 12.67 4.2 13 4.2C13.33 4.2 13.6 4.47 13.6 4.8C13.6 5.13 13.33 5.4 13 5.4Z" /></svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] text-slate-500 leading-none">Download on the</p>
                                        <p className="text-xs font-bold text-white">App Store</p>
                                    </div>
                                    <div className="absolute -top-3 -right-2 bg-indigo-500 text-[8px] font-bold px-1.5 py-0.5 rounded-full text-white shadow-lg shadow-indigo-500/20">SOON</div>
                                </Link>

                                <Link
                                    href="https://app.eduflow.com" // Placeholder for web app redirect
                                    target="_blank"
                                    className="group relative flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-2 rounded-xl hover:border-emerald-500/30 transition-all active:scale-95"
                                >
                                    <div className="bg-white text-slate-900 rounded-lg p-1.5 grayscale group-hover:grayscale-0 transition-all">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.609 1.814L13.792 12L3.609 22.186C3.25 21.827 3 21.327 3 20.75V3.25C3 2.673 3.25 2.173 3.609 1.814ZM4.791 1.057C5.127 0.941 5.51 1 5.866 1.154L19.385 8.943C19.741 9.143 20 9.543 20 10C20 10.457 19.741 10.857 19.385 11.057L5.866 18.846C5.51 19 5.127 19.059 4.791 18.943L14.208 11L4.791 1.057ZM15.208 12L5.866 21.154C5.51 21.309 5.127 21.25 4.791 21.057L14.208 13L15.208 12Z" /></svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] text-slate-500 leading-none">GET IT ON</p>
                                        <p className="text-xs font-bold text-white">Google Play</p>
                                    </div>
                                    <div className="absolute -top-3 -right-2 bg-emerald-500 text-[8px] font-bold px-1.5 py-0.5 rounded-full text-white shadow-lg shadow-emerald-500/20">SOON</div>
                                </Link>
                            </div>
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
                                src="dashboard-preview.png"
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
                            Campus-Wide Sync
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
