"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Terminal, Award, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Results() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-purple-500/30">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 animate-pulse">
                        <Terminal size={14} />
                        TRANSMISSION_RECEIVED // RESULTS_PROTOCOL_ACTIVE
                    </div>
                    <h1 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">
                        Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Status</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-mono">
                        Level 1 and Level 2 missions are now completed. Advanced phase problem statements are available below.
                    </p>
                </motion.div>

                <div className="grid gap-6">

                    {/* Beginner - COMPLETED */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden p-8 rounded-3xl bg-white/[0.03] border border-emerald-500/30"
                    >
                        <div className="flex items-center gap-5">
                            <div className="p-4 bg-emerald-500/20 rounded-2xl border border-emerald-500/20 text-emerald-400">
                                <CheckCircle2 size={32} />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white">Beginner Phase</h2>
                                <p className="text-emerald-400 text-sm font-mono mt-1">
                                    STATUS: COMPLETED
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Intermediate - COMPLETED */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative overflow-hidden p-8 rounded-3xl bg-white/[0.03] border border-blue-500/30"
                    >
                        <div className="flex items-center gap-5">
                            <div className="p-4 bg-blue-500/20 rounded-2xl border border-blue-500/20 text-blue-400">
                                <CheckCircle2 size={32} />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white">Intermediate Phase</h2>
                                <p className="text-blue-400 text-sm font-mono mt-1">
                                    STATUS: COMPLETED
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Advanced Level - DOWNLOAD ENABLED */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-yellow-400 animate-bounce">
                                    <Sparkles size={32} />
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        Advanced Phase Challenge
                                    </h2>
                                    <p className="text-gray-400 text-sm font-mono">
                                        Download official problem statements for the Grand Finale.
                                    </p>
                                </div>
                            </div>

                            <a
                                href="/problems/FinalAdvancedlevel.pdf"
                                download="Advanced.pdf"
                                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-2xl font-black transition-all shadow-xl group-hover:scale-105 active:scale-95"
                            >
                                <FileText size={20} />
                                DOWNLOAD PDF
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 text-center"
                >
                    <div className="flex justify-center mb-4 text-yellow-500/50">
                        <Sparkles size={24} />
                    </div>
                    <p className="text-gray-500 text-sm font-mono max-w-2xl mx-auto leading-relaxed">
                        Advanced participants must download and complete the challenge before the final evaluation.
                    </p>
                </motion.div>

            </div>
        </main>
    );
}