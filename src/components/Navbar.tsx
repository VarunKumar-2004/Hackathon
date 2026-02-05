"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isFacultyPage = pathname === '/faculty';

    const navItems = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Tracks', href: '/#tracks' },
        { name: 'Faculty', href: '/faculty' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <div className="fixed top-6 md:top-10 left-0 right-0 z-50 flex items-center px-4 md:px-8 pointer-events-none">
                {/* Navbar Container */}
                <div className="flex-1 flex justify-center pointer-events-auto">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="island-nav px-2 py-2 pl-4 md:pl-6 flex items-center justify-between gap-4 md:gap-8 max-w-4xl w-full mx-2 sm:mx-4"
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group shrink-0">
                            <div className="bg-purple-600/20 p-1.5 md:p-2 rounded-lg group-hover:bg-purple-600/40 transition-colors">
                                <Terminal className="w-3.5 h-3.5 md:w-4 h-4 text-purple-400" />
                            </div>
                            <span className="text-sm sm:text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                PyTech<span className="text-purple-500">Arena</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-3 lg:px-4 py-2 text-[12px] lg:text-[14px] text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {!isFacultyPage && (
                            <div className="hidden md:flex items-center gap-4">
                                <Link href="/#tracks" className="bg-white text-black px-4 lg:px-6 py-2 md:py-2.5 rounded-full font-semibold hover:scale-105 transition-transform text-xs lg:text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] block">
                                    Register Now
                                </Link>
                            </div>
                        )}

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 bg-black/80 md:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#020617] border-l border-white/10 p-8 pt-24 flex flex-col gap-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-xl font-medium text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                            </div>
                            {!isFacultyPage && (
                                <>
                                    <div className="h-px bg-white/10" />
                                    <Link
                                        href="/#tracks"
                                        className="bg-white text-black py-4 rounded-xl font-bold text-center hover:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register Now
                                    </Link>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
