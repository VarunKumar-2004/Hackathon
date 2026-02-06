"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Terminal, MapPin, ExternalLink, User } from "lucide-react";

const contacts = [
    {
        name: "Mr. P.Rama Krishna",
        phone: "+91 6303843315",
        image: "/coordinators/ramakrishna.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/ramakrishna",
            instagram: "https://instagram.com/ramakrishna"
        }
    },
    {
        name: "Mr. J.Vinay",
        phone: "+91 9701458518",
        image: "/coordinators/vinay.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/ramakrishna",
            instagram: "https://instagram.com/ramakrishna"
        }
    },
    {
        name: "Mr. S.Ramayya",
        phone: "+91 8919496691",
        image: "/coordinators/ramayya.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/ramakrishna",
            instagram: "https://instagram.com/ramakrishna"
        }
    },
    {
        name: "Mrs. V.Varshitha",
        image: "/coordinators/varshitha.jpeg",
    },
    {
        name: "Mrs. K.Sandhya",
        image: "/coordinators/sandhya.jpeg"
    },
    {
        name: "Mrs. M.Charitha",
        image: "/coordinators/charitha.jpeg"
    }
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6">
                <header className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6"
                    >
                        <Terminal size={14} />
                        <span>COMMUNICATION_CHANNELS_v1.0</span>
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Touch</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed">
                        Have questions about the buildathon? Reach out to our student coordinators for immediate assistance.
                    </p>
                </header>

                {/* Contact Cards Grid - Square version */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px]"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative h-full bg-gray-900/40 border border-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl flex flex-col group-hover:border-purple-500/50 transition-all duration-300">
                                {/* Image Section (Top) */}
                                <div className="h-[65%] relative overflow-hidden">
                                    <img
                                        src={contact.image}
                                        alt={contact.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=111827&color=a855f7&bold=true&size=256`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                                </div>

                                {/* Content Section (Bottom) - Centered in remaining square */}
                                <div className="p-4 flex flex-col items-center text-center justify-center flex-1">
                                    <span className="text-purple-400 font-mono text-[9px] uppercase tracking-[0.2em] font-bold mb-1">
                                        COORDINATOR
                                    </span>

                                    <h3 className="text-base font-black text-white mb-2  tracking-tight group-hover:text-purple-400 transition-colors">
                                        {contact.name}
                                    </h3>

                                    {/* Phone Link (Conditional) */}
                                    {contact.phone && (
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-3 group/phone"
                                        >
                                            <Phone size={12} className="text-cyan-400 group-hover/phone:scale-110 transition-transform" />
                                            <span className="text-xs font-mono tracking-tighter">{contact.phone}</span>
                                        </a>
                                    )}

                                    {/* Social Icons (Conditional) */}
                                    {contact.socials && (Object.keys(contact.socials).length > 0) && (
                                        <div className="flex items-center gap-3 pt-3 border-t border-white/5 w-full justify-center">
                                            {contact.socials.linkedin && (
                                                <motion.a
                                                    whileHover={{ y: -2, scale: 1.1 }}
                                                    href={contact.socials.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </motion.a>
                                            )}
                                            {contact.socials.instagram && (
                                                <motion.a
                                                    whileHover={{ y: -2, scale: 1.1 }}
                                                    href={contact.socials.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-lg bg-pink-600/10 border border-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                    </svg>
                                                </motion.a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* General Inquiry Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 text-center p-12 bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-[3rem]"
                >
                    <div className="inline-flex p-4 bg-purple-600/20 rounded-2xl text-purple-400 mb-8 scale-125 shadow-glow">
                        <MessageSquare size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-4">Still have questions?</h2>
                    <p className="text-gray-400 mb-8 font-mono text-sm">Send us a general inquiry and we'll get back to you within 24 hours.</p>
                    <a
                        href="mailto:support@pytecharena.in"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl"
                    >
                        Official Support Email
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
