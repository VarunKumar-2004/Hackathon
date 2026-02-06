"use client";
import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Terminal, Award } from 'lucide-react';

const facultyMembers = [
    {
        name: "Dr. G. Jaya Suma",
        role: "Professor & Registrar of JNTUGV",
        email: "gjsuma.it@jntugvcev.edu.in",
        image: "/faculty/jaya_suma.png"
    },
    {
        name: "Dr. Tirimula Rao Benala",
        role: "Associate Professor",
        email: "btirimula.it@jntugvcev.edu.in",
        image: "/faculty/tirimula_rao.png"
    },
    {
        name: "Mr. W. Anil",
        role: "Assistant Professor",
        email: "anilwurity.it@jntugvcev.edu.in",
        image: "/faculty/anil.jpeg"
    },
    {
        name: "Mrs.Roje Spandana Rajeti",
        role: "Assistant Professor (c)",
        email: "rojespandanar.it@jntugvcev.edu.in",
        image: "/faculty/roje_spandana.png"
    },
    {
        name: "Dr. Kolli Srikanth",
        role: "Assistant Professor (c)",
        email: "srikanth.it@jntugvcev.edu.in",
        image: "/faculty/srikanth.jpeg"
    },
    {
        name: "Mrs. Madhumita Chanda",
        role: "Assistant Professor (c)",
        email: "madhumitachanda.it@jntugvcev.edu.in",
        image: "/faculty/madhumitha.jpeg"
    },
    {
        name: "Mrs. Bobbadi Manasa",
        role: "Assistant Professor (c)",
        email: "bobbadimanasa.it@jntugvcev.edu.in",
        image: "/faculty/manasa.png"
    },
    {
        name: "Mrs. M. Geetha Madhuri",
        role: "Assistant Professor",
        email: "mgmadhuri.cse@jntugvcev.edu.in",
        image: "/faculty/geetha_madhuri.png"
    }
];

const chairperson = {
    name: "Dr. Ch. Bindu Madhuri",
    role: "Associate Professor & HOD",
    email: "chbmadhuri.it@jntugvcev.edu.in",
    image: "/faculty/bindu_madhuri.png"
};

const supportingStaff = [
    {
        name: "Mr. J. Satish",
        role: "Lab Technician",
        image: "/staff/satish.jpeg"
    },
    {
        name: "Mr. S. Vamsidhar",
        role: "Typist",
        image: "/staff/vamsidhar.png"
    },
    {
        name: "Mrs. P. Vydehi",
        role: "Store Keeper",
        image: "/staff/vydehi.jpeg"
    },
    {
        name: "Mrs. I. Narasamma",
        role: "Attender",
        image: "/staff/narasamma.jpeg"
    }
];

export default function Faculty() {
    return (
        <section id="faculty" className="py-24 relative overflow-hidden bg-[#020617]">
            {/* Decorative Grid BG */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] md:text-xs font-mono mb-4"
                    >
                        <Terminal size={12} />
                        <span>FACULTY_DIRECTORY_V2.0</span>
                    </motion.div>

                    <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-white uppercase">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Chairperson</span>
                    </h2>
                </div>

                {/* Chairperson Section */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="w-full max-w-[280px] sm:w-72">
                        <FacultyCard member={chairperson} isChairperson />
                    </div>
                </div>

                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-white uppercase">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Faculty</span>
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden pb-12">
                    {/* Infinite Scroll Container */}
                    <motion.div
                        className="flex gap-4 md:gap-6 w-max"
                        animate={{
                            x: ["0%", "-33.33%"],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* 3 identical sets of faculty to create a seamless infinite loop */}
                        {[...facultyMembers, ...facultyMembers, ...facultyMembers].map((member, index) => (
                            <div key={index} className="w-48 md:w-56 shrink-0">
                                <FacultyCard member={member} />
                            </div>
                        ))}
                    </motion.div>

                </div>

                {/* Supporting Staff Section */}
                <div className="text-center mb-8 md:mb-10 mt-12">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-white uppercase">
                        Supporting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Staff</span>
                    </h2>
                </div>

                {/* Static Grid for Supporting Staff */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 pb-12">
                    {supportingStaff.map((staff, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full"
                        >
                            <FacultyCard member={staff} isStaff />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FacultyCard({ member, isChairperson, isStaff }: { member: any; isChairperson?: boolean; isStaff?: boolean }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const imagePath = member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&bold=true&size=256`;

    return (
        <div
            className={`group relative border ${isChairperson ? 'border-purple-500/50 scale-105' : 'border-white/10'} bg-gray-900/40 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl ${isChairperson ? 'shadow-purple-500/20' : 'hover:shadow-purple-500/10'} flex flex-col h-full`}
            onMouseMove={onMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Image section – compact square aspect */}
            <div className="relative w-full aspect-square overflow-hidden border-b border-white/5">
                <img
                    src={imagePath}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-110 group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&bold=true&size=256`;
                    }}
                />
            </div>

            {/* Content section - highly compact */}
            <div className="relative p-3 flex flex-col items-center text-center flex-1 justify-center">
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {member.name}
                </h3>

                <p className="text-gray-300 text-[10px] uppercase font-medium tracking-tight">
                    {member.role}
                </p>
            </div>
        </div>
    );
}
