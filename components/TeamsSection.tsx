"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    const { t } = useTranslation('common');
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Ορισμός των ομάδων χρησιμοποιώντας τα κλειδιά από το JSON
    const teamsData = [
      { 
        id: "game-dev", 
        name: t('team.specialist_teams.game_dev.name'), 
        icon: "🎮", 
        tag: t('team.specialist_teams.game_dev.tag'), 
        description: t('team.specialist_teams.game_dev.description') 
      },
      { 
        id: "more", 
        name: t('team.specialist_teams.more_to_come.name'), 
        icon: "✨", 
        tag: t('team.specialist_teams.more_to_come.tag'), 
        description: t('team.specialist_teams.more_to_come.description') 
      },
    ];

    return (
        <section id="synergy" className="py-24 bg-white overflow-hidden">
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
                        {t('team.badge')}
                    </h2>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        {t('team.title')}
                    </h3>
                    <div className="w-16 h-1.5 bg-blue-600 mt-6 rounded-full shadow-[0_2px_10px_rgba(37,99,235,0.3)]"></div>
                </motion.div>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {teamsData.map((team) => {
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
                                {/* background glow */}
                                <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-all duration-700 blur-3xl ${isHovered ? 'bg-blue-100 opacity-100 scale-150' : 'bg-blue-50 opacity-40 scale-100'}`} />
                                
                                {/* Layer 1: Icon & Name */}
                                <div className={`flex flex-col items-center gap-5 text-center transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 scale-90 -translate-y-5' : 'opacity-100 scale-100 translate-y-0'}`}>
                                    <div className="text-5xl">{team.icon}</div>
                                    <span className="text-xl text-blue-600 tracking-[0.1em] uppercase font-black leading-tight">
                                        {team.name}
                                    </span>
                                </div>

                                {/* Layer 2: Description & Tag */}
                                <div className={`absolute inset-0 z-10 p-8 flex flex-col items-center justify-center text-center backdrop-blur-[2px] transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                                    <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2">
                                        {team.tag}
                                    </span>
                                    <p className="text-slate-500 leading-relaxed italic line-clamp-3 mb-5 text-[13px]">
                                        "{team.description}"
                                    </p>
                                    <div className="w-8 h-1 bg-blue-600 mb-5 group-hover:w-16 transition-all duration-500 rounded-full" />
                                    <button className="text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors">
                                        {team.id === "more" ? "Stay Tuned →" : "Explore Team →"}
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