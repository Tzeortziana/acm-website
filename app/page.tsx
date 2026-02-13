// app/page.tsx
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";


import Image from "next/image";



export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-50 text-gray-800">

      <Hero/>
      <About/>
      <Events />
      <Team/>
      <Footer/>

    </main>
    </>

  );
}
