"use client";
import React from 'react';
import {useState,useRef,useEffect} from 'react';

export default function Herobgvideo(){
    const heroVideos = [
    '/Arbee-Care.mp4',
    '/Arbee-Aquatic.mp4',
    '/Arbee-Biomarine.mp4',
    '/ocean.mp4',
  ];
  const heroTitles = [
    'arbee',
    'arbee aquatic',
    'arbee biomarine',
    'arbee care',
  ];
  const heroSubtitles = [
    'Ocean for Life | Pure Wellness, Naturally Sourced',
    'Aquatic Division | Premium Fish Oil & Marine Extracts',
    'Biomarine Division | Advanced Marine Ingredients',
    'Care Division | Wellness & Nutrition Solutions',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);

  const [mounted, setMounted] = useState(false);
  const [isSubsidiaryVisible, setIsSubsidiaryVisible] = useState(false); 
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = (index) => {
    setIsSubsidiaryVisible(false); // Hide subsidiary name first
    setActiveIndex(index);
    setTimeout(() => setIsSubsidiaryVisible(true), 1000); // Delay fade-in
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        setShowHeader(heroRect.bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
       <main className={`relative bg-black min-h-screen overflow-x-hidden`}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full flex flex-col bg-black overflow-hidden overflow-y-hidden lg:min-h-screen"
        style={{ height: '100dvh' }}
      >
        {heroVideos.map((src, idx) => (
          idx !== activeIndex ? (
            <video
              key={src}
              src={src}
              preload="auto"
              style={{ display: 'none' }}
            />
          ) : null
        ))}
        <video
          autoPlay
          loop
          muted
          playsInline
          src={heroVideos[activeIndex]}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </section>
    </main>
    );
}