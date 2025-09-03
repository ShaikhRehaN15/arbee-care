'use client';
import React from 'react';
import Image from 'next/image';

export default function Commitment() {
  return (
    <section
      className="
        min-h-screen lg:h-[100dvh] w-full 
        px-[clamp(24px,calc(24px+(96*(100vw-320px)/704)),120px)]
        py-[clamp(24px,calc(24px+(48*(100vw-320px)/704)),64px)]
        bg-white font-poppins overflow-visible lg:overflow-hidden
        flex flex-col
      "
    >
      {/* Title Row */}
      <div className="flex flex-col sm:flex-row justify-between gap-[2vh] flex-none">
        <div className="flex items-start">
          <h2 className="text-[clamp(28px,calc(28px+(28*(100vw-320px)/704)),56px)] text-[#323232] font-noto font-bold">
            What We Do
          </h2>
        </div>
        <div className="flex items-start">
          <h2
            className="
              text-[clamp(20px,calc(20px+(8*(100vw-320px)/448)),28px)]
              sm:hidden
              text-[#323232] font-noto font-semibold
            "
          >
            Purpose That Drives Every Step
          </h2>
        </div>
        <div className="flex items-end sm:w-1/2">
          <h3 className="text-[clamp(14px,calc(14px+(2*(100vw-320px)/704)),16px)] text-[#323232] font-noto font-normal leading-snug">
            Just like Arbee’s product excellence, Arbee Care is built on unwavering commitment to quality and impact:
          </h3>
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className="
          w-full
          grid
          grid-cols-1
          md:grid-cols-4
          mt-[clamp(32px,calc(32px+(16*(100vw-320px)/704)),48px)]
          flex-1
        "
      >
        {/* Card 1 */}
        <div
          className="
            bg-[#F5F5F5] w-full pt-[60px] flex flex-col justify-between
            h-[clamp(120px,calc(160px-(40*(100vw-320px)/448)),160px)] 
            md:h-full
          "
        >
          <h3 className="text-[#454545] font-lato font-light text-[clamp(20px,calc(20px+(4*(100vw-320px)/704)),24px)] ">
          INITIAVTIVES THAT CREATE LASTING CHANGE
          </h3>
          <button className="text-[#052833] font-poppins font-bold border-2 border-[#052833] px-[2vh] py-[1vh] text-[clamp(12px,calc(12px+(2*(100vw-320px)/704)),14px)] w-fit hover:bg-[#1A1A1A] hover:text-white transition-colors">
            KNOW MORE
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="
            relative group cursor-pointer overflow-hidden
            h-[clamp(100px,calc(140px-(40*(100vw-320px)/448)),140px)]
            md:h-full
          "
        >
          <Image
            src="/safeguarding.png"
            alt="Safeguarding Marine Life"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Image
            src="/Sustainability - 001.webp"
            alt="Safeguarding Marine Life Hover"
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-start justify-center text-white pt-[60px] text-center">
            <h4 className="text-[clamp(16px,calc(16px+(4*(100vw-320px)/704)),18px)] font-normal font-poppins">
            Healthcare Access
            </h4>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="
            relative group cursor-pointer overflow-hidden
            h-[clamp(100px,calc(140px-(40*(100vw-320px)/448)),140px)]
            md:h-full
          "
        >
          <Image
            src="/education.png"
            alt="Responsible Resource Management"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Image
            src="/Sustainability - 002.webp"
            alt="Responsible Resource Management Hover"
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-start justify-center text-white pt-[60px] text-center">
            <h4 className="text-[clamp(16px,calc(16px+(4*(100vw-320px)/704)),20px)] font-normal font-poppins">
            Education & Skill Development
            </h4>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="
            relative group cursor-pointer overflow-hidden
            h-[clamp(100px,calc(140px-(40*(100vw-320px)/448)),140px)]
            md:h-full
          "
        >
          <Image
            src="/sustainability.png"
            alt="Powering a Sustainable Future"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Image
            src="/Sustainability - 003.webp"
            alt="Powering a Sustainable Future Hover"
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-start justify-center text-white pt-[60px] text-center">
            <h4 className="text-[clamp(16px,calc(16px+(4*(100vw-320px)/704)),20px)] font-normal font-poppins">
             Sustainability & Environment
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}



