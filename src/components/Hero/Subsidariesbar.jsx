"use client";
import React from "react";
import { useState } from "react";
import Image from 'next/image';
import { useActiveIndexStore } from '@/store/useActiveIndexStore';

const subsidiaries = ['', 'aquatic', 'biomarine', 'care'];

// Mobile-specific logos for subsidiaries bar
const mobileHeroLogos = [
  {
    gray: '/Arbee-Group-Short-Grey.svg',
    full: '/Arbee-Group-Short.svg',
    width: 59.5,
    height: 16,
    altGray: 'mobile arbee group gray',
    altFull: 'mobile arbee group',
  },
  {
    gray: '/Arbee-Aquatic-Short-Grey.svg',
    full: '/Arbee-Aquatic-Short.svg',
    width: 71.59,
    height: 16,
    altGray: 'mobile arbee aquatic gray',
    altFull: 'mobile arbee aquatic',
  },
  {
    gray: '/Arbee-Biomarine-Short-Grey.svg',
    full: '/Arbee-Biomarine-Short.svg',
    width: 88.74,
    height: 49.57,
    altGray: 'mobile arbee biomarine gray',
    altFull: 'mobile arbee biomarine',
  },
  {
    gray: '/Arbee-Care-Short-Grey.svg',
    full: '/Arbee-Care-Short.svg',
    width: 49.67,
    height: 16,
    altGray: 'mobile arbee care gray',
    altFull: 'mobile arbee care',
  },
];

const heroSubtitles = [
  'Ocean for Life | Pure Wellness, Naturally Sourced',
  'Aquatic Division | Premium Fish Oil & Marine Extracts',
  'Biomarine Division | Advanced Marine Ingredients',
  'Care Division | Wellness & Nutrition Solutions',
];

// Default export for subsidiaries bar
export default function Subsidiariesbar() {
  const { activeIndex, setActiveIndex } = useActiveIndexStore();
  const [shouldFade, setShouldFade] = useState(false);
  const [visibleText, setVisibleText] = useState('');

  const handleLogoClick = (index) => {
    if (index === activeIndex) return;

    setVisibleText(subsidiaries[index]);
    setActiveIndex(index);

    // Trigger fade animation
    setShouldFade(false);
    requestAnimationFrame(() => {
      setShouldFade(true);
    });
  };

  return (
    <div className="relative w-full">
      {/* Hero Title - Now in normal flow with margins */}
      <h1
        className="text-[clamp(40px,10vw,109px)] text-white font-poppins font-semibold ml-[34px] mb-[0px] flex items-center"
      >
        <span>arbee</span>
        <span
          key={activeIndex}
          className={`transition-opacity duration-500 ease-in-out font-light ml-2 ${
            shouldFade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {activeIndex === 0 ? '' : visibleText}
        </span>
      </h1>

      {/* Container for Blur Bar and Logo Bar */}
      <div className="relative">
        {/* Semi-transparent Blur Bar */}
        <div
          className={`w-full px-[24px] bg-black/30 backdrop-blur-md transition-all duration-300
            flex flex-col md:flex-row md:items-center md:justify-between
            ${activeIndex === 0
              ? 'h-[150px] py-[24px] sm:h-[130px] md:h-[80px] sm:text-[28px] md:px-[34px]'
              : 'h-[80px] py-[14px] md:h-[80px] px-[24px] md:px-[34px]'
            } md:py-0`}
        >
          <div className="text-white text-[18px] font-normal text-left md:text-[18px]">
            {heroSubtitles[activeIndex]}
          </div>

          {/* Desktop buttons */}
          {activeIndex === 0 && (
            <div className="hidden md:flex gap-4 justify-end">
              <button className="font-semibold h-[38px] w-[136px] text-[14px] bg-[#052833] text-white flex items-center justify-center tracking-wide">
                About Arbee
              </button>
              <button className="font-semibold h-[37.6px] w-[157px] text-[14px] bg-[#FFFFFF4D] border-1 text-white flex items-center justify-center tracking-wide">
                Arbee's History
              </button>
            </div>
          )}

          {/* Mobile buttons */}
          {activeIndex === 0 && (
            <div className="flex gap-[10px] w-full md:hidden mt-[22px]">
              <button className="w-full font-semibold h-[44px] text-[13px] sm:text-[14px] py-[10px] px-[15px] sm:px-[24px] bg-[#052833] text-white tracking-wide">
                About Arbee
              </button>
              <button className="w-full font-semibold h-[44px] text-[13px] sm:text-[14px] py-[10px] px-[15px] sm:px-[24px] bg-[#FFFFFF4D] border-2 text-white tracking-wide">
                Arbee's History
              </button>
            </div>
          )}
        </div>

        {/* Logo Bar */}
        <div className="flex w-full h-[clamp(60px,5vw,71px)] gap-[16px] justify-center items-center bg-[#222]">
          {/* Mobile Logos */}
          {mobileHeroLogos.map((logo, idx) => (
            <div
              key={logo.full}
              onClick={() => handleLogoClick(idx)}
              className="relative flex items-center z-10 px-[10px] cursor-pointer group lg:hidden"
              style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
            >
              <Image
                src={logo.gray}
                alt={logo.altGray}
                width={logo.width}
                height={logo.height}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 transition-opacity duration-200 ${
                  activeIndex === idx ? 'opacity-0' : 'opacity-100'
                } ${activeIndex !== idx ? 'group-hover:brightness-150' : ''} w-full h-auto`}
              />
              <Image
                src={logo.full}
                alt={logo.altFull}
                width={logo.width}
                height={logo.height}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 transition-opacity duration-200 ${
                  activeIndex === idx ? 'opacity-100' : 'opacity-0'
                } w-full h-auto`}
              />
            </div>
          ))}

          {/* Desktop Logos */}
          <div className="hidden lg:flex z-20 justify-center items-center mb-4.5 gap-[8px] sm:gap-[16px] md:gap-[29px]">
            {[0, 1, 2, 3].map((idx) => {
              const srcs = [
                { gray: '/Arbeegroupgrey.svg', full: '/Arbeegroupfull.svg', w: 130.7, h:24 },
                { gray: '/Arbee-Aquatic-Full-Grey.svg', full: '/Arbee-Aquatic-Full.svg', w: 150.83, h: 24 },
                { gray: '/Arbee-Biomarine-Full-Grey.svg', full: '/Arbee-Biomarine-Full.svg', w: 175, h: 24 },
                { gray: '/Arbee-Care-Full-Grey.svg', full: '/Arbee-Care-Full.svg', w: 115, h: 24 },
              ];
              const { gray, full, w, h } = srcs[idx];
              return (
                <div
                  key={idx}
                  onClick={() => handleLogoClick(idx)}
                  className="relative flex items-center cursor-pointer group "
                  style={{ width: `${w}px`,
                  height: `${h}px` }}
               
                >
                  <Image
                    src={gray}
                    alt={`${['group', 'aquatic', 'biomarine', 'care'][idx]} gray`}
                    width={w}
                    height={h}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5.5%] transition-opacity duration-200 ${
                      activeIndex === idx ? 'opacity-0' : 'opacity-100'
                    } ${activeIndex !== idx ? 'group-hover:brightness-150' : ''} w-full h-auto`}
                  />
                  <Image
                    src={full}
                    alt={`${['group', 'aquatic', 'biomarine', 'care'][idx]}`}
                    width={w}
                    height={h}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5.5%] transition-opacity duration-200 ${
                      activeIndex === idx ? 'opacity-100' : 'opacity-0'
                    } w-full h-auto`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}