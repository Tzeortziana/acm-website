/*---------- DATA Typescript-------------------*/

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

    return(
        <section id="events" className="py-16 px-8 bg-white text-center shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {events.map((event) => (
            <div key={event.id} className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
              <span className="text-sm text-blue-500 font-bold uppercase">{event.date}</span>
              <h3 className="text-xl font-bold mt-2">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <span className="text-sm">{event.attedance}</span>
            </div>
          )
          )
          }
        </div>
      </section>
    );

}