"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run on devices that support hover and are not touch devices
        if (window.matchMedia("(hover: none)").matches) {
            return;
        }

        setIsVisible(true);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
            style={{
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(0, 0, 0, 0) 60%)",
            }}
            animate={{
                x: mousePosition.x - 300,
                y: mousePosition.y - 300,
            }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
        />
    );
}
