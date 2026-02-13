import Image from "next/image";

/*---------- DATA Typescript-------------------*/

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  attedance?: number;
}

interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
}


const events: Event[] = [
  { id: 1, title: "Intro to React", date: "February 15", description: "Workshop for students.", attedance: 10 },
  { id: 2, title: "Hackathon 2026", date: "April 10", description: "24 hours of coding" },
];

const team: TeamMember[] = [
  { name: "Tzeortziana Komoritsan", role: "Admin", linkedin: "link" },
  { name: "Christina", role: "nothing", linkedin: "" },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">ACM Student Chapter</h1>
        <p className="text-xl opacity-90">
          ....
        </p>
      </section>



      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Ποιοι Είμαστε</h2>
        <p className="text-lg text-gray-600">
          Είμαστε η επίσημη φοιτητική ομάδα του ACM. Στόχος μας είναι ......
        </p>
      </section>


      <section className="py-16 px-8 bg-white text-center shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Επερχόμενα Events</h2>
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


      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Η Ομάδα Μας</h2>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">

          {team.map((member, index) => (

            <div key={index} className="text-center group">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <span className="text-blue-600 group-hover:text-white font-bold text-2xl">
                  {member.name[0]}
                </span>
              </div>
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          )

          )

          }

        </div>
      </section>


      <section className="bg-gray-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Επικοινωνήστε μαζί μας</h2>
        <p className="text-gray-400 mb-2">Έχεις απορίες; Θέλεις να γίνεις μέλος;</p>
        <p className="font-semibold text-blue-400">Email: acm@university.gr</p>
      </section>

    </main>

  );
}
