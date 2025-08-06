'use client';
import React,{useState,useEffect,useRef} from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Lottie from 'lottie-react';




{/* Product Commitment Section */}
export default function commitment(){
    const [hoveredCommitment, setHoveredCommitment] = useState(null);

    const commitments = [
        {
          label: 'Quality Standard',
          desc: 'Our commitment to quality is unwavering. Every product, whether Omega-3-rich fish oil or nutrient-dense fish meal—is manufactured to meet the highest international standards through meticulous R&D and precise production. With a dedication to purity and excellence, Arbee ensures clients receive marine solutions that truly meet their needs.'
        },
        {
          label: 'Sustainable Innovation',
          desc: 'We drive sustainable innovation by investing in advanced technologies and eco-friendly processes. Our R&D team continuously explores new ways to enhance product quality while minimizing environmental impact, ensuring a greener future for generations to come.'
        },
        {
          label: 'Responsible Sourcing',
          desc: 'Arbee is dedicated to responsible sourcing, partnering with suppliers who share our commitment to sustainability and ethical practices. We ensure traceability and transparency throughout our supply chain, supporting healthy oceans and thriving communities.'
        },
        {
          label: 'Eco Production',
          desc: 'Our eco production methods prioritize energy efficiency, waste reduction, and the use of renewable resources. By implementing best practices in manufacturing, we deliver high-quality marine products with a reduced environmental footprint.'
        }
      ];

    return(
<section className="relative min-h-screen bg-white py-[60px] px-[24px] sm:py-20 px-4 sm:px-8 font-poppins overflow-x-hidden">
          <div className="w-full h-[34px] mb-[32px]">
            <h2 className="text-[28px] text-[#323232] font-noto font-sans font-bold">
              Sustainability   
            </h2>
          </div>  
          <div className="w-full h-[176px] mb-[32px]">  
            <h3 className="text-[14px] text-[#323232] font-noto font-sans font-regular">
            Our commitment to sustainability drives every step we take. By harnessing renewable energy, managing waste responsibly, and capturing rainwater, we minimize our environmental impact. Our green and blue initiatives support sustainable sourcing, preserve marine biodiversity, and promote eco-conscious practices to protect our planet and oceans for future generations. 
            </h3>
          </div>
          

          <div className="w-full grid grid-rows-[244px_repeat(4,minmax(0,140px))] bg-white mt-[32px] sm:max-w-[1440px] h-auto sm:h-[454px] sm:mt-8 sm:mt-[250px] sm:mb-[10px] sm:grid-cols-5 bg-white">
            <div className="bg-[#F5F5F5] w-full p-[32px] flex flex-row sm:p-8 flex flex-col justify-center">
              <h3 className="text-[#454545] font-lato font-light text-[24px] mb-[40px] sm:text-3xl mb-6">
                PROTECTING OCEANS, SUSTAINING THE PLANET
              </h3>
              <button className="text-[#052833] font-poppins font-bold border-2 border-[#052833] px-[24px] py-[10px] text-[14px] sm:px-8 py-2 sm:py-3 w-fit hover:bg-[#1A1A1A] hover:text-white transition-colors font-poppins">
                KNOW MORE
              </button>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src="/Sustainability - 001.webp"
                alt="Safeguarding Marine Life"
                fill
                className="object-cover transition-all group-hover:grayscale-0 duration-500 grayscale-[70%] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center sm:p-6 text-white">
                <h4 className="text-[16px] sm:text-xl font-semibold font-poppins">Safeguarding Marine Life</h4>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src="/Sustainability - 002.webp"
                alt="Responsible Resource Management"
                fill
                className="object-cover transition-all duration-500 grayscale-[70%] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center sm:p-6 text-white">
                <h4 className="text-center text-[16px] sm:text-xl font-semibold font-poppins">Responsible Resource Management</h4>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src="/Sustainability - 003.webp"
                alt="Powering a Sustainable Future"
                fill
                className="object-cover transition-all duration-500 grayscale-[70%] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center sm:p-6 text-white">
                <h4 className="text-center text-[16px] sm:text-xl font-semibold font-poppins">Powering a Sustainable Future</h4>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src="/Sustainability - 004.webp"
                alt="Capturing Rainwater for Conservation"
                fill
                className="object-cover transition-all duration-500 grayscale-[70%] group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center sm:p-6 text-white">
                <h4 className="text-center text-[16px] sm:text-xl font-semibold font-poppins">Capturing Rainwater for Conservation</h4>
              </div>
            </div>
          </div>
        </section>
    );
}