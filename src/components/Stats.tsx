"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Schools Managed", value: 120, suffix: "+" },
    { label: "Active Students", value: 45, suffix: "k+" },
    { label: "Paper Saved (Est)", value: 2, suffix: "M+" },
    { label: "System Uptime", value: 99.9, suffix: "%", isFloat: true }
];

function AnimatedCounter({ value, suffix, isFloat }: { value: number; suffix: string; isFloat?: boolean }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { stiffness: 40, damping: 15, duration: 2000 });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    const display = useTransform(spring, (current) => {
        if (isFloat) {
            return current.toFixed(1) + suffix;
        }
        return Math.floor(current) + suffix;
    });

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
    return (
        <section id="stats" className="py-20 border-y border-white/5 bg-slate-950/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
                            </div>
                            <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

