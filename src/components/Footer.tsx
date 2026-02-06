import React from "react";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-white/5 bg-[#020617] pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Terminal className="text-purple-500 w-5 h-5 md:w-6 md:h-6" />
                            <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                                PyTech<span className="text-purple-500">Arena</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-mono">
                            &lt;system&gt;<br />
                            Empowering next-gen developers through code and innovation.<br />
                            &lt;/system&gt;
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 font-mono text-xs md:text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm font-medium">
                            <li><a href="#home" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span>&gt;</span> Home</a></li>
                            <li><a href="#about" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span>&gt;</span> About</a></li>
                            <li><a href="#tracks" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span>&gt;</span> Tracks</a></li>
                            <li><a href="#faq" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span>&gt;</span> FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 font-mono text-xs md:text-sm uppercase tracking-wider">Contact Node</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm">
                            <li className="flex items-start">
                                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 text-cyan-500 mt-0.5" />
                                <span className="hover:text-white transition-colors cursor-pointer break-all">support@pytecharena.in</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-3 text-cyan-500 mt-0.5" />
                                <span>JNTU-GV College of Engineering,<br />Vizianagaram, AP</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 font-mono text-xs md:text-sm uppercase tracking-wider">Social Feed</h3>
                        <div className="flex space-x-3 md:space-x-4">
                            <SocialIcon icon={<Instagram className="w-4 h-4 md:w-5 md:h-5" />} />
                            <SocialIcon icon={<Twitter className="w-4 h-4 md:w-5 md:h-5" />} />
                            <SocialIcon icon={<Linkedin className="w-4 h-4 md:w-5 md:h-5" />} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col items-center md:flex-row justify-between text-[10px] md:text-xs text-gray-600 font-mono text-center md:text-left gap-4">
                    <p>&copy; 2026 Department of Information Technology, JNTU-GV. Executing...</p>
                    <div className="flex space-x-4 md:space-x-6">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy_Protocol</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms_Config</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all transform hover:-translate-y-1">
            {icon}
        </a>
    )
}
