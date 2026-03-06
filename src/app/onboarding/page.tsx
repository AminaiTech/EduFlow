"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2,
    User,
    Mail,
    Phone,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Users,
    CalendarDays,
    Hash,
    Check,
    Quote
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NIGERIAN_STATES } from "@/lib/nigeria-data";

const SCHOOL_SECTIONS = [
    { id: "nursery", label: "Nursery / KG" },
    { id: "primary", label: "Primary / Basic" },
    { id: "junior_secondary", label: "Junior Secondary" },
    { id: "senior_secondary", label: "Senior Secondary" }
];

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        schoolName: "",
        schoolMotto: "",
        schoolEmail: "",
        schoolTel1: "",
        schoolTel2: "",
        regNo: "",
        population: "",
        streetAddress: "",
        state: "",
        lga: "",
        yearEstablished: "",
        adminName: "",
        adminEmail: "",
        adminPhone: ""
    });
    const [selectedSections, setSelectedSections] = useState<string[]>([]);
    const router = useRouter();

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleSection = (id: string) => {
        setSelectedSections(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const handleFinish = () => {
        const summary = `New School Registration Request\n\n` +
            `School Info:\n` +
            `- Name: ${formData.schoolName || "N/A"}\n` +
            `- Motto: ${formData.schoolMotto || "N/A"}\n` +
            `- Email: ${formData.schoolEmail || "N/A"}\n` +
            `- Tel 1: ${formData.schoolTel1 || "N/A"}\n` +
            `- Tel 2: ${formData.schoolTel2 || "N/A"}\n` +
            `- Reg No: ${formData.regNo || "N/A"}\n` +
            `- Population: ${formData.population || "N/A"}\n` +
            `- Sections: ${selectedSections.join(", ") || "None"}\n\n` +
            `Location:\n` +
            `- Address: ${formData.streetAddress || "N/A"}\n` +
            `- State: ${formData.state || "N/A"}\n` +
            `- LGA: ${formData.lga || "N/A"}\n` +
            `- Established: ${formData.yearEstablished || "N/A"}\n\n` +
            `Admin Details:\n` +
            `- Name: ${formData.adminName || "N/A"}\n` +
            `- Email: ${formData.adminEmail || "N/A"}\n` +
            `- Phone: ${formData.adminPhone || "N/A"}`;

        const message = encodeURIComponent(summary);

        // Trigger WhatsApp
        const whatsappUrl = `https://wa.me/2348136490129?text=${message}`;
        window.open(whatsappUrl, "_blank");

        nextStep();
    };

    const nextStep = () => setStep(s => s + 1);

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-50 font-sans selection:bg-indigo-500/30 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="w-full max-w-5xl grid lg:grid-cols-5 gap-12 items-center relative z-10">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-8 block">
                            Aca<span className="text-indigo-500">fort</span>
                        </Link>
                        <h1 className="text-4xl font-bold leading-tight">Register Your <span className="text-indigo-400">Institution</span></h1>
                        <p className="text-slate-400 mt-4 text-lg">Provide your school details to begin the administrative transformation.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { id: 1, label: "School Information" },
                            { id: 2, label: "Official Location" },
                            { id: 3, label: "Contact Person" },
                            { id: 4, label: "Final Review" }
                        ].map((s) => (
                            <div key={s.id} className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === s.id ? "bg-indigo-600 text-white ring-4 ring-indigo-500/20" :
                                    step > s.id ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-500"
                                    }`}>
                                    {step > s.id ? <CheckCircle2 size={20} /> : s.id}
                                </div>
                                <span className={`font-medium ${step === s.id ? "text-white" : "text-slate-500"}`}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-3 bg-slate-900/50 backdrop-blur-2xl border border-white/5 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-black/50"
                >
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold mb-4">School Profile</h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Full Official School Name"
                                            value={formData.schoolName}
                                            onChange={(e) => updateFormData("schoolName", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Quote className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="text"
                                            placeholder="School Motto"
                                            value={formData.schoolMotto}
                                            onChange={(e) => updateFormData("schoolMotto", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500 italic"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest pl-1">Available Sections</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {SCHOOL_SECTIONS.map((section) => (
                                                <button
                                                    key={section.id}
                                                    onClick={() => toggleSection(section.id)}
                                                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedSections.includes(section.id)
                                                        ? "bg-indigo-500/10 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                                                        : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                                                        }`}
                                                >
                                                    <span className="font-medium">{section.label}</span>
                                                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${selectedSections.includes(section.id)
                                                        ? "bg-indigo-500 border-indigo-500 text-white"
                                                        : "border-slate-600 bg-slate-800"
                                                        }`}>
                                                        {selectedSections.includes(section.id) && <Check size={14} />}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="email"
                                            placeholder="Official School Email"
                                            value={formData.schoolEmail}
                                            onChange={(e) => updateFormData("schoolEmail", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <input
                                                type="tel"
                                                placeholder="School Contact Tel 1"
                                                value={formData.schoolTel1}
                                                onChange={(e) => updateFormData("schoolTel1", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <input
                                                type="tel"
                                                placeholder="School Contact Tel 2"
                                                value={formData.schoolTel2}
                                                onChange={(e) => updateFormData("schoolTel2", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div className="relative">
                                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <input
                                                type="text"
                                                placeholder="Reg No."
                                                value={formData.regNo}
                                                onChange={(e) => updateFormData("regNo", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <select
                                                value={formData.population}
                                                onChange={(e) => updateFormData("population", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white appearance-none"
                                            >
                                                <option value="" disabled className="bg-[#0f172a]">Population</option>
                                                <option value="small" className="bg-[#0f172a]">1-200</option>
                                                <option value="medium" className="bg-[#0f172a]">201-500</option>
                                                <option value="large" className="bg-[#0f172a]">500+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={nextStep}
                                    disabled={selectedSections.length === 0}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                                >
                                    Next: Location Details <ArrowRight size={20} />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold mb-6">Official Location</h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            value={formData.streetAddress}
                                            onChange={(e) => updateFormData("streetAddress", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <select
                                                value={formData.state}
                                                onChange={(e) => updateFormData("state", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white appearance-none"
                                            >
                                                <option value="" disabled className="bg-[#0f172a]">Select State</option>
                                                {Object.keys(NIGERIAN_STATES).map(state => (
                                                    <option key={state} value={state} className="bg-[#0f172a]">{state}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <select
                                                value={formData.lga}
                                                onChange={(e) => updateFormData("lga", e.target.value)}
                                                disabled={!formData.state}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white appearance-none disabled:opacity-50"
                                            >
                                                <option value="" disabled className="bg-[#0f172a]">Select LGA</option>
                                                {formData.state && NIGERIAN_STATES[formData.state as keyof typeof NIGERIAN_STATES].map(lga => (
                                                    <option key={lga} value={lga} className="bg-[#0f172a]">{lga}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Year Established"
                                            value={formData.yearEstablished}
                                            onChange={(e) => updateFormData("yearEstablished", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setStep(1)} className="w-1/3 bg-white/5 hover:bg-white/10 text-white font-medium py-4 rounded-2xl transition-all">Back</button>
                                    <button
                                        onClick={nextStep}
                                        className="w-2/3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                                    >
                                        Next: Contact Person <ArrowRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold mb-6">Contact Person</h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Full Name (Admin / Principal)"
                                            value={formData.adminName}
                                            onChange={(e) => updateFormData("adminName", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="email"
                                            placeholder="Official Work Email"
                                            value={formData.adminEmail}
                                            onChange={(e) => updateFormData("adminEmail", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={formData.adminPhone}
                                            onChange={(e) => updateFormData("adminPhone", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 transition-all text-white placeholder:text-slate-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setStep(2)} className="w-1/3 bg-white/5 hover:bg-white/10 text-white font-medium py-4 rounded-2xl transition-all">Back</button>
                                    <button
                                        onClick={handleFinish}
                                        className="w-2/3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                                    >
                                        Complete & Notify Admin <ArrowRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6 text-center"
                            >
                                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-emerald-500/10">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold">Request Submitted!</h3>
                                <p className="text-slate-400">Your information has been sent to our desk. We'll reach out on WhatsApp to finalize your setup.</p>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left space-y-3">
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Next Step</p>
                                        <p className="text-white">Our team is reviewing your application.</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => router.push('/')}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]"
                                >
                                    Return to Home
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
