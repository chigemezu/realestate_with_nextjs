import { House } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <>
        <div className="bg-[#F7F7FA] mb-12 py-10 px-5">
            <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-gray-600 mt-4 flex text-xs">
                <House className="inline-block w-4 h-4 text-[#800080] mr-2" />
                Home / Contact Us
              </p>
        </div>
    <div className="max-w-7xl mx-auto px-6 pb-20">
    
        <div className="w-full max-w-7xl grid grid-cols-2">
            <div className="mt-10">
                <Image
                  src="/contact2.jpg"
                  alt="Contact Us"
                  width={400}
                  height={300}
                  className="object-contain"
                  priority
                />
            </div>
            <div className="mt-5 px-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#800080]"
                        />
                    </div>
                     <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#800080]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#800080]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#800080]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#800080] text-white py-2 px-4 rounded-md hover:bg-[#6a0dad] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}