"use client";
import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: "JNTUGV", logo: "/partners/jntugv.png" },
    { name: "Yukta DevSquad", logo: "/partners/yukta.png" },
    { name: "ACM JNTUGV", logo: "/partners/acm.png" },
    { name: "Nyan", logo: "/partners/nyan.png" },
    { name: "EI Society", logo: "/partners/ei_society.png" },
    { name: "Yukta Kala Sangam", logo: "/partners/yukta_kala_sangam.png" },
    { name: "Yuva Seva Sankalpam", logo: "/partners/yuva_seva.png" },
    { name: "AI/ML Club", logo: "/partners/ai_ml.png" },
    { name: "FST Club", logo: "/partners/fst.png" },
    { name: "Gate Gurukul", logo: "/partners/gate_gurukul.png" }
];

// Double the array for a truly seamless loop
const doubleSponsors = [...sponsors, ...sponsors];

export default function Sponsors() {
    return (
        <section className="py-24 border-y border-white/5 bg-[#02040a] overflow-hidden relative group">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <p className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono uppercase tracking-[0.4em] mb-4 font-black shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                        Collaborators
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                        Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Partners & Clubs</span>
                    </h2>
                </div>

                {/* Enhanced Gradient Masks for perfect blending */}
                <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-[#02040a] via-[#02040a]/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-[#02040a] via-[#02040a]/90 to-transparent z-20 pointer-events-none" />

                <div className="flex overflow-hidden py-8">
                    <motion.div
                        className="flex items-center gap-10 md:gap-20"
                        animate={{
                            x: [0, -180 * sponsors.length - 20 * sponsors.length] // Calculated shift
                        }}
                        transition={{
                            duration: 30, // Faster, more noticeable speed
                            ease: "linear",
                            repeat: Infinity
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {doubleSponsors.map((sponsor, index) => (
                            <div
                                key={index}
                                className="h-20 md:h-28 w-[150px] md:w-[200px] shrink-0 transition-all duration-500 cursor-pointer p-5 bg-white/[0.02] hover:bg-white/[0.08] rounded-3xl border border-white/5 hover:border-purple-500/40 flex items-center justify-center group/logo relative"
                            >
                                {/* Inner Shadow for depth */}
                                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />

                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-full w-full object-contain filter brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.1)] group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=1a1a2e&color=7c3aed&bold=true&size=256&font-size=0.35&rounded=true`;
                                    }}
                                />

                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/logo:opacity-100 group-hover/logo:-bottom-4 transition-all duration-300 pointer-events-none z-30">
                                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[9px] px-3 py-1 rounded-full whitespace-nowrap font-mono font-bold border border-white/20 shadow-xl">
                                        {sponsor.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Visual background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
