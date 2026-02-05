"use client";
import React from "react";
import Link from "next/link";
import { Clock, Code2, Trophy, Users, Brain, Layers, MapPin, Globe, Award, Sparkles, Lock } from "lucide-react";
import { motion } from "framer-motion";

const tracks = [
    {
        level: "Level 1",
        title: "Beginners",
        subtitle: "Foundations Track",
        goal: "Build confidence + logical thinking",
        time: "Virtual Mode",
        skills: ["Variables, loops, conditionals", "Functions", "Lists, dictionaries", "File handling"],
        perks: ["E-Certificates for participants", "Top 10 Merit Certificates"],
        nextStep: "Qualify for Level 2 (Intermediate)",
        price: "₹50",
        color: "from-emerald-400 to-green-600",
        border: "border-emerald-500/30",
        icon: <Code2 className="w-6 h-6" />,
        mode: "virtual",
        registrationUrl: "/register/beginner"
    },
    {
        level: "Level 2",
        title: "Intermediate",
        subtitle: "Application Track",
        goal: "Real-world problem solving",
        time: "Virtual Mode",
        skills: ["OOP in Python", "Pandas, NumPy", "Exception handling", "Modular coding"],
        perks: ["E-Certificates for participants", "Top 10 Merit Certificates"],
        nextStep: "Qualify for Level 3 (Advanced)",
        price: "₹100",
        color: "from-blue-400 to-indigo-600",
        border: "border-blue-500/30",
        icon: <Layers className="w-6 h-6" />,
        mode: "virtual",
        registrationUrl: "#",
        isLocked: true
    },
    {
        level: "Level 3",
        title: "Advanced",
        subtitle: "Innovation & HPC Track",
        goal: "Performance + innovation",
        time: "Offline @ JNTUGV AB-2",
        skills: ["Advanced Python", "Parallel programming", "AI Integration", "Optimization"],
        perks: [
            "🏆 1st Prize: ₹25,000",
            "🥈 2nd Prize: ₹15,000",
            "🥉 3rd Prize: ₹7,000"
        ],
        nextStep: "Grand Finale Winner",
        price: "₹250",
        color: "from-purple-400 to-pink-600",
        border: "border-purple-500/30",
        icon: <Brain className="w-6 h-6" />,
        mode: "offline",
        isAdvanced: true,
        registrationUrl: "#",
        isLocked: true
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function Tracks() {
    return (
        <section id="tracks" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 tracking-tight text-white uppercase">
                        Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-md sm:text-lg font-mono">
                        <span className="text-emerald-400">Beginners</span> → <span className="text-blue-400">Intermediate</span> → <span className="text-purple-400">Advanced</span>
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
                >
                    {tracks.map((track) => (
                        <motion.div
                            key={track.level}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className={`cyber-card rounded-3xl group flex flex-col h-full bg-[#050510]/80 backdrop-blur-xl border border-white/10 ${track.border} ${track.isAdvanced ? 'ring-2 ring-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] md:col-span-2 lg:col-span-1 max-w-2xl mx-auto lg:max-w-none' : ''}`}
                        >
                            {/* Animated Header */}
                            <div className="p-6 md:p-8 relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${track.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

                                <div className="flex justify-between items-start mb-6 relative">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${track.color} animate-pulse`} />
                                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{track.level}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {track.title}
                                        </h3>
                                        <p className={`text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${track.color}`}>
                                            {track.subtitle}
                                        </p>
                                    </div>
                                    <div className={`p-2.5 md:p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                                        {track.icon}
                                    </div>
                                </div>

                                <div className="space-y-4 font-mono text-xs md:text-sm">
                                    <div className="flex items-center text-gray-300">
                                        {track.mode === 'virtual' ? <Globe className="w-4 h-4 mr-3 text-emerald-400 shrink-0" /> : <MapPin className="w-4 h-4 mr-3 text-purple-400 shrink-0" />}
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{track.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 bg-white/5 p-3 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                                        <Trophy className="w-4 h-4 mr-3 text-yellow-500 shrink-0" />
                                        <span className="text-xs md:text-sm">{track.goal}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <Award className="w-4 h-4 mr-3 text-cyan-500 shrink-0" />
                                        <span className="text-emerald-400 font-bold text-[10px] md:text-xs">{track.nextStep}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rewards Area - HIGHLIGHTED */}
                            <div className={`px-6 md:px-8 py-4 md:py-5 border-t border-white/5 ${track.isAdvanced ? 'bg-purple-500/10' : 'bg-white/[0.02]'}`}>
                                <h4 className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                    {track.isAdvanced ? <Sparkles size={12} className="text-yellow-400" /> : null}
                                    {track.isAdvanced ? "Grand Prize Pool" : "Participation Rewards"}
                                </h4>
                                <div className="space-y-2">
                                    {track.perks.map((perk, i) => (
                                        <div key={i} className={`flex items-center gap-2 text-[10px] md:text-xs ${track.isAdvanced ? 'bg-white/5 p-2 rounded-lg border border-white/5' : ''}`}>
                                            {!track.isAdvanced && <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${track.color}`} />}
                                            <span className={track.isAdvanced ? "text-white font-bold" : "text-gray-400 line-clamp-1"}>
                                                {perk.split(':').map((part, index) => (
                                                    <span key={index} className={index === 1 ? "text-yellow-400 text-xs sm:text-sm ml-1" : ""}>
                                                        {part}{index === 0 && track.isAdvanced ? ":" : ""}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Area */}
                            <div className="px-6 md:px-8 py-5 md:py-6 border-t border-white/5 bg-black/20 flex-grow">
                                <h4 className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <Code2 className="w-3 h-3 text-cyan-500" /> Technology Stack
                                </h4>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {track.skills.map((skill) => (
                                        <span key={skill} className="text-[9px] md:text-[10px] font-mono bg-[#050510] border border-white/10 px-2 md:px-3 py-1.5 rounded-lg text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="p-6 md:p-8 mt-auto border-t border-white/5 relative bg-white/[0.04]">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-gray-400 text-[9px] uppercase tracking-widest mb-1">Registration Fee</p>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-2xl md:text-3xl font-black text-white leading-none">{track.price}</p>
                                            <span className="text-[9px] text-white/60 uppercase font-bold tracking-wider">/ Member</span>
                                        </div>
                                    </div>
                                    {track.isLocked ? (
                                        <div className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-xs text-gray-400 bg-white/5 border border-white/10 flex items-center justify-center gap-2 cursor-not-allowed">
                                            <Lock size={12} className="md:w-3.5 md:h-3.5" />
                                            Locked
                                        </div>
                                    ) : (
                                        <Link
                                            href={track.registrationUrl}
                                            className={`px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-xs text-white bg-gradient-to-r ${track.color} shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-wider block text-center`}
                                        >
                                            Register Now
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mode Info Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center max-w-4xl mx-auto"
                >
                    <p className="text-gray-500 text-sm font-mono leading-relaxed">
                        <span className="text-white font-bold">INFO_LOG:</span> Level 1 & 2 are conducted in <span className="text-cyan-400">Virtual Mode</span>.
                        Level 3 Grand Finale will be held <span className="text-purple-400">Offline @ JNTUGV AB-2 Block</span>.
                        Qualifiers from each level will advance to the next protocol.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
