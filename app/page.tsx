"use client";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next'; 

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Events = dynamic(() => import('@/components/Events'), { ssr: false });
const Team = dynamic(() => import('@/components/Team'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  const { i18n } = useTranslation(); 

  return (
    <>
      
    {/*smooth effect translation*/}
      <AnimatePresence mode="wait">
        <motion.main
          key={i18n.language} // 
          initial={{ opacity: 0, filter: "blur(10px)" }}   
          animate={{ opacity: 1, filter: "blur(0px)" }}  
          exit={{ opacity: 0, filter: "blur(10px)" }}      
          transition={{ duration: 0.2, ease: "easeInOut" }} // ---------> TO BE DISCUSSED
          className="min-h-screen bg-gray-50 text-gray-800"
        >
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Team />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
}