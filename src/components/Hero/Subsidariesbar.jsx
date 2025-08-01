"use client";
import React from "react";
import {useState,useEffect,useRef} from "react";
import Image from 'next/image'; 

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
    


//states used   
const [activeIndex, setActiveIndex] = useState(0);
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


      //title
     <div>
      
      <h1
  className={`absolute text-stroke-black text-white font-poppins bottom-[13.5rem] 
    ${activeIndex === 0 ? 'bottom-[10%] px-[8px]' : 'bottom-[8rem] px-[8px]'}
    text-[40px] md:text-[76px] font-bold mb-[15px] sm:mb-[30px] flex items-center`}
>
  <span className="mr-2">arbee</span>

  <span
  key={activeIndex}
  className={`transition-opacity duration-500 ease-in-out ${
    shouldFade ? 'opacity-100' : 'opacity-0'
  }`}
>
  {activeIndex === 0 ? '' : visibleText}
</span>


</h1>








<div className=" flex w-full h-[62px] z-10 gap-[16px] bottom-0 flex justify-center items-center bg-[#222]">
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

  <div className="hidden lg:flex justify-center items-center gap-[8px] sm:gap-[16px] md:gap-[32px]">
    <div onClick={() => handleLogoClick(0)} className="w-[80px] sm:w-[100px] md:w-[134px] h-[24px] sm:h-[28px] md:h-[36px] relative flex items-center px-[10px] sm:px-[15px] cursor-pointer">
      <Image
        src="/Arbeegroupgrey.svg"
        alt="arbee group gray"
        width={134}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 0 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbeegroupfull.svg"
        alt="arbee group"
        width={134}
        height={36}
        className={`absolute  top-1/2 left-1/2 -translate-x-1/2 mb-[5%]  transition-opacity duration-200 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>

    <div onClick={() => handleLogoClick(1)} className="w-[80px] sm:w-[100px] md:w-[154px] h-[24px] sm:h-[28px] md:h-[36px] relative flex items-center px-[10px] sm:px-[15px] cursor-pointer group">
      <Image
        src="/Arbee-Aquatic-Full-Grey.svg"
        alt="arbee aquatic gray"
        width={154}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 1 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 1 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbee-Aquatic-Full.svg"
        alt="arbee aquatic"
        width={154}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>

    <div onClick={() => handleLogoClick(2)} className="w-[80px] sm:w-[100px] md:w-[174px] h-[24px] sm:h-[28px] md:h-[36px] relative flex items-center px-[10px] sm:px-[15px] cursor-pointer group">
      <Image
        src="/Arbee-Biomarine-Full-Grey.svg"
        alt="arbee biomarine gray"
        width={174}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 2 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 2 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbee-Biomarine-Full.svg"
        alt="arbee biomarine"
        width={174}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>

    <div onClick={() => handleLogoClick(3)} className="w-[80px] sm:w-[100px] md:w-[114px] h-[24px] sm:h-[28px] md:h-[36px] relative flex items-center px-[10px] sm:px-[15px] cursor-pointer group">
      <Image
        src="/Arbee-Care-Full-Grey.svg"
        alt="arbee care gray"
        width={114}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 3 ? 'opacity-0' : 'opacity-100'} ${activeIndex !== 3 ? 'group-hover:brightness-150' : ''} w-full h-auto`}
      />
      <Image
        src="/Arbee-Care-Full.svg"
        alt="arbee care"
        width={114}
        height={36}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 mb-[5%] transition-opacity duration-200 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'} w-full h-auto`}
      />
    </div>
  </div>
</div>
</div>   
    );
}