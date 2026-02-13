interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
}



const team: TeamMember[] = [
  { name: "Tzeortziana Komoritsan", role: "Admin", linkedin: "link" },
  { name: "Christina", role: "nothing", linkedin: "" },
];


export default function Team() {
    return(
        <section id="team" className="py-16 px-8 max-w-4xl mx-auto text-center">
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

    );
}