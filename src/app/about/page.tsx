"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-50 font-sans selection:bg-indigo-500/30">
            <Navbar />
            <main className="pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto px-6 py-12"
                >
                    {/* Reusing the About component content but in a full-page context */}
                    <About />

                    {/* Adding a detailed section for the new narrative if needed, 
                        though the About component already contains it. 
                        Let's make sure the About component works well here. */}
                </motion.div>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
