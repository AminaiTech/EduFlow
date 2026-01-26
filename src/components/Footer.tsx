import Link from "next/link";
import {
    Instagram,
    Facebook,
    Twitter as TwitterIcon,
    MessageCircle,
    Music,
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
                            Edu<span className="text-indigo-500">Flow</span>
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
                                <TwitterIcon size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-blue-600 transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-rose-400 transition-all">
                                <Music size={20} />
                            </Link>
                        </div>
                        <div className="pt-4 flex flex-col gap-3">
                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">App coming soon</p>
                            <div className="flex gap-3">
                                <Link href="https://app.eduflow.com" className="opacity-50 hover:opacity-100 transition-opacity">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                                </Link>
                                <Link href="https://app.eduflow.com" className="opacity-50 hover:opacity-100 transition-opacity">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li><Link href="/#features" className="hover:text-white transition-colors">Core Features</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
                            <li><Link href="/#impact" className="hover:text-white transition-colors">Environmental Impact</Link></li>
                            <li><Link href="/#stats" className="hover:text-white transition-colors">System Transparency</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-indigo-500" />
                                <Link href="mailto:aminaitechnology@gmail.com" className="hover:text-white transition-colors italic">aminaitechnology@gmail.com</Link>
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
                            <li><Link href="https://app.eduflow.com" className="hover:text-white transition-colors">Admin Login</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; 2026 Aminai Technologies. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
                        <Link href="#" className="hover:text-white transition-colors">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
