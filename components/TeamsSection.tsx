"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const teams = [
    { id: "1", name: "Machine Learning", icon: "🧠", tag: "CSD_UOC_ML", description: "Exploring neural networks and predictive modeling." },
    { id: "2", name: "Web Dev", icon: "</>", tag: "CSD_UOC_WEB", description: "Building modern, scalable web applications and interfaces." },
    { id: "3", name: "Game Dev", icon: "🎮", tag: "CSD_UOC_GAME", description: "Creating immersive experiences using Unity and Unreal." },
    { id: "4", name: "Cyber Security", icon: "🛡️", tag: "CSD_UOC_SEC", description: "Securing systems and exploring ethical hacking." },
    { id: "5", name: "Robotics", icon: "🤖", tag: "CSD_UOC_ROBO", description: "Designing autonomous systems and hardware-software integration." },
    { id: "6", name: "Mobile Dev", icon: "📱", tag: "CSD_UOC_MOB", description: "Crafting seamless mobile experiences for iOS and Android." },
    { id: "7", name: "App Prototyping", icon: "🚀", tag: "CSD_UOC_PROTO", description: "Rapidly turning ideas into functional, testable MVPs." },
    { id: "8", name: "Problem Solving", icon: "🧩", tag: "CSD_UOC_ALGO", description: "Mastering competitive programming and algorithmic logic." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each card waits 0.1s after the previous one
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function TeamSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);


    return (
        <section className="py-24 bg-white overflow-hidden">
            <motion.div
                className="max-w-7xl mx-auto px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} 
                variants={containerVariants}
            >

                {/* Header */}

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-blue-600 font-mono tracking-[0.4em] uppercase text-[10px] font-bold mb-3">
                        CSD Collaboration
                    </h2>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Our Specialist Teams
                    </h3>
                    <div className="w-16 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
                </motion.div>
            

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teams.map((team) => {
                        const isHovered = hoveredId === team.id;

                        return (
                            <motion.div
                                key={team.id}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredId(team.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                whileHover={{ y: -8 }}
                                className="relative h-72 group bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-center items-center cursor-default"
                            >
                                {/* background blue glow on hover */}
                                <div
                                    className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-all duration-700 blur-3xl ${isHovered ? 'bg-blue-100 opacity-100 scale-150' : 'bg-blue-50 opacity-40 scale-100'
                                        }`}
                                />
                                {/* LAYER 1: STATIC CONTENT */}
                                <div className={`flex flex-col items-center gap-5 text-center transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 scale-90 -translate-y-5' : 'opacity-100 scale-100 translate-y-0'
                                    }`}>
                                    <div className="text-5xl drop-shadow-sm">{team.icon}</div>
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-xl text-blue-600  tracking-[0.2em] uppercase ">
                                            {team.name}
                                        </span>

                                    </div>
                                </div>
                                <div className={`absolute inset-0 z-10 p-8 flex flex-col items-center justify-center text-center backdrop-blur-[2px] transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                                    <span className="text-blue-600 font-mono text-xl font-bold tracking-[0.3em] uppercase mb-2">
                                        {team.tag}
                                    </span>
                                    <p className="text-ltext-slate-500 leading-relaxed italic line-clamp-3 mb-5 ">
                                        "{team.description}"
                                    </p>

                                    {/*  Divider  */}
                                    <div className="flex items-center gap-2 mb-4">
        
                                        <div className="w-8 h-1 bg-blue-600 mb-5 group-hover:w-16 transition-all duration-500 rounded-full" />
                                    </div>
                                     {/*  explore team's site  */}
                                    <button className="text-sm font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors">
                                        Explore {team.tag} →
                                    </button>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </motion.div>
        </section>
    );
}