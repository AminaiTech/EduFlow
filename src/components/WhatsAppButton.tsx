"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
    const pathname = usePathname();

    if (pathname === "/onboarding") return null;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed bottom-8 right-8 z-[100]"
        >
            <Link
                href="/onboarding"
                className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 border border-emerald-400/20 backdrop-blur-sm group flex items-center gap-3 overflow-hidden transition-all duration-300 hover:pr-8 hover:scale-110"
            >
                <div className="relative z-10">
                    <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
                </div>
                <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold text-sm tracking-wide opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300">
                    Get Started
                </span>

                {/* Pulsing Background Effect */}
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20 group-hover:hidden" />
            </Link>
        </motion.div>
    );
}
