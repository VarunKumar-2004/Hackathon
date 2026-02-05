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
            <div className="fixed top-10 left-0 right-0 z-50 flex items-center px-4 md:px-8 pointer-events-none">
                {/* Navbar Container */}
                <div className="flex-1 flex justify-center pointer-events-auto mx-4">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="island-nav px-2 py-2 pl-6 flex items-center justify-between gap-8 max-w-4xl w-full"
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-purple-600/20 p-2 rounded-lg group-hover:bg-purple-600/40 transition-colors">
                                <Terminal className="w-5 h-5 text-purple-400" />
                            </div>
                            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                PyTech<span className="text-purple-500">Arena</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {!isFacultyPage && (
                            <div className="hidden md:flex items-center gap-4">
                                <Link href="/#tracks" className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] block">
                                    Register Now
                                </Link>
                            </div>
                        )}

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-gray-400 hover:text-white"
                            >
                                {isOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-medium text-gray-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {!isFacultyPage && (
                                <>
                                    <div className="h-px bg-white/10 my-4" />
                                    <Link
                                        href="/#tracks"
                                        className="bg-purple-600 text-white py-4 rounded-xl font-bold text-lg block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register Now
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
