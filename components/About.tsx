// components/About.tsx
"use client";
import { useTranslation } from 'react-i18next';


const pillars = [
  {
    id: "workshops",
    icon: "💻"
  },
  {
    id: "networking",
    icon: "🤝"
  },
  {
    id: "hackathons",
    icon: "🚀"
  }
];

export default function About() {
  const { t } = useTranslation('common');
  return (
    <section id="about" className="py-24 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">{t('about.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{t('about.title')}</h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
           {t('about.description')}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="group relative p-10 bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden"
            >
              {/*Glow*/}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{t(`about.pillars.${pillar.id}.title`)}</h4>
                <p className="text-slate-500 leading-relaxed italic">
                   "{t(`about.pillars.${pillar.id}.desc`)}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}