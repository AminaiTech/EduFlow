"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    Edu<span className="text-indigo-500">Flow</span>
                </Link>

                <ul className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-400">
                    <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                    <li><Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                    <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                    <li>
                        <Link
                            href="#"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}
