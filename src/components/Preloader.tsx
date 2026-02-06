"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

export default function Preloader() {
    const [isOpened, setIsOpened] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleOpen = () => {
        setIsOpened(true);
        // Step 1: Ribbon unties after a tiny delay
        setTimeout(() => {
            // Step 2: Curtains open after ribbon is "unwrapped"
            setIsOpen(true);
        }, 1000);

        // Step 3: Remove from DOM after all animations
        setTimeout(() => {
            setIsVisible(false);
        }, 2500);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black font-serif"
                >
                    {/* Left Red Curtain */}
                    <motion.div
                        animate={{ x: isOpen ? "-100%" : 0 }}
                        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                        className="absolute left-0 top-0 w-1/2 h-full z-20 shadow-[20px_0_50px_rgba(0,0,0,0.7)]"
                        style={{
                            background: "linear-gradient(90deg, #450a0a 0%, #991b1b 15%, #7f1d1d 30%, #b91c1c 50%, #7f1d1d 70%, #991b1b 85%, #450a0a 100%)",
                            backgroundSize: "40% 100%"
                        }}
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
                    </motion.div>

                    {/* Right Red Curtain */}
                    <motion.div
                        animate={{ x: isOpen ? "100%" : 0 }}
                        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                        className="absolute right-0 top-0 w-1/2 h-full z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.7)]"
                        style={{
                            background: "linear-gradient(90deg, #450a0a 0%, #991b1b 15%, #7f1d1d 30%, #b91c1c 50%, #7f1d1d 70%, #991b1b 85%, #450a0a 100%)",
                            backgroundSize: "40% 100%"
                        }}
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
                    </motion.div>

                    {/* Ribbon - Horizontal */}
                    <AnimatePresence>
                        {!isOpened && (
                            <motion.div
                                exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.5 } }}
                                className="absolute inset-x-0 h-16 md:h-20 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 z-30 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                            >
                                <div className="absolute top-0 inset-x-0 h-1 bg-white/20" />
                                <div className="absolute bottom-0 inset-x-0 h-1 bg-black/20" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Ribbon Pieces (Animated opening) */}
                    {isOpened && (
                        <>
                            <motion.div
                                initial={{ x: 0, scaleY: 1 }}
                                animate={{ x: "-100%", scaleY: 0, rotate: -15, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="absolute left-0 w-1/2 h-16 md:h-20 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 z-30 pointer-events-none"
                            />
                            <motion.div
                                initial={{ x: 0, scaleY: 1 }}
                                animate={{ x: "100%", scaleY: 0, rotate: 15, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="absolute right-0 w-1/2 h-16 md:h-20 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 z-30 pointer-events-none"
                            />
                        </>
                    )}

                    {/* Main Interaction Area */}
                    <div className="relative z-40 text-center flex flex-col items-center gap-10">
                        <AnimatePresence>
                            {!isOpened && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
                                    className="flex flex-col items-center"
                                >
                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="mb-8"
                                    >
                                        <img
                                            src="/partners/jntugv.png"
                                            alt="JNTUGV"
                                            className="w-24 h-24 md:w-36 md:h-36 object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                                        />
                                    </motion.div>

                                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-12 tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] italic">
                                        PyTech <span className="text-yellow-500">Arena</span>
                                    </h1>

                                    <button
                                        onClick={handleOpen}
                                        className="group relative transition-all active:scale-90"
                                    >
                                        {/* Gift Box Style Button */}
                                        <div className="relative bg-red-600 p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.2)] border-4 border-yellow-500/50 group-hover:border-yellow-400 group-hover:bg-red-500 transition-all overflow-hidden">
                                            {/* Ribbon Cross on Button */}
                                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 md:w-6 bg-yellow-500 shadow-lg" />
                                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 md:h-6 bg-yellow-500 shadow-lg" />

                                            <div className="relative z-10 flex flex-col items-center gap-4">
                                                <span className="text-white font-black text-3xl md:text-5xl uppercase tracking-[0.3em] italic drop-shadow-md">
                                                    Open
                                                </span>
                                            </div>

                                            {/* Sparkles around button */}
                                            <motion.div
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="absolute top-2 right-2 text-yellow-300"
                                            >
                                                <Sparkles size={24} />
                                            </motion.div>
                                        </div>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Grand Entrance Welcome */}
                        <AnimatePresence>
                            {isOpened && !isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center -mt-20"
                                >
                                    <h2 className="text-6xl md:text-9xl font-black text-yellow-400 italic tracking-tighter uppercase drop-shadow-[0_0_50px_rgba(234,179,8,0.5)]">
                                        Welcome
                                    </h2>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Spotlight & Atmospheric Lighting */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full bg-gradient-to-b from-white/10 to-transparent blur-[120px] opacity-40" />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
