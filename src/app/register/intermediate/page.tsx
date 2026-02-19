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

export default function IntermediateRegistration() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 pb-20 pt-32">
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
                                src="/posters/beginner.jpeg" // Placeholder as no intermediate poster found
                                alt="Intermediate Track - Application Development"
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
                                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Track Overview
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg italic">
                                    "Take your Python skills to the next level. This track focuses on building real-world applications using Object-Oriented Programming (OOP), Data Analysis with Pandas/NumPy, and modular coding practices. Learn how to handle complex data structures and create scalable software architectures."
                                </p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-12">
                                <section>
                                    <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                                        <Cpu className="w-5 h-5" />
                                        Prerequisites
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Proficiency in Python basics (Level 1)",
                                            "Laptops with Python 3.10+ installed",
                                            "Knowledge of basic data structures",
                                            "Internet connectivity for documentation"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 group">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                                <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
                                        <Code2 className="w-5 h-5" />
                                        Learning Outcomes
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Advanced OOP concepts and Design Patterns",
                                            "Data manipulation with Pandas & NumPy",
                                            "Effective Exception Handling & Debugging",
                                            "Building Modular and Scalable codebases",
                                            "Qualify for Level 3 (Advanced/Offline) track"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 group">
                                                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
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
                                <DetailItem icon={<Calendar />} label="Date" value="19th Feb to 21st Feb 2026" />
                                <DetailItem icon={<CircleDollarSign />} label="Registration Fee" value="₹100 / Member" />
                            </div>

                            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl flex gap-3">
                                <Info className="w-5 h-5 text-blue-500 shrink-0" />
                                <p className="text-[11px] md:text-[13px] text-blue-500/80 leading-tight">
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
                                    src="/formQr/intermediateqr.jpeg"
                                    alt="Registration QR"
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                                    <ExternalLink className="text-white w-8 h-8" />
                                </div>
                            </div>

                            <a
                                href="https://forms.gle/eG42EkWWQLVZECvp7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
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
            <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                {React.cloneElement(icon, { size: 18 })}
            </div>
            <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-gray-300">{value}</p>
            </div>
        </div>
    );
}
