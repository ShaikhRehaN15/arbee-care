import Herobgvideo from '@/components/Hero/Herobgvideo';
import React from 'react';
import Subsidariesbar from "@/components/Hero/Subsidariesbar";
import NavDots from '../components/Hero/HeroSection';

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Background video */}
      <Herobgvideo />
      


      {/* Subsidiaries bar on top of video */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Subsidariesbar />
      </div>
      <div className="relative min-h-screen bg-white w-full">
        
      </div>
    </section>
  );
}
