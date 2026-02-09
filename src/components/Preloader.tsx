"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., 2.5 seconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden font-sans"
                >
                    {/* Background Grid Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Logo / Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">
                                <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                    PyTech
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 ml-4 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                                    Arena
                                </span>
                            </h1>
                        </motion.div>

                        {/* Loading Spinner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="relative w-24 h-24 flex items-center justify-center"
                        >
                            {/* Rotating Outer Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-500/50"
                            />
                            {/* Rotating Inner Ring (Reverse) */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border-b-2 border-l-2 border-purple-500/50"
                            />
                            {/* Pulsing Core */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"
                            />
                        </motion.div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-cyan-200/60 font-mono text-sm uppercase tracking-[0.3em] animate-pulse"
                        >
                            Initializing System...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
