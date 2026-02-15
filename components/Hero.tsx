// components/Hero.tsx

"use client";
import { useTranslation } from 'react-i18next';

export default function Hero() {

    const { t } = useTranslation('common');

    return (
        <section
            id="home"
            className="relative bg-slate-900 text-white min-h-screen flex items-center px-6 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 max-w-[95%] mx-auto flex flex-col md:flex-row items-center justify-start gap-20 w-full">

                {/* Left title */}
                <div className="text-left md:w-fit animate-in fade-in slide-in-from-left-8 duration-1000">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[1.1]">
                        {t('hero.title')} <br />
                        <span className="text-blue-500 italic">{t('hero.subtitle')}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                       {t('hero.description').split('ACM')[0]}
                        <span className="relative inline-block [perspective:1000px]">
                            <span className="inline-block text-blue-500 font-black animate-auto-flip">
                                ACM
                            </span>
                            <span className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></span>
                        </span>
                        {t('hero.description').split('ACM')[1]} <br className="hidden md:block" />
                       
                    </p>
                </div>
                {/* Right - buttons */}
                <div className="flex flex-col gap-5 w-full md:w-1/2 items-center md:items-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                    <a
                        href="#events"
                        className="w-full md:max-w-[300px] text-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        {t('hero.cta_events')}
                    </a>
                    <a
                        href="#contact"
                        className="w-full md:max-w-[300px] text-center bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-xl transition-all hover:-translate-y-1"
                    >
                       {t('hero.cta_join')}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-26 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>
        </section>
    );
}