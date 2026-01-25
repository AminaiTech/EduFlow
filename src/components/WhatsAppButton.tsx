"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "2348136490129"; // Placeholder for AminaiTech WhatsApp
    const message = encodeURIComponent("Hello! I'm interested in EduFlow for my school.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 border border-emerald-400/20 backdrop-blur-sm group flex items-center gap-3 overflow-hidden transition-all duration-300 hover:pr-8"
        >
            <div className="relative z-10">
                <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
            </div>
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold text-sm tracking-wide opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300">
                Chat with us
            </span>

            {/* Pulsing Background Effect */}
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20 group-hover:hidden" />
        </motion.a>
    );
}
