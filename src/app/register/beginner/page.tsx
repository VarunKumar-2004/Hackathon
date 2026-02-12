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
        <main className="min-h-screen bg-[#020617] text-white selection:bg-purple-500/30 pb-20 pt-32">
            <div className="max-w-[1400px] mx-auto px-1 md:px-2">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Banner Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                        >
                            <img
                                src="/posters/beginner.jpeg"
                                alt="Beginner Track - Python Foundations & Logical Thinking"
                                className="w-full h-full object-cover"
                            />
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
                                <DetailItem icon={<Calendar />} label="Date" value="16th Feb to 17th Feb 2026" />
                                <DetailItem icon={<Clock />} label="Time" value="9 AM to 4 PM" />
                                <DetailItem icon={<CircleDollarSign />} label="Registration Fee" value="₹50 / Member" />
                            </div>

                            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-3">
                                <Info className="w-5 h-5 text-yellow-500 shrink-0" />
                                <p className="text-[11px] md:text-[13px] text-yellow-500/80 leading-tight">
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
                                    src="/formQr/beginnerQr.jpeg"
                                    alt="Registration QR"
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                                    <ExternalLink className="text-white w-8 h-8" />
                                </div>
                            </div>

                            <a
                                href="https://forms.gle/rCRqUhB8HD4tGWSA6"
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
