// components/Events.tsx
"use client";
import { useTranslation } from 'react-i18next';


interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  attedance?: number;
}

const events: Event[] = [
  { id: 1, title: "Intro to React", date: "February 15", description: "Workshop for students.", attedance: 10 },
  { id: 2, title: "Hackathon 2026", date: "April 10", description: "24 hours of coding" },
];

export default function Events() {

  const { t, i18n } = useTranslation('common');

  return (
    <section id="events" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-[95%] mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16">

          {/* ΑΡΙΣΤΕΡΑ: Δυναμική Λίστα Events από το Array σου */}
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 underline decoration-2 underline-offset-8">
              {t('events.badge')}
            </h2>
            <h3 className="text-4xl font-black text-slate-900 mb-10">{t('events.title')}</h3>

            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Ημερομηνία ως Badge */}
                  <div className="flex-shrink-0 w-20 h-20 bg-slate-900 text-white rounded-2xl flex flex-col items-center justify-center font-bold shadow-lg group-hover:bg-blue-600 transition-colors">
                    <span className="text-sm uppercase opacity-80">{event.date.split(' ')[0].substring(0, 3)}</span>
                    <span className="text-2xl">{event.date.split(' ')[1]}</span>
                  </div>

                  <div className="ml-6 flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h4>
                      {event.attedance && (
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                          {event.attedance} joined
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 mt-2 leading-relaxed">
                      {event.description}
                    </p>
                    <button className="mt-4 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-all">
                      View Details <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ΔΕΞΙΑ: Google Calendar με το "Terminal" στυλ */}
          <div className="lg:w-1/2">
            <div className="sticky top-24 bg-slate-900 p-4 rounded-3xl shadow-2xl border border-slate-800">
              {/* Window Controls "Hacker" Terminal */}
              {/*<div className="flex items-center justify-between mb-4 px-2 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">$</span>
                  <span className="text-slate-300 text-[11px] uppercase tracking-wider">run calendar.sh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-500 uppercase">Status:</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] text-green-500 uppercase">Live</span>
                </div>
              </div>*/}

              {/* Window Controls VS Code Tab Style */}
              <div className="flex items-center mb-0 border-b border-slate-800 bg-slate-900/50 rounded-t-xl overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-r border-slate-700">
                  <span className="text-blue-400 text-xs">📅</span>
                  <span className="text-slate-200 text-[11px] font-mono italic">calendar.json</span>
                  <span className="text-slate-500 text-[10px] ml-2">×</span>
                </div>
              </div>


              {/* Iframe με Dark Mode Filter */}
              <div className="relative rounded-xl overflow-hidden bg-white">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=el.greek%23holiday%40group.v.calendar.google.com&ctz=Europe%2FAthens"
                  className="w-full h-[450px] filter invert-[0.9] hue-rotate-180 contrast-125"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}