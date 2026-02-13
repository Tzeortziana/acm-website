import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">ACM Student Chapter</h1>
        <p className="text-xl opacity-90">
          Χτίζοντας το μέλλον της τεχνολογίας στο πανεπιστήμιό μας.
        </p>
      </section>



      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Ποιοι Είμαστε</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Είμαστε η επίσημη φοιτητική ομάδα του ACM. Στόχος μας είναι να φέρουμε κοντά
          φοιτητές με πάθος για την πληροφορική, να οργανώσουμε events, workshops
          και hackathons, και να εξερευνήσουμε μαζί την τεχνολογία.
        </p>
      </section>

   
      <section className="py-16 px-8 bg-white text-center shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Επερχόμενα Events</h2>
        <div className="border-2 border-dashed border-gray-300 p-12 rounded-xl max-w-3xl mx-auto bg-gray-50">
          <p className="text-gray-500 font-medium">Εδώ θα φτιάξουμε τις κάρτες για τα Events μας...</p>
        </div>
      </section>

     
      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Η Ομάδα Μας</h2>
        <div className="border-2 border-dashed border-gray-300 p-12 rounded-xl bg-gray-50">
          <p className="text-gray-500 font-medium">Εδώ θα βάλουμε φωτογραφίες και LinkedIn των μελών...</p>
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
