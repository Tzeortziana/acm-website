// components/Team.tsx

"use client";
import { useTranslation } from 'react-i18next';

interface TeamMember {
  name: string;
  roleKey: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  { name: "Nikos Kanakousakis", roleKey: "admin", linkedin: "https://linkedin.com" },
  { name: "Kostas Anagnostakis", roleKey: "web_dev", linkedin: "https://linkedin.com" },
  { name: "Tzeortziana Komoritsan", roleKey: "web_dev", linkedin: "https://linkedin.com" },
  { name: "Pavlos Grigoriadis", roleKey: "advisor", linkedin: "https://linkedin.com" },
  { name: "Christina Papachristoudi", roleKey: "advisor", linkedin: "https://linkedin.com" },
];

export default function Team() {

  const { t } = useTranslation('common');

  return (
    <section id="team" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('team.badge')}</h2>
          <h3 className="text-4xl md:text-4xl font-black text-slate-900 mb-6">{t('team.title')}</h3>
          <p className="text-slate-500 max-w-1xl mx-auto text-lg leading-relaxed">
            {t('team.description')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center"
            >
              {/* Profile Image / Placeholder */}
              <div className="relative mb-6">
                {/*ring - hover */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <span className="text-slate-400 font-bold text-4xl group-hover:text-blue-600 transition-colors">
                    {member.name[0]}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  {t(`team.roles.${member.roleKey}`)}
                </p>
                
                {/* LinkedIn Icon/Link */}
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    className="inline-block mt-2 text-slate-400 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}