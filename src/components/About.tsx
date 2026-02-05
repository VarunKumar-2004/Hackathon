"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users2, Shield } from 'lucide-react';

const features = [
    {
        icon: <Target className="w-6 h-6 text-cyan-400" />,
        title: "Innovation First",
        description: "Shift from traditional coding to solving real-world challenges using cutting-edge technology stacks."
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Rapid Execution",
        description: "48 hours of uninterrupted building, testing, and refining your vision into a working prototype."
    },
    {
        icon: <Users2 className="w-6 h-6 text-purple-400" />,
        title: "Collaboration",
        description: "Connect with fellow developers, mentors, and industry experts to scale your ideas."
    },
    {
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        title: "Secure Future",
        description: "Focus on building robust, scalable, and secure systems that stand the test of time."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Decorative Accents */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                            <span>01 // MISSION_OVERVIEW</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
                            REDEFINING THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">DIGITAL LANDSCAPE</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8 font-mono">
                            JNTUGV HACKS 2026 isn't just a competition; it's a launchpad for the next generation of architects. Hosted by the Department of IT, we provide the infrastructure for your creativity to thrive.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                    Our Vision
                                </h4>
                                <p className="text-gray-500 text-sm italic leading-snug">
                                    "To create a hub of innovation where code meets reality and solves societal problems."
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                    Commitment
                                </h4>
                                <p className="text-gray-500 text-sm italic leading-snug">
                                    Providing a high-octane environment with mentorship and industry exposure for 48 hours.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Feature Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-white/10 transition-all group hover:-translate-y-1 shadow-xl"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
