"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Bed,
  Bath,
  Ruler,
  Heart,
  Plus,
  ArrowUpRight,
  Camera,
  Videotape,
  User,
  Pen,
  Calendar,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    price: 34900,
    image: "/1.jpg",
    category: "Business",
    author: "John Doe",
   
    
  },
  {
    id: 2,
    title: "Modern Apartments",
    price: 34900,
    status: "FOR SALE",
    image: "/2.jpg",
    category: "Technology",
    author: "Steve Mark",
   
    
  },
  {
    id: 3,
    title: "Comfortable Apartment",
    price: 34900,
    image: "/3.jpg",
    category: "sport",
    author: "Thomas Irene",
   
    
  },
  {
    id: 4,
    title: "Luxury Villa in Rego Park",
    price: 34900,
    image: "/4.jpg",
    category: "Politics",
    author: "ThankGod Doe",
   
    
  },
  {
    id: 5,
    title: "Home for the Family",
    price: 34900,
    image: "/4.jpg",
    category: "Gadgets",
    author: "John Doe",
   
    
  },
  {
    id: 6,
    title: "Luxury Place in Rego Park",
    price: 34900,
    image: "/4.jpg",
    category: "Travel",
   author: "Duru Chigemezu",
    
  },
];

export default function Property() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#F2F6F7] py-20">
        <div className="text-center mb-16">
            <span className="inline-block bg-[#F3E8F5] text-[#800080] text-sm font-medium px-4 py-1 rounded-full mb-4">
                Our Blog
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
                Our Recent Articles
            </h2>
        </div>
      <div className="max-w-7xl mx-auto px-6">

        {loading ? (
          <Skeleton />
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">

                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden group">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                   
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs">
                            <User size={12} className="text-[#800080] text-xs mr-1 inline-block" />
                            {property.author || 'Admin'}
                        </span>
                        <span className="text-xs">
                            <Pen size={12} className="text-[#800080] text-xs mr-1 inline-block" />
                            {property.category}
                        </span>
                    </div>
                    

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {property.title}
                    </h3>

                    <p className="text-gray-600 text-[11px] mb-4">
                      Beautiful Huge 1 Family House In Heart Of Westbury.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className=" text-xs"><Calendar size={12} className="text-[#800080] text-xs mr-1 inline-block" /> 12/09/2025</span>
                        <Link href="#" className="font-medium inline-flex items-center text-[#800080] text-xs gap-2  hover:text-[#800080]">
                            Read More <ArrowUpRight size={14} />
                        </Link>
                    </div>
                    

                   
                  </div>

                  

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
          <div className="h-56 bg-gray-200" />
          <div className="p-6 space-y-3">
            <div className="h-4 bg-gray-200 w-1/2 rounded" />
            <div className="h-5 bg-gray-200 rounded" />
            <div className="h-3 bg-gray-200 rounded" />
          </div>
          <div className="h-14 bg-gray-100" />
        </div>
      ))}
    </div>
  );
}
