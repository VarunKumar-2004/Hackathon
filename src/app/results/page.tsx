"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Terminal, Award, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

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
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Status</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-mono">
                        The evaluation for Level 1 is complete. Access the official shortlist documents below to verify your qualification.
                    </p>
                </motion.div>

                {/* Download Section */}
                <div className="grid gap-6">
                    {/* Intermediate Result Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all" />

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-blue-500/20 rounded-2xl border border-blue-500/20 text-blue-400">
                                    <FileText size={32} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 rounded">Level 01 Results</span>
                                        <ShieldCheck size={12} className="text-blue-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Beginner Phase Shortlist</h2>
                                    <p className="text-gray-500 text-sm font-mono mt-1">Candidates qualified for Level 2 (Virtual)</p>
                                </div>
                            </div>

                            <a
                                href="/results.pdf"
                                download="PyTech_Arena_2026_Shortlist.pdf"
                                target="_blank"
                                className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/40 group-hover:scale-105 active:scale-95"
                            >
                                <Download size={18} />
                                Download Now
                            </a>
                        </div>
                    </motion.div>

                    {/* Advanced Result Card (Locked/Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group p-8 rounded-3xl bg-white/[0.01] border border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-purple-500/10 rounded-2xl border border-white/5 text-purple-400/50">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Level 02 Results</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-400">Intermediate Phase Shortlist</h2>
                                    <p className="text-gray-500 text-sm font-mono mt-1">Status: Encrypting Data...</p>
                                </div>
                            </div>
                            <div className="px-8 py-4 bg-white/5 border border-white/10 text-gray-500 rounded-2xl font-bold text-sm uppercase tracking-widest">
                                Coming Soon
                            </div>
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
                        Notice to qualifiers: Registration for the next mission phase is mandatory.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
