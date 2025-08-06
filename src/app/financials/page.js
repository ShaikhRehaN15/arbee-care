'use client';
import React from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Lottie from 'lottie-react';
import { useState } from 'react';

 
export default function financials() {
     const [reports, setReports] = useState([
    { title: '2022 - 2023' },
    { title: '2021 - 2022' },
    { title: '2020 - 2021' },
    { title: '2019 - 2020' },
    { title: '2018 - 2019' },
    { title: '2017 - 2018' },
    { title: '2016 - 2017' },
    { title: '2015 - 2016' },
    { title: '2014 - 2015' },
    { title: '2013 - 2014' },
    { title: '2012 - 2013' },
  ]);
    return(
        <section className="min-h-screen w-full bg-gradient-to-b from-[#1D1D1D] to-[#292929] pb-[120px] pt-[180px] px-[120px]">
            <div className="flex flex-col w-full gap-[80px]">
                <div className="flex flex-col gap-[40px]">
                    <h1 className="font-bold font-noto-sans text-[56px]">
                    Financials and Annual Reports
                    </h1>
                    <div className="flex flex-col gap-[22px]">
                        <h2 className="text-[32px] font-noto-sans font-semi-bold">
                        Purpose That Drives Every Step
                        </h2>
                        <h3 className="text-[22px] font-noto-sans font-normal">
                        Just like Arbee’s product excellence, Arbee Care is built on unwavering commitment to quality and impact:
                        </h3>
                    </div>

                </div>
                <div className="flex flex-col bg-[#2C2C2C]">
                    <div className="pt-[32px] px-[20px] pb-[16px]">
                        <span className="font-noto-sans font-normal text-[22px] ">
Latest Financial Reports  
                        </span>
                    </div>
                    <div className=""> 
                    <div
  className="lg:grid lg:grid-cols-5 lg:grid-rows-3 
             md:grid md:grid-cols-4 md:grid-rows-4 
             sm:grid sm:grid-cols-3 sm:grid-rows-5
             grid grid-cols-2 grid-rows-1 
             gap-y-[20px] gap-x-[44px] px-[1px] h-full w-full"
>
  {reports.map((report, index) => (
    <div
      key={index}
      className="flex flex-row gap-[8px] w-[170px] h-[60px] px-[20px] py-[16px] items-center justify-end"
    >
      <h1 className="w-[98px] h-[28px] text-center self-end">{report.title}</h1>
      <Image
        src="/Vector(3).svg"
        priority
        alt="download button"
        width={16}
        height={16}
        className="self-start"
      />
    </div>
  ))}
</div>

                   </div>

                    
                </div>
            </div>

        </section>
    );
}