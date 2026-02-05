"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Who can participate?",
        answer: "The hackathon is open to all university students, regardless of their major. If you have a passion for building things, you're welcome!"
    },
    {
        question: "Is there a registration fee?",
        answer: "Yes, registration fees are applicable per person within the batch: Level 1 (₹50), Level 2 (₹100), and Level 3 (₹250). The entire batch must complete their registrations to participate."
    },
    {
        question: "What should I bring?",
        answer: "Every batch member should bring their laptop, charger, and any hardware components needed. Don't forget your individual student IDs for verification!"
    },
    {
        question: "Is this a team or individual event?",
        answer: "PyTech Arena is a batch-based challenge. Participants must register in batches (minimum 2 members per batch). We do not assign batches; you must form your own batch before registering."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-24 bg-black/40 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] md:text-xs font-mono mb-4">
                        <HelpCircle size={14} />
                        <span>KNOWLEDGE_BASE</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Queries</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/[0.04] transition-colors"
                            >
                                <span className="text-base md:text-lg font-bold text-gray-200 pr-4">{faq.question}</span>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                                    ) : (
                                        <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-5 md:p-6 pt-0 text-gray-400 font-mono text-xs md:text-sm leading-relaxed border-t border-white/5 mt-0">
                                            <span className="text-yellow-500 mr-2">&gt;</span>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
