// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import { link } from "fs";

export default function Navbar() {
    const { t, i18n } = useTranslation('common'); // t -> translation function
    const [isOpen, setIsOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { id: "home", href: "#home" },
        { id: "about", href: "#about" },
        { id: "events", href: "#events" },
        { id: "team", href: "#team" },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();

    }, []);


    return (
        <>
            {/* main Navbar */}
            <nav className="sticky top-0 z-[60] bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm w-full">
                <div className="max-w-[95%] mx-auto px-4 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-bold text-white shadow-md transition-transform group-hover:scale-110">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tighter text-slate-900">
                            ACM <span className="text-blue-600 font-black italic">Student</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");

                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={`text-[15px] font-bold transition-all relative group py-2 ${isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                                        }`}
                                >
                                    {t(`nav.${link.id}`)} {/*translation happens here*/}
                                    {/*if isActive -> true then blue underline stays there */}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                </a>
                            );
                        })}

                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-7 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-900 transition-all shadow-lg shadow-blue-600/20 active:scale-95 ml-4 uppercase tracking-wider"
                        >
                            Join Us
                        </a>
                        {/* Language Switcher */}
                        <div className="flex items-center ml-4 border-l border-slate-200 pl-4 space-x-2">
                            <button
                                onClick={() => i18n.changeLanguage('en')}
                                className={`text-xs font-bold ${i18n.language === 'en' ? 'text-blue-600' : 'text-slate-400'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => i18n.changeLanguage('gr')}
                                className={`text-xs font-bold ${i18n.language === 'gr' ? 'text-blue-600' : 'text-slate-400'}`}
                            >
                                GR
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button*/}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[100]"
                        onClick={toggleMenu}
                    >
                        <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu  */}
            <div className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                {/* Background Layer */}
                <div className="absolute inset-0 bg-white shadow-2xl"></div>

                {/* Content Container */}
                <div className="relative z-[110] flex flex-col h-full">

                    {/* Header  */}
                    <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100 bg-white">
                        <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase italic">Navigation</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white shadow-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col p-8 pt-10 space-y-8">
                        {/* Nav Links */}
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((item, index) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center space-x-4"
                                >
                                    <span className="text-blue-600 font-mono text-[10px] font-bold">0{index + 1}</span>
                                    <span className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                        {t(`nav.${item.id}`)}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Join Us Button */}
                        <div className="pt-2">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block bg-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold text-center shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                            >
                                Join the Team
                            </a>
                        </div>

                        {/* Footer-info */}
                        <div className="pt-4 border-t border-slate-50">
                            <p className="text-slate-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                                ACM Student Chapter @ UOC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}