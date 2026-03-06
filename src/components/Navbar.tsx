"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Excellence", href: "/#features" },
        { name: "About Us", href: "/#about" },
        { name: "Impact", href: "/#impact" },
        { name: "Transparency", href: "/#stats" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight z-50">
                    Aca<span className="text-indigo-500">fort</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-400">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li><Link href="/onboarding" className="hover:text-white transition-colors">Start Free Trial</Link></li>
                    <li>
                        <Link href="https://app.acafort.com" className="text-slate-400 hover:text-white transition-colors font-semibold mr-2">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/onboarding"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                        >
                            Experience Acafort
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 text-slate-300 hover:text-white transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Navigation Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col pt-8 pb-32 px-6 overflow-y-auto"
                        >
                            <ul className="flex flex-col space-y-6 text-lg font-medium text-slate-300">
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}

                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="pt-4 border-t border-white/10"
                                >
                                    <Link
                                        href="/onboarding"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block hover:text-white transition-colors mb-6"
                                    >
                                        Start Free Trial
                                    </Link>
                                    <Link
                                        href="https://app.acafort.com"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-indigo-400 hover:text-indigo-300 transition-colors font-bold mb-6"
                                    >
                                        Login to Dashboard
                                    </Link>
                                    <Link
                                        href="/onboarding"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-4 rounded-xl transition-all shadow-lg active:scale-95"
                                    >
                                        Experience Acafort
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
