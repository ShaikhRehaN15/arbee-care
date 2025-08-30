"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const mobileHeroLogos = [
  { gray: "/Arbee-Group-Short-Grey.svg", full: "/Arbee-Group-Short.svg", width: 59.5, height: 16, altGray: "mobile arbee group gray", altFull: "mobile arbee group" },
  { gray: "/Arbee-Aquatic-Short-Grey.svg", full: "/Arbee-Aquatic-Short.svg", width: 71.59, height: 16, altGray: "mobile arbee aquatic gray", altFull: "mobile arbee aquatic" },
  { gray: "/Arbee-Biomarine-Short-Grey.svg", full: "/Arbee-Biomarine-Short.svg", width: 88.74, height: 49.57, altGray: "mobile arbee biomarine gray", altFull: "mobile arbee biomarine" },
  { gray: "/Arbee-Care-Short-Grey.svg", full: "/Arbee-Care-Short.svg", width: 49.67, height: 16, altGray: "mobile arbee care gray", altFull: "mobile arbee care" }
];

export default function Enquiry() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFooterIndex, setOpenFooterIndex] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // Footer data
  const footerData = [
    { title: "Who we are", links: [{ label: "About Arbee", href: "/about" }] },
    { title: "Our Products", links: [{ label: "Omega-3 Oil", href: "/omega-3-oil" }, { label: "Fish Oil", href: "/refined-fish-oil" }, { label: "Crude Oil", href: "/crude-oil" }] },
    { title: "Innovation", links: [{ label: "Innovation", href: "/innovation" }] },
    { title: "Sustainability", links: [{ label: "Arbee Sustainability", href: "/sustainability" }, { label: "Sustainable Development Goals", href: "/sustainability" }] },
    { title: "Corporate", links: [{ label: "Enquiry", href: "/enquiry" }, { label: "News", href: "/corporate" }] }
  ];

  // Submit handler: sends multipart/form-data to /api/enquiry
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const formElement = formRef.current;
      if (!formElement) throw new Error("Form reference missing");

      const formData = new FormData(formElement); // keeps file inputs intact

      const res = await fetch("http://localhost:5001/api/enquiry", {
        method: "POST",
        body: formData, // don't set Content-Type, browser will handle
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Server error");

      if (json.success) {
        setStatus("✅ Submission successful: " + (json.message || "Saved"));
        formElement.reset();
      } else {
        setStatus("⚠️ Submission response: " + JSON.stringify(json));
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <main>
      <section className="relative min-h-screen bg-[#fcfcfc] px-[5vw] py-[5vh] w-full">
        <div className="mb-[4vh]">
          <div className="hidden md:block">
            <h1 className="font-noto-sans text-[6vw] md:text-[56px] font-bold text-[#323232]">Reach out. Let’s connect.</h1>
            <p className="text-[#555] text-[20px] mt-[1vh]">We’re here to answer your queries and work towards solutions together.</p>
          </div>
          <div className="md:hidden">
            <h1 className="font-noto-sans text-[8vw] font-bold text-[#323232]">Connect with us</h1>
            <p className="text-[#555] text-[4vw] mt-[1vh]">Join hands with us to create lasting change.</p>
          </div>
        </div>

        <div className="w-full bg-white p-[3vh]">
          <div className="flex flex-col-reverse md:flex-row gap-[5vh] md:gap-[3vw]">
            <div className="hidden md:block w-full max-w-[560px]">
              <div className="bg-[#052833] p-[5vh] flex flex-col gap-[6vh] w-full h-[627px]">
                <div className="w-[35vw] max-w-[211px] aspect-square mx-auto md:mx-0">
                  <Image src="/Arbeelogo.svg" alt="flower arbee" width={211} height={211} />
                </div>
                <div className="flex flex-col gap-[4vh] text-white text-[16px]">
                  <div className="flex flex-row items-center gap-[2vw]">
                    <Image src="/vector.svg" width={24} height={24} alt="phone svg" />
                    <span>+91 99 88 77 66 55</span>
                  </div>
                  <div className="flex flex-row items-center gap-[2vw]">
                    <Image src="/Layer_1(1).svg" width={20} height={20} alt="email svg" />
                    <span>info@arbeeglobal.com</span>
                  </div>
                  <div className="flex flex-row items-start gap-[2vw]">
                    <Image src="/Layer_1.svg" width={24} height={24} alt="location svg" />
                    <span>
                      Arbee Aquatic Proteins Pvt Ltd,
                      405B/IX, Karippadom P.O,
                      Thalayolaparambu, Kottayam,
                      Kerala – 686605.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="w-full max-w-[600px] flex flex-col gap-[3vh]">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-[3vh]" encType="multipart/form-data" noValidate>
                {/* name */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Name of the applicant</label>
                  <input name="name" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter your name" type="text" required />
                </div>

                {/* age + sex side by side */}
<div className="flex flex-row gap-[2vw] w-full">
  {/* age */}
  <div className="w-1/2 border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
    <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Age of the applicant</label>
    <input
      name="age"
      className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none"
      placeholder="Enter your age"
      type="number"
      required
    />
  </div>

  {/* sex */}
  <div className="w-1/2 border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
    <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Sex of the applicant</label>
    <select
      name="sex"
      className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none"
      required
    >
      <option value="">select</option>
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="intersex">intersex</option>
      <option value="prefer not to say">prefer not to say</option>
    </select>
  </div>
</div>

                {/* address */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Residential Address</label>
                  <input name="address" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter your current address" type="text" required />
                </div>

                {/* proof of residence (file) */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Proof of Address (upload)</label>
                  <label className="text-[#6C6C6C] text-[2vh] cursor-pointer flex flex-row gap-2 items-center">
                    <span>Upload file</span>
                    <Image src="/Vector(3).svg" width={14} height={14} alt="upload" />
                    <input name="address_proof" type="file" accept=".pdf,image/*" style={{ display: 'inline-block' }} />
                  </label>
                </div>

                {/* Aadhaar */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Aadhaar Card Number</label>
                  <input name="aadhaar" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter your Aadhaar card number" type="text" />
                </div>

                {/* Aadhaar proof (file) */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Proof of Aadhaar (upload)</label>
                  <label className="text-[#6C6C6C] text-[2vh] cursor-pointer flex flex-row gap-2 items-center">
                    <span>Upload file</span>
                    <Image src="/Vector(3).svg" width={14} height={14} alt="upload" />
                    <input name="aadhaar_proof" type="file" accept=".pdf,image/*" style={{ display: 'inline-block' }} />
                  </label>
                </div>

                {/* Aid required options (radio) */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col gap-2">
                  <label className="font-noto-sans text-[12px] text-[#9C9C9C]">Nature of Aid Required</label>
                  {[
                    "House Construction/Renovation",
                    "Education",
                    "Promotion of Sports/Arts",
                    "Social Welfare",
                    "Hospital Admission/Medical Treatment",
                    "Others"
                  ].map((opt, i) => (
                    <label key={i} className="flex items-center gap-2 text-[#333] text-[12px]">
                      <input type="radio" name="aid_nature" value={opt} />
                      {opt}
                    </label>
                  ))}
                </div>

                {/* Amount (number) */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Amount of Financial Aid (in numbers)</label>
                  <input name="amount_figures" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter the amount in figures" type="number" required />
                </div>

                {/* Amount (words) */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Amount in Words</label>
                  <input name="amount_words" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter the amount in words" type="text" required />
                </div>

                {/* Aid details */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Aid Details</label>
                  <input name="aid_details" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="For Eg: I want the aid for higher studies in..." required />
                </div>

                {/* Applied for funding */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Applied for funding from any NGO/Agency?</label>
                  <select name="applied_other" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" required>
                    <option value="">select</option>
                    <option value="NGO">NGO</option>
                    <option value="Government Organisation">Government Organisation</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Organisation URL */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Organisation URL</label>
                  <input name="organisation_url" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter the URL of the organisation" type="url" required />
                </div>

                {/* email */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Email</label>
                  <input name="email" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Enter your mail ID" type="email" required />
                </div>

                {/* Topic of enquiry */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">What do you want to know about?</label>
                  <select name="topic_enquiry" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" required>
                    <option value="">select</option>
                    <option value="application_process">Application process</option>
                    <option value="eligibility">Eligibility</option>
                    <option value="document_requirements">Document requirements</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* comments */}
                <div className="w-full border border-[#CBCBCB] py-[1vh] px-[2vw] flex flex-col">
                  <label className="font-noto-sans text-[1.5vh] text-[#9C9C9C]">Comments</label>
                  <input name="comments" className="text-[2vh] text-[#6C6C6C] font-noto-sans outline-none" placeholder="Write your comments here" type="text" required />
                </div>
              </form>

              {/* Disclaimer + button (all screens) */}
              <div className="w-full flex flex-col gap-3">
                <p className="text-[#333] text-[2vh] font-semibold">
                  By applying for support, you agree to share your information with the Arbee team and relevant authorities as necessary for processing your request.
                </p>

                <div className="flex items-center gap-3 justify-end">
                  <button onClick={() => formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))} className={`bg-[#052833] text-white text-[18px] px-6 py-2 rounded-none font-noto-sans ${loading ? "opacity-60 pointer-events-none" : ""}`}>
                    {loading ? "Processing..." : "Get Support"}
                  </button>
                </div>

                {status && <div className="mt-2 text-sm">{status}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Footer */}
<footer className="hidden md:block w-full bg-white px-[120px] py-[60px]">
  <div className="grid grid-cols-6 gap-8 items-start">
    {/* Arbee Logo */}
    <div className="flex items-center">
      <Image
        src="/Arbeelogo.svg"
        alt="Arbee Logo"
        width={120}
        height={40}
        className="w-[120px] h-auto"
      />
    </div>

    {/* Footer Nav Sections */}
    {footerData.map((section) => (
      <div key={section.title} className="flex flex-col gap-1">
        <h4 className="font-bold text-[#323232] text-sm whitespace-nowrap">
          {section.title}
        </h4>
        {section.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#666666] hover:text-[#323232] transition-colors text-[12px] whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>
    ))}

    {/* SDG Logo */}
    <div className="flex items-center justify-end">
      <Image
        src="/sdg-logo.svg"
        alt="Sustainable Development Goals"
        width={140}
        height={50}
        className="w-[140px] h-auto"
      />
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="flex justify-between items-center mt-10 border-t border-[#e5e5e5] pt-6 flex-wrap gap-2">
    <div className="flex gap-4 text-[#b0b0b0] text-[13px] whitespace-nowrap">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>
    <div className="text-[#b0b0b0] text-[12px] whitespace-nowrap">
      © 2025 Arbee | Crafted with care by INSAAN
    </div>
  </div>
</footer>

      {/* Mobile Footer */}
      <footer className="md:hidden w-full bg-white px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <Image src="/Arbeelogo.svg" alt="Arbee Logo" width={100} height={30} className="w-[100px] h-auto" />
          <Image src="/sdg-logo.svg" alt="Sustainable Development Goals" width={100} height={35} className="w-[100px] h-auto" />
        </div>

        <div className="flex flex-col gap-2">
          {footerData.map((section, idx) => (
            <div key={section.title} className="border-t border-[#e5e5e5]">
              <button className="w-full flex justify-between items-center py-2 text-[#323232] font-semibold text-[14px]" onClick={() => setOpenFooterIndex(openFooterIndex === idx ? null : idx)}>
                {section.title}
                <span>{openFooterIndex === idx ? "-" : "+"}</span>
              </button>
              {openFooterIndex === idx && (
                <div className="flex flex-col gap-1 pb-2 pl-2">
                  {section.links.map((link) => (
                    <a key={link.label} href={link.href} className="text-[#666666] hover:text-[#323232] text-[13px]">{link.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-6 border-t border-[#e5e5e5] pt-4 text-center text-[#b0b0b0] text-[12px]">
          <div className="flex justify-center gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div>© 2025 Arbee | Crafted with care by INSAAN</div>
        </div>
      </footer>

      {/* Subsidiaries Bar - mobile */}
      <div className="block md:hidden w-full h-[50px] sm:h-[62px] flex justify-center items-center gap-[12px] sm:gap-[16px] bg-[#222]">
        {mobileHeroLogos.map((logo, idx) => (
          <div key={logo.full} className="relative flex items-center px-[8px] sm:px-[10px] cursor-pointer group" style={{ width: `${logo.width * 0.85}px`, height: `${logo.height * 0.85}px` }}>
            <Image src={logo.gray} alt={logo.altGray} width={logo.width} height={logo.height} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${activeIndex === idx ? "opacity-0" : "opacity-100"} ${activeIndex !== idx ? "group-hover:brightness-150" : ""} w-[85%] sm:w-full h-auto`} />
            <Image src={logo.full} alt={logo.altFull} width={logo.width} height={logo.height} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${activeIndex === idx ? "opacity-100" : "opacity-0"} ${activeIndex !== idx ? "group-hover:brightness-150" : ""} w-[85%] sm:w-full h-auto`} />
          </div>
        ))}
      </div>
    </main>
  );
}





