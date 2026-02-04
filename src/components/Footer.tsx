import { Instagram, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-white/5 bg-black/40 backdrop-blur-xl pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
                            JNTUGV<span className="text-white">HACKS</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Fostering innovation and coding excellence. The biggest student hackathon at JNTU Gurajada Vizianagaram.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                            <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Registration</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Sponsorship</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 text-purple-500 mt-0.5" />
                                <span>support@jntugvhacks.in</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-purple-500 mt-0.5" />
                                <span>JNTU-GV College of Engineering, Vizianagaram, AP</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2026 JNTUGV Dept of IT. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
