'use client';
import React from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Lottie from 'lottie-react';

export default function enquiry() {
    return (
        
            <main>
                <section className="relative min-h-screen bg-[#fcfcfc] md:px-[120px] md:pb-[60px] w-full">
                    <div className="hidden md:block md:pt-[60px]">
                        <h1 className="md:font-noto-sans md:text-[56px] md:font-bold md:text-[#323232]">
                            Certifications
                        </h1>
                    </div>
                    

                    {/* main form desktop only*/}
                    <div className="hidden md:block md:w-full md:h-[1957px] ">
                    {/* sub headings */}
                    <div className="mt-[10px] flex flex-col w-[609px] gap-[2.5px]">
                        <span className="md:font-noto-sans md:text-[40px] md:font-semibold md:text-[#323232]">
                            Reach Out, Let's Connect.
                        </span>
                        <span className="md:font-noto-sans md:text-[18px] md:font-normal md:text-[#717171]">
                        We're here to answer your queries and work towards solutions together.
                        </span>
                    </div>

                        <div className="md:w-full md:h-full md:bg-[#ffffff] mt-[40px] p-[24px]">
                            <div className="md:w-full md:h-full md:bg-[#ffffff] flex flex-row gap-[32px]">
                                <div className="md:w-[560px] h-[627px]">
                                    <div className="bg-[#052833] p-[40px] flex flex-col gap-[59px] w-full h-full">
                                        <div className="w-[211px] h-[211px] mt-[53px] mr-[308px]">
                                            <Image src='/Arbee.svg'
                                            alt='flower arbee'
                                            width={211}
                                            height={211}
                                            />
                                        </div>
                                        <div className="w-[337px] h-[224px] flex flex-col gap-[40px]">
                                            <div className="flex flex-row gap-[24px] w-[186px] h-[24px]">
                                                <div className="w-[24px] h-[24px]">
                                                <Image 
                                                src='/vector.svg'
                                                width={24}
                                                height={24}
                                                alt='phone svg'
                                                />
                                                </div>
                                                <div className="w-full h-[24px] text-[16px] font-normal font-noto-sans">
                                                +91 99 88 77 66 55
                                                </div>   
                                            </div>
                                            <div className="flex flex-row gap-[24px] w-[216px] h-[24px]">
                                                <div className="w-[24px] h-[24px]">
                                                <Image 
                                                src='/Layer_1(1).svg'
                                                width={20.8}
                                                height={20.8}
                                                alt='phone svg'
                                                />
                                                </div>
                                                <div className="w-full h-[24px] text-[16px] font-normal font-noto-sans">
                                                info@arbeeglobal.com
                                                </div>   
                                            </div>
                                            <div className="flex flex-row gap-[24px] w-[337px] h-[24px]">
                                                <div className="w-[24px] h-[24px]">
                                                <Image 
                                                src='/Layer_1.svg'
                                                width={24}
                                                height={24}
                                                alt='phone svg'
                                                />
                                                </div>
                                                <div className="w-full h-[96px] text-[16px] font-normal font-noto-sans">
                                                Arbee Aquatic Proteins Pvt Ltd,
405B/IX, Karippadom P.O,
Thalayolaparambu, Kottayam,
Kerala – 686605.
                                                </div>   
                                            </div>
                                            


                                        </div>
                                    </div>
                                </div>
                                <form 
                                className="p-[40px]"
                                action="/submit"
                                method="post"
                                
                                >
                                    <div className="flex flex-col gap-[20px] w-[480px] h-[1699px]">

                                        {/* name */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Name of the applicant
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your name"
                                            type="text"
                                            name="name"
                                            
                                            />
                                        </div>

                                        {/* age */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Age of the applicant
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your age"
                                            type="number"
                                            />
                                        </div>

                                        {/* sex */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[2px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Sex of the applicant
                                            </label>
                                            <select
                                            className="text-[16px] text-[#9f9f9f] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your name"
                                            required
                                            >
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                            <option value="Intersex">Intersex</option>
                                            <option value="prefer not to say">prefer not to say</option>
                                            </select>

                                            
                                            
                                        </div>
                                        
                                        {/* address */}

                                        <div className="w-full h-[142px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Residential Address of the applicant
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your current address"
                                            />
                                        </div>

                                        {/* proof of recidence */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[2px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Name of the applicant
                                            </label>
                                            <label className="text-[#6C6C6C] text-[13px] rounded cursor-pointer flex flex-row gap-2">

                                             <span className="w-fit">
                                                Upload file
                                             </span>
                                             
                                             <Image 
                                             className="cursor-pointer" 
                                             src="/Vector(3).svg"
                                             width={13.5}
                                             height={13.5}
                                             alt="upload button svg"
                                             />
                                    
                                            
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Upload proof of address"
                                            type="file"
                                            required
                                            name="address proof"
                                            style={{display:'none'}}
                                            />
                                            </label>
                                        </div>

                                        {/* aadhaar card number */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Aadhar Card Number
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your Aadhar card number"
                                            />
                                        </div>

                                        {/* proof of aadhaar card number */}

                                        <div required className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Proof of Aadhar Card Number
                                            </label>
                                            <label className="text-[#6C6C6C] text-[13px] rounded cursor-pointer flex flex-row gap-2">

                                             <span className="w-fit">
                                                Upload file
                                             </span>
                                             
                                             <Image 
                                             className="cursor-pointer" 
                                             src="/Vector(3).svg"
                                             width={13.5}
                                             height={13.5}
                                             alt="upload button svg"
                                             />
                                    
                                            
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Upload proof of address"
                                            type="file"
                                            required
                                            name="address proof"
                                            style={{display:'none'}}
                                            />
                                            </label>
                                        </div>

                                        {/* nature of aid required */}

                                        <div className="w-full h-[231px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Name of the applicant
                                            </label>

                                            <div className="flex flex-row gap-2">
                                            <input 
                                            className="text-[16px] text-[#333333] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            type="radio"
                                            name="donation"
                                            
                                            />
                                            <label className="text-[#333333]"> House Construction/Renovation </label>
                                            </div>

                                            <div className="flex flex-row gap-2">
                                            <input 
                                            className="text-[16px] text-[#333333] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            type="radio"
                                            name="donation"
                                            
                                            />
                                            <label className="text-[#333333]"> Education </label>
                                            </div>

                                            <div className="flex flex-row gap-2">
                                            <input 
                                            className="text-[16px] text-[#333333] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            type="radio"
                                            name="donation"
                                            
                                            />
                                            <label className="text-[#333333]"> Promotion of Sports/Arts </label>
                                            </div>

                                            <div className="flex flex-row gap-2">
                                            <input 
                                            className="text-[16px] text-[#333333] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            type="radio"
                                            name="donation"
                                            
                                            />
                                            <label className="text-[#333333]"> Social Welfare </label>
                                            </div>

                                             <div className="flex flex-row gap-2">
                                            <input 
                                            className="text-[16px] text-[#333333] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            type="radio"
                                            name="donation"
                                            
                                            />
                                            <label className="text-[#333333]"> Hospital Admission/Medical Treatment </label>
                                            </div>
                                            
                                            <div className="flex flex-row gap-2">
                                            <input 
                                            className="text-[16px] text-[#333333] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            type="radio"
                                            name="donation"
                                            
                                            />
                                            <label className="text-[#333333]"> Others </label>
                                            </div>
                                        </div>

                                        {/* amount in numbers*/}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Amount of Financial Aid required (Rupees in Figures)
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter the amount of capital required in numbers"
                                            type="number"
                                            required
                                            />
                                        </div>

                                        {/* amount in words */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Name of the applicant
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter the amount of capital required in words"
                                            type="text"
                                            required
                                            />
                                        </div>

                                        {/* details of aid */}

                                        <div className="w-full h-[142px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Provide the details of nature of Aid with a detailed summary
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="For Eg: I want the aid for higher studies in..."
                                            required
                                            />
                                        </div>

                                        {/* applied for previous funding initiatives */}

                                        <div className="w-full h-[63px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Whether applied for any other sources of funding from any Agency/ NGO etc
                                            </label>
                                            <select
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            required
                                            >
                                            <option value="">select</option>
                                            <option value="NGO">NGO</option>
                                            <option value="Government Organisation">Government Organisation</option>  
                                            <option value="Others">Others</option>  
                                            </select>
                                        </div>

                                        {/* applied to what initiaties 'domain' */}

                                        <div className="w-full h-[63px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Name of the applicant
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter the url of the organisation"
                                            type="url"
                                            name="domain"
                                            
                                            required
                                            />
                                        </div>

                                        {/* email */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Name of the applicant
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your mail ID"
                                            type="email"
                                            name="mail ID"
                                         
                                            required

                                            />
                                        </div>

                                        {/* what do you want to know about */}

                                        <div className="w-full h-[60px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            What do you want to know about?
                                            </label>
                                            <select
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Enter your weird ass name"
                                            required
                                            >
                                                <option value="">select</option>
                                            </select>
                                        </div>

                                        
                                        {/* comments */}

                                        <div className="w-full h-[183px] border-[1px] border-[#CBCBCB] py-[12px] px-[16px] flex flex-col gap-[0px]">
                                            <label className="font-noto-sans font-normal text-[10px] text-[#9C9C9C]">
                                            Write down any comments
                                            </label>
                                            <input 
                                            className="text-[16px] text-[#6C6C6C] font-noto-sans font-normal outline-none focus:outline-none"
                                            placeholder="Write your comments here"
                                            required
                                            type="text"
                                            />
                                        </div>


                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
    );
}