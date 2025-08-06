"use client";
import React from "react";
import {useState,useEffect,useRef} from "react";
import Image from 'next/image'; 
import { Noto_Sans } from 'next/font/google';
import { useActiveIndexStore } from '@/store/useActiveIndexStore';


const subsidiaries = ['', 'aquatic', 'biomarine', 'care'];

// Mobile-specific logos for subsidiaries bar (replace with actual paths)
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



//default export for subsidaries bar
export default function Subsidariesbar(){
    
const heroSubtitles = [
    'Ocean for Life | Pure Wellness, Naturally Sourced',
    'Aquatic Division | Premium Fish Oil & Marine Extracts',
    'Biomarine Division | Advanced Marine Ingredients',
    'Care Division | Wellness & Nutrition Solutions',
  ];

//states used   
const { activeIndex, setActiveIndex } = useActiveIndexStore();
const [isSubsidiaryVisible, setIsSubsidiaryVisible] = useState(false); // fade control
const [shouldFade, setShouldFade] = useState(false);
const [visibleText, setVisibleText] = useState('');


//interactivity of logos
const handleLogoClick = (index) => {
  if (index === activeIndex) return; // skip if same

  setVisibleText(subsidiaries[index]);
  setActiveIndex(index);

  // restart fade animation
  setShouldFade(false);
  requestAnimationFrame(() => {  // wait one frame
    setShouldFade(true);
  });
};


//return of default export
    return(
     <>
      <div className="absolute inset-x-0 bottom-0">
      <div
  className={`absolute left-0 right-0 w-full z-0 px-[24px] bg-black/30 backdrop-blur-md transition-all duration-300
    flex flex-col md:flex-row md:items-center md:justify-between
    ${activeIndex === 0
      ? 'bottom-[48px] h-[166px] py-[24px] px-[24px] sm:h-[130px] sm:text-[28px] md:px-[34px] md:h-[60px]'
      : 'bottom-[40px] h-[80px] py-[14px] md:h-[60px] px-[24px] md:px-[34px]'}
    md:bottom-[48px] md:py-0`}
>
  <div className=" {notosans.className} text-white text-[18px] font-noto-sans font-display-regular text-left md:text-[20px] md:mb-0">
    {heroSubtitles[activeIndex]}
  </div>

  {activeIndex === 0 && (
    <div className="hidden md:flex gap-4 justify-end">
      <button className="font-semibold h-[38px] w-[136px] text-[14px] bg-[#052833] text-white">
        <span className="itmes-center justify-center ">
        About Arbee
        </span>
      </button>
      <button className="font-semibold h-[37.6px] w-[157px] text-[14px] bg-[#FFFFFF4D] border-2 text-white">
        <span className="itmes-center justify-center">
        Arbee's History
        </span>
      </button>
    </div>
  )}

  {/* Mobile buttons stay below */}
  {activeIndex === 0 && (
    <div className="flex gap-[10px] w-full md:hidden mt-[22px]">
      <button className="w-full font-semibold h-[44px] w-full text-[13px] sm:text-[14px] py-[10px] px-[15px] sm:px-[24px] bg-[#052833] text-white">
        About Arbee
      </button>
      <button className="w-full font-semibold h-[44px] w-full text-[13px] sm:text-[14px] py-[10px] px-[15px] sm:px-[24px] bg-[#FFFFFF4D] border-2 text-white">
        Arbee's History
      </button>
    </div>
  )}
</div>
      </div>

    {/* Hero Title */}
     <div>
      <h1
  className={`text-[clamp(40px,10vw,116px)] absolute text-stroke-black text-white font-poppins ml-[24px] md:ml-[34px]
    ${activeIndex === 0 ? 'bottom-[420%] sm:bottom-[320%] md:bottom-[140%] ' : 'bottom-[6.5rem] md:bottom-[140%]'}
    text-[40px] md:text-[116px] font-semibold mb-[15px] sm:mb-[30px] flex items-center`}
>
  <span className="mr-2">arbee</span>

  <span
  key={activeIndex}
  className={`transition-opacity duration-500 ease-in-out font-light ${
    shouldFade ? 'opacity-100' : 'opacity-0'
  }`}
>
  {activeIndex === 0 ? '' : visibleText}
</span>


</h1>










<div className=" flex w-full h-[48px] md:h-[50px] z-50 gap-[16px] bottom-0 flex justify-center items-center bg-[#222]">
  {mobileHeroLogos.map((logo, idx) => (
    <div
      key={logo.full}
      onClick={() => handleLogoClick(idx)}
      className="relative flex items-center z-90 px-[10px] cursor-pointer group lg:hidden"
      style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
    >
      <Image
        src={logo.gray}
        alt={logo.altGray}
        width={logo.width}
        height={logo.height}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 transition-opacity duration-200 ${activeIndex === idx ? 'opacity-0' : 'opacity-100'} ${activeIndex !== idx ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src={logo.full}
        alt={logo.altFull}
        width={logo.width}
        height={logo.height}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 transition-opacity duration-200 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'} ${activeIndex !== idx ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
    </div>
  ))}

  <div className="hidden lg:flex z-20 justify-center items-center mb-4.5 gap-[8px] sm:gap-[16px] md:gap-[28px]">
    <div onClick={() => handleLogoClick(0)} className="items-center justify-center relative flex cursor-pointer group
    w-[80px] h-[24px] px-[10px] 
    sm:h-[28px] sm:w-[100px] sm:px-[15px] 
    md:w-[130px] md:h-[36px]">
      <Image
        src="/Arbeegroupgrey.svg"
        alt="arbee group gray"
        width={84}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 0 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbeegroupfull.svg"
        alt="arbee group"
        width={84}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%]  transition-opacity duration-200 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>

    <div onClick={() => handleLogoClick(1)} className="relative flex items-center cursor-pointer group 
    w-[80px] h-[24px] px-[10px] 
    sm:w-[100px] sm:h-[28px] sm:px-[15px] 
    md:w-[150px] md:h-[36px]">
      <Image
        src="/Arbee-Aquatic-Full-Grey.svg"
        alt="arbee aquatic gray"
        width={114}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 1 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 1 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbee-Aquatic-Full.svg"
        alt="arbee aquatic"
        width={114}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>

    <div onClick={() => handleLogoClick(2)} className="relative flex items-center cursor-pointer group 
    w-[80px] h-[24px] px-[10px] 
    sm:px-[15px] sm:w-[100px] sm:h-[28px] 
    md:w-[168px] md:h-[36px]">
      <Image
        src="/Arbee-Biomarine-Full-Grey.svg"
        alt="arbee biomarine gray"
        width={134}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 2 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 2 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbee-Biomarine-Full.svg"
        alt="arbee biomarine"
        width={134}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>

    <div onClick={() => handleLogoClick(3)} className="relative flex items-center cursor-pointer group 
    w-[80px] h-[24px] px-[10px] 
    sm:px-[15px] sm:h-[28px] sm:w-[100px] 
    md:w-[114px] md:h-[36px]">
      <Image
        src="/Arbee-Care-Full-Grey.svg"
        alt="arbee care gray"
        width={104}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 3 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 3 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbee-Care-Full.svg"
        alt="arbee care"
        width={104}
        height={30}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>
  </div>
</div>
</div>   
</>
    );
}