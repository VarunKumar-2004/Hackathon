"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="hero-glow animate-pulse" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4">
                        <span className="py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium tracking-wide">
                            JNTUGV Dept of IT Presents
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        <span className="text-white">CODE THE </span>
                        <br className="md:hidden" />
                        <span className="text-gradient">IMPOSSIBLE</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        Unleash your potential at JNTUGV's premier hackathon. 24 hours of coding, innovation, and fun.
                        <br />
                        <span className="text-white font-semibold block mt-4 text-2xl">February 28th & 29th</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                            Register Now
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
                            View Tracks
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Geometric decorations */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10" />
        </section>
    );
}
