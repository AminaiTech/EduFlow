import Link from "next/link";
import {
    Instagram,
    Facebook,
    MessageCircle,
    Mail,
    Phone,
    MapPin
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5 bg-slate-950/40">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tight block">
                            Aca<span className="text-indigo-500">fort</span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Standardizing education management through innovation and global excellence. Empowering institutions across Africa.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-indigo-400 transition-all">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://wa.me/2348136490129" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-emerald-400 transition-all">
                                <MessageCircle size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-blue-400 transition-all">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-blue-600 transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-rose-400 transition-all">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.032 2.612.351 3.66 1.105 1.15.824 1.86 2.148 2.302 3.442.233.683.354 1.388.428 2.097.04.38.04.764.08 1.144.402-.02.805-.04 1.208-.06a.43.43 0 0 1 .412.364c.068.732.14 1.464.212 2.196.02.138-.057.29-.197.316-.48.026-.963.048-1.442.064v4.46a7.22 7.22 0 0 1-1.397 4.192c-.934 1.258-2.316 2.153-3.837 2.47-1.127.236-2.305.197-3.414-.144a6.79 6.79 0 0 1-3.6-2.612c-1.196-1.574-1.503-3.692-.81-5.582.47-1.285 1.4-2.38 2.583-3.05a6.63 6.63 0 0 1 3.29-.86c.21 0 .422.016.632.032V11.2a3.78 3.78 0 0 0-1.897.456c-.958.552-1.623 1.558-1.742 2.664a3.9 3.9 0 0 0 .546 2.493 3.79 3.79 0 0 0 2.457 1.832 3.82 3.82 0 0 0 3.394-.853 3.7 3.7 0 0 0 1.054-2.37V3.53a8.9 8.9 0 0 0 2.222.983c.124.03.11-.144.11-.22a8.55 8.55 0 0 1-1.266-2.522 8.32 8.32 0 0 1-.418-1.748Z" /></svg>
                            </Link>
                        </div>
                        <div className="pt-4 flex flex-col gap-3">
                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">App coming soon</p>
                            <div className="flex gap-3">
                                <Link href="https://app.acafort.com" className="opacity-50 hover:opacity-100 transition-opacity">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                                </Link>
                                <Link href="https://app.acafort.com" className="opacity-50 hover:opacity-100 transition-opacity">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li><Link href="/#features" className="hover:text-white transition-colors">Core Features</Link></li>
                            <li><Link href="/#about" className="hover:text-white transition-colors">Our Mission</Link></li>
                            <li><Link href="/#impact" className="hover:text-white transition-colors">Environmental Impact</Link></li>
                            <li><Link href="/#stats" className="hover:text-white transition-colors">System Transparency</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-indigo-500" />
                                <Link href="mailto:hello@acafort.com" className="hover:text-white transition-colors italic">hello@acafort.com</Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-indigo-500" />
                                <Link href="tel:+2348136490129" className="hover:text-white transition-colors">+234 (0) 813 649 0129</Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                                <span className="text-slate-500">VCM 183 Nasarawa Tudun Wada Gusau, <br />Zamfara, Nigeria.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Institutional</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li><Link href="/onboarding" className="hover:text-white transition-colors">Registration Form</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy & Security</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="https://app.acafort.com" className="hover:text-white transition-colors">Admin Login</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; 2026 Acafort. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
                        <Link href="#" className="hover:text-white transition-colors">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
