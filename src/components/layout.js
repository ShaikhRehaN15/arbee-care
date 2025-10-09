// components/layout.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// ✅ Public path to Lottie animation
const ENQUIRE_ANIMATION_PATH = '/animations/Enquire-Now-CTA-Button-Animation.json';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Initiatives', href: '/#initiatives' },
  { name: 'Financial Reports', href: '/#financials' },
];

export default function Layout({ children, alwaysShowHeader = false }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(alwaysShowHeader);
  const [activeSection, setActiveSection] = useState(pathname);

  // ✅ Show header after scrolling
  useEffect(() => {
    if (alwaysShowHeader) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysShowHeader]);

  // ✅ Update activeSection on hash change (click-based)
  useEffect(() => {
    const updateHash = () => {
      const newHash = window.location.hash;
      setActiveSection(`${pathname}${newHash}`);
    };

    updateHash(); // run on mount
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname]);

  // ✅ Scroll spy with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id === 'home') {
              setActiveSection('/');
            } else {
              setActiveSection(`/#${id}`);
            }
          }
        });
      },
      { threshold: 0.6 } // 60% of section must be visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="relative w-full font-poppins">
      {/* Conditional Sticky Header */}
      <header
        className={`fixed top-0 left-0 w-full h-[60px] pr-[24px] md:pr-[0px] 2xl:h-[48px] z-50 transition-all duration-500 ${
          showHeader || alwaysShowHeader
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(90deg, #333333, #0E0E0E)',
          backdropFilter: 'blur(4.7px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <nav className="flex items-center justify-center w-full h-full">
          {/* Logo */}
          <div className="flex items-center ml-[24px] md:ml-[40px]">
            <Image src="/Arbeelogo.svg" alt="arbee logo" width={119} height={32} priority />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex flex-1 justify-center space-x-0">
            {navLinks.map((link) => (
              <li key={link.href} className="h-full">
                <div className="h-full flex hover:bg-[#ffffff20] transition-shadow duration-200 items-center relative group ">
                  <Link href={link.href}>
                  <span
  className={`text-white font-medium text-[11px] font-poppins flex items-center justify-center h-full min-w-[31.3px] leading-none relative p-5 pb-[14px] ${
    activeSection !== link.href ? "group-hover:-translate-y-[1px]" : ""
  }`}
>

                      {link.name}
                    </span>
                  </Link>
                  {/* Active underline */}
                  {activeSection === link.href && (
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-white" />
                  )}
                  {/* Hover underline */}
                  
                  <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-[#1ed6f7] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  
                  </div>
              </li>
            ))}
          </ul>

          {/* Desktop Enquire Button */}
          <Link href="https://arbeegroup.org/enquiry/" className="hidden xl:block ml-4 h-[60px] 2xl:h-[48px]">
            <div className="w-full h-full">
              <Lottie
                path={ENQUIRE_ANIMATION_PATH}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden flex items-center justify-center ml-auto text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#181818] h-screen w-full flex flex-col">
            <div className="flex items-center justify-between h-[56px] p-[24px] bg-gradient-to-r from-[#232323] to-[#181818] border-b border-[#232323]">
              <Image src="/Arbeelogo.svg" alt="arbee logo" width={120} height={40} priority />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="flex-1 bg-[#181818]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`block text-[16px] font-semibold py-4 px-6 border-b border-[#232323] text-right ${
                        activeSection === link.href ? 'text-[#1ed6f7]' : 'text-white'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="px-6 pb-6 pt-2">
                <Link href="/enquiry">
                  <span className="block w-full bg-gradient-to-r from-[#0099b3] to-[#005e6a] text-white font-semibold py-3 rounded text-center border-b-2 border-[#b3f0ff]">
                    Enquire Now
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}