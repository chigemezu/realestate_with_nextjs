
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Service from "@/components/Service";
import Property from "@/components/Property";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { House } from "lucide-react";

export default function Home() {
  return (
     <>
      <Navbar />
      <div className="bg-[#F7F7FA] mb-12 py-10 px-5">
            <h1 className="text-4xl font-bold text-gray-900">About</h1>
            <p className="text-gray-600 mt-4 flex text-xs">
                <House className="inline-block w-4 h-4 text-[#800080] mr-2" />
                Home / About
              </p>
        </div>
      
      <About />
      <Service />
      <Property />
      <Blog />
      <Footer />
    </>
  );
}




