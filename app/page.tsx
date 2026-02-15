// app/page.tsx
"use client";
import dynamic from 'next/dynamic';
import Events from "@/components/Events";
import Team from "@/components/Team";
import Footer from "@/components/Footer";



const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: false 
});
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false 
});
const About = dynamic(() => import('@/components/About'), { 
  ssr: false 
});


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
