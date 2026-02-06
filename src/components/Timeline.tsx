"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Clock, MapPin, Star } from 'lucide-react';

const events = [
    {
        date: "NOW",
        title: "Registrations Open",
        description: "Join the elite developers. Secure your spot in the PyTech Arena buildathon.",
        icon: <Star className="w-5 h-5" />,
        color: "text-emerald-400",
        borderColor: "border-emerald-500/50",
        bgColor: "bg-emerald-500/10"
    },
    {
        date: "13 Feb 2026",
        title: "Registrations Deadline",
        description: "Last call for entries. Registration portal will close at midnight strictly.",
        icon: <Clock className="w-5 h-5" />,
        color: "text-orange-400",
        borderColor: "border-orange-500/50",
        bgColor: "bg-orange-500/10"
    },
    {
        date: "13 - 17 Feb 2026",
        title: "Beginner Phase Evaluation",
        description: "Mentors and judges review projects submitted by beginner tracks.",
        icon: <Calendar className="w-5 h-5" />,
        color: "text-cyan-400",
        borderColor: "border-cyan-500/50",
        bgColor: "bg-cyan-500/10"
    },
    {
        date: "18 Feb 2026",
        title: "Beginner Results & Certificates",
        description: "Results announcement for beginners and issuance of e-certificates.",
        icon: <CheckCircle2 className="w-5 h-5" />,
        color: "text-purple-400",
        borderColor: "border-purple-500/50",
        bgColor: "bg-purple-500/10"
    },
    {
        date: "19 - 21 Feb 2026",
        title: "Intermediate Phase Evaluation",
        description: "Technical review and deep dive into intermediate track submissions.",
        icon: <Calendar className="w-5 h-5" />,
        color: "text-cyan-400",
        borderColor: "border-cyan-500/50",
        bgColor: "bg-cyan-500/10"
    },
    {
        date: "22 Feb 2026",
        title: "Intermediate Phase Results",
        description: "Finalists for the offline hackathon will be announced.",
        icon: <Star className="w-5 h-5" />,
        color: "text-indigo-400",
        borderColor: "border-indigo-500/50",
        bgColor: "bg-indigo-500/10"
    },
    {
        date: "27 - 28 Feb 2026",
        title: "Offline Grand Finale",
        description: "48 hours of intense coding at JNTU-GV College of Engineering, Vizianagaram.",
        icon: <MapPin className="w-5 h-5" />,
        color: "text-emerald-400",
        borderColor: "border-emerald-500/50",
        bgColor: "bg-emerald-500/10"
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 relative overflow-hidden bg-[#02040a]">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
                    >
                        <Clock size={14} className="animate-pulse" />
                        <span>EVENT_SCHEDULE_V1.0</span>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        Road To <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Victory</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
                        Follow the mission timeline from initial transmission to local deployment.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`relative flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-row`}
                            >
                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                    }`}>
                                    <div className={`glass-card p-6 rounded-2xl border ${event.borderColor} hover:bg-white/[0.04] transition-all duration-300 group`}>
                                        <div className={`inline-flex items-center gap-2 mb-3 font-mono text-xs font-bold ${event.color}`}>
                                            <span className="opacity-70">&lt;</span>
                                            {event.date}
                                            <span className="opacity-70">&gt;</span>
                                        </div>
                                        <h3 className="md:text-xl text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-400 lg:text-sm text-xs leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Dot / Icon */}
                                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-0 md:-translate-y-1/2 md:-translate-x-1/2 z-20">
                                    <div className={`w-10 h-10 rounded-full ${event.bgColor} border-2 ${event.borderColor} flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl group-hover:scale-110 transition-transform`}>
                                        <div className={event.color}>
                                            {event.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for Desktop */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
