"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    Clock,
    CircleDollarSign,
    ExternalLink,
    CheckCircle2,
    Cpu,
    Code2,
    BookOpen,
    Info,
    LucideProps
} from "lucide-react";

export default function BeginnerRegistration() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30 pb-20 pt-32">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Banner Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-black p-8 md:p-12 shadow-2xl"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />

                            <div className="text-center md:text-left space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-lg md:text-xl font-bold tracking-wider text-gray-300 uppercase">
                                        JNTU-GV College of Engineering Vizianagaram (A)
                                    </h2>
                                    <h3 className="text-md md:text-lg font-semibold text-purple-400 uppercase tracking-widest">
                                        Department of Information Technology
                                    </h3>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                                    PyTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Arena 2026</span>
                                </h1>

                                <div className="space-y-4">
                                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                                        LEVEL_01 // FOUNDATIONS_TRACK
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                                        Python Foundations & <br /> Logical Thinking
                                    </h2>
                                </div>

                                <div className="flex flex-wrap gap-6 pt-4 text-sm font-mono text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-purple-500" />
                                        <span>FEB 27-28, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-purple-500" />
                                        <span>AB-2, JNTUGV-CEV</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Detailed Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-12"
                        >
                            <section>
                                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Track Overview
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg italic">
                                    "Join us for an intensive foundation track where you'll learn the core principles of modern programming. This hands-on session covers logical thinking, algorithm design, and core Python syntax. You'll work on real-world logic puzzles and build your first set of functional scripts, equipping you with the base needed for advanced AI development."
                                </p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-12">
                                <section>
                                    <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                                        <Cpu className="w-5 h-5" />
                                        Prerequisites
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Laptops with Python 3.10+ installed",
                                            "A curious mind & logical approach",
                                            "Basic computer operation skills",
                                            "Internet connectivity for documentation"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 group">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                                        <Code2 className="w-5 h-5" />
                                        Learning Outcomes
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Master Python syntax and core data types",
                                            "Understand control flow and logical operators",
                                            "Build custom functions for modular code",
                                            "Basic file handling and error management",
                                            "Qualify for Level 2 (Intermediate) track"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 group">
                                                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                                <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-8">
                        {/* Workshop Details Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gray-900/40 border border-white/5 rounded-3xl p-8"
                        >
                            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Track Details</h3>
                            <div className="space-y-6">
                                <DetailItem icon={<Calendar />} label="Date" value="Feb 27 and 28" />
                                <DetailItem icon={<Clock />} label="Duration" value="2 Full Days" />
                                <DetailItem icon={<Clock />} label="Time" value="9 AM to 4 PM" />
                                <DetailItem icon={<CircleDollarSign />} label="Registration Fee" value="₹50 / Member" />
                            </div>

                            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-3">
                                <Info className="w-5 h-5 text-yellow-500 shrink-0" />
                                <p className="text-[10px] text-yellow-500/80 leading-tight">
                                    Before registering this track, ensure your batch details (min 2 members) are finalized.
                                </p>
                            </div>
                        </motion.div>

                        {/* QR Code Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900/40 border border-white/5 rounded-3xl p-8 text-center"
                        >
                            <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase">Register via Google Form</h3>

                            <div className="relative aspect-square max-w-[200px] mx-auto mb-6 bg-white p-4 rounded-2xl group cursor-pointer transition-transform hover:scale-105">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://forms.gle/your-beginner-form"
                                    alt="Registration QR"
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                                    <ExternalLink className="text-white w-8 h-8" />
                                </div>
                            </div>

                            <a
                                href="https://forms.gle/your-beginner-form"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/40"
                            >
                                Register Now
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function DetailItem({ icon, label, value }: { icon: React.ReactElement<LucideProps>, label: string, value: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                {React.cloneElement(icon, { size: 18 })}
            </div>
            <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-gray-300">{value}</p>
            </div>
        </div>
    );
}
