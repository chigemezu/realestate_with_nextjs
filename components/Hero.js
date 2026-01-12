
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const texts = [
  "Homes",
  "Apartments",
  "Properties",
  "Commercial Spaces",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);  

    useEffect(() => {
      const currentText = texts[textIndex];
      let timeout;

      if (!isDeleting && charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else if (isDeleting && charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else if (!isDeleting && charIndex === currentText.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }

      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-5 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left content */}
        <div>
          <div className="flex items-center gap-2 text-[#800080] font-medium mb-4">
            <span>🏠</span>
            <span>Real Estate Agency</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            Find Your Dream <br /> <span className="md:text-3xl text-[#800080]">Luxury</span>
            <span className="md:text-3xl "> {displayText}</span>
          </h1>

          <p className="text-gray-600 max-w-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-[#800080] hover:bg-[#FFB8FF] hover:text-black font-bold text-white px-8 py-3 rounded-b-full justify-center rounded-full border shadow">
              Sign up
            </button>

            <button className="bg-black flex items-center text-white  rounded-b-full px-8 py-3 justify-center rounded-full border shadow">
              Sign In
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <Image
            src="/landing.jpg"
            alt="Modern house"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
