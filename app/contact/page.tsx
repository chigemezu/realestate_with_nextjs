import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import Property from "@/components/Property";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <>
      <Navbar />
      
      <Contact />
      
      <Footer />
    </>
  );
}




