"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Timer, Cpu, Activity } from "lucide-react";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2026-02-27T09:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#02040a]">
            {/* Logos at the top ends */}
            <div className="absolute top-8 left-0 right-0 px-6 md:px-12 flex justify-between items-start pointer-events-none z-[60]">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center gap-2 pointer-events-auto"
                >
                    <img
                        src="/partners/jntugv.png"
                        alt="JNTUGV Logo"
                        className="w-8 h-auto md:w-16 lg:w-22 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center gap-2 pointer-events-auto"
                >
                    <a
                        href="https://jntukucev.hosting2.acm.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 block transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    >
                        <img
                            src="/partners/acm.png"
                            alt="ACM Logo"
                            className="w-8 h-auto md:w-16 lg:w-22 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 brightness-125 pointer-events-none"
                        />
                    </a>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="flex items-center mb-8 group/dept">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-md group-hover/dept:border-purple-500/40 transition-all duration-500"
                        >
                            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400 font-mono tracking-[0.2em] text-[10px] sm:text-xs md:text-sm uppercase font-black whitespace-nowrap">
                                Department of Information Technology
                            </span>
                        </motion.div>
                    </div>

                    <h1 className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter cursor-default">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                            Code.
                        </span>

                        <span className="text-white/40 font-light text-2xl select-none mx-1">|</span>

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            Compute.
                        </span>

                        <span className="text-white/40 font-light text-2xl select-none mx-1">|</span>

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600">
                            Create.
                        </span>
                    </h1>

                    <p className="text-gray-200 text-sm md:text-base mb-10 max-w-md leading-loose border-l-2 border-purple-500/30 pl-6">
                        Join the elite developers at{" "}
                        <motion.strong
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            className="font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 cursor-pointer inline-block transition-all duration-300 text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] px-1"
                        >
                            PyTech Arena
                        </motion.strong>.
                        48 hours of intense coding, problem-solving, and deployment mission.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16">
                        <Link href="/#tracks" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] block">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                Register Now <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                        <a href="/#about" className="px-8 py-4 border border-white/10 rounded-xl font-bold text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm block">
                            Learn More
                        </a>
                    </div>

                    {/* Enhanced Countdown Timer */}
                    <div className="relative group/timer max-w-sm">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur opacity-25 group-hover/timer:opacity-50 transition duration-1000" />

                        <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col gap-4 shadow-2xl">
                            <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                <div className="flex items-center gap-2">
                                    <Activity size={12} className="text-purple-400 animate-pulse" />
                                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.3em] font-bold">Protocol_Launch_Sequence</span>
                                </div>
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            </div>

                            <div className="grid grid-cols-4 gap-4 md:gap-6">
                                <CountdownItem value={timeLeft.days} label="DAYS" />
                                <CountdownItem value={timeLeft.hours} label="HOURS" />
                                <CountdownItem value={timeLeft.minutes} label="MINS" />
                                <CountdownItem value={timeLeft.seconds} label="SECS" secondary />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    {/* Holographic Card Effect */}
                    <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-1 shadow-2xl shadow-purple-900/40 rotate-3 hover:rotate-0 transition-all duration-700 ease-out group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="relative h-full w-full bg-[#050510] rounded-[1.3rem] p-8 flex flex-col justify-between overflow-hidden">
                            {/* Grid overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center shadow-inner group-hover:border-cyan-500/50 transition-colors shrink-0">
                                        <Code className="text-cyan-400 w-6 h-6" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Verified_Status</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tighter flex flex-wrap items-center gap-x-3 gap-y-2">
                                            <span>PyTech</span>
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Arena</span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-black italic tracking-[0.2em] text-cyan-400 holographic-text">
                                                BUILDATHON
                                            </span>
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="h-[1px] w-8 bg-gray-800" />
                                        <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Protocol_Active // 2k26</p>
                                    </div>
                                </div>

                                <div className="mt-12 space-y-3">
                                    <div className="h-1.5 bg-gray-900 border border-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["0%", "85%"] }}
                                            transition={{ duration: 2.5, ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                        />
                                    </div>
                                    <div className="flex justify-between text-[9px] font-mono">
                                        <span className="text-gray-500 tracking-tighter uppercase">Compiling_Assets...</span>
                                        <span className="text-white font-bold tracking-widest">85%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative scanline */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent h-20 w-full animate-scanline -z-1" />
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [-20, 20, -20] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 -right-4 w-24 h-24 bg-purple-600/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl"
                    >
                        <Cpu className="text-purple-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [20, -20, 20] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 -left-12 w-20 h-20 bg-cyan-600/20 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-2xl"
                    >
                        <Timer className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function CountdownItem({ value, label, secondary }: { value: number; label: string; secondary?: boolean }) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative mb-2">
                <span className={`text-2xl md:text-3xl font-black font-mono tracking-tighter ${secondary ? 'text-cyan-400' : 'text-white'}`}>
                    {value < 10 ? `0${value}` : value}
                </span>
                {/* Subtle shine effect behind number */}
                <div className="absolute inset-0 bg-white/5 blur-lg rounded-full scale-150 -z-10" />
            </div>
            <span className="text-[9px] font-bold text-gray-500 tracking-[0.2em]">{label}</span>
        </div>
    );
}
