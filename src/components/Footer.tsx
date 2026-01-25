import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-slate-950/40">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
                            Edu<span className="text-indigo-500">Flow</span>
                        </Link>
                        <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                            Standardizing education management through innovation and multi-tenant efficiency.
                        </p>
                        <div className="text-slate-400 text-sm">
                            &copy; 2026 AminaiTech. All rights reserved.
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Product</h4>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Solutions</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
