'use client';
import React from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Lottie from 'lottie-react';
 
export default function financials() {
    return(
        <section className="min-h-screen w-full bg-gradient-to-b from-[#1D1D1D] to-[#292929] pb-[120px] pt-[180px] px-[120px]">
            <div className="flex flex-col w-full gap-[80px]">
                <div className="flex flex-col gap-[60px]">
                    <h1 className="">
                    Financials and Annual Reports
                    </h1>
                    <div className="flex flex-col gap-[32px]">
                        <h2 className="">
                        Purpose That Drives Every Step
                        </h2>
                        <h3 className="">
                        Just like Arbee’s product excellence, Arbee Care is built on unwavering commitment to quality and impact:
                        </h3>
                    </div>

                </div>
                <div className="flex flex-col bg-green-500">
                    <div className="">
                        <span className="">

                        </span>
                    </div>
                    <div className="grid grid-rows-5 bg-red-500 grid-cols-3 w-[50px] h-[50px]">
                        <div className="bg-blue-100"></div>

                    </div>
                </div>
            </div>

        </section>
    );
}