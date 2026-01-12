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
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const properties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    price: 34900,
    status: "FOR RENT",
    image: "/1.jpg",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    agent: {
      name: "William Seklo",
      role: "Estate Agent",
      avatar: "/author.jpg",
    },
  },
  {
    id: 2,
    title: "Modern Apartments",
    price: 34900,
    status: "FOR SALE",
    image: "/2.jpg",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    agent: {
      name: "William Seklo",
      role: "Estate Agent",
      avatar: "/author.jpg",
    },
  },
  {
    id: 3,
    title: "Comfortable Apartment",
    price: 34900,
    status: "FOR RENT",
    image: "/3.jpg",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    agent: {
      name: "William Seklo",
      role: "Estate Agent",
      avatar: "/author.jpg",
    },
  },
  {
    id: 4,
    title: "Luxury Villa in Rego Park",
    price: 34900,
    status: "FOR RENT",
    image: "/4.jpg",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    agent: {
      name: "William Seklo",
      role: "Estate Agent",
      avatar: "/author.jpg",
    },
  },
  {
    id: 5,
    title: "Home for the Family",
    price: 34900,
    status: "FOR RENT",
    image: "/4.jpg",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    agent: {
      name: "William Seklo",
      role: "Estate Agent",
      avatar: "/author.jpg",
    },
  },
  {
    id: 6,
    title: "Luxury Place in Rego Park",
    price: 34900,
    status: "FOR RENT",
    image: "/4.jpg",
    location: "Belmont Gardens, Chicago",
    beds: 3,
    baths: 2,
    area: 3450,
    agent: {
      name: "William Seklo",
      role: "Estate Agent",
      avatar: "/author.jpg",
    },
  },
];

export default function Property() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white md:py-10 py-1">
      <div className="text-center mb-16">
            <span className="inline-block bg-[#F3E8F5] text-[#800080] text-sm font-medium px-4 py-1 rounded-full mb-4">
                Our Property
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
                Our Recent Property Listings
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

                    {/* STATUS */}
                    <span
                      className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded 
                        ${
                          property.status === "FOR SALE"
                            ? "bg-[#800080] text-white"
                            : "bg-[#F3E8F5] text-[#800080]"
                        }`}
                    >
                      {property.status}
                    </span>

                    {/* LOCATION */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs">
                      <MapPin size={12} />
                      {property.location}
                    </div>

                    {/* IMAGE META */}
                    <div className="absolute bottom-4 right-4 flex gap-2 text-white text-[10px]">
                      <span className="bg-black/60 px-2 py-1 rounded flex gap-1">
                        <Camera size={12} /> 4
                      </span>
                      <span className="bg-black/60 px-2 py-1 rounded flex gap-1">
                        <Videotape size={12} /> 2
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <p className="text-[#800080] font-semibold mb-2">
                      ${property.price.toLocaleString()}
                      <span className="text-sm font-normal"> /Month</span>
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {property.title}
                    </h3>

                    <p className="text-gray-600 text-[11px] mb-4">
                      Beautiful Huge 1 Family House In Heart Of Westbury.
                    </p>

                    <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
                      <span className="flex items-center gap-1">
                        <Bed size={16} /> {property.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={16} /> {property.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler size={16} /> {property.area}
                      </span>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between px-6 py-4 border-t">
                    <div className="flex items-center gap-3">
                      <Image
                        src={property.agent.avatar}
                        alt={property.agent.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-xs font-medium">
                          {property.agent.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {property.agent.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[ArrowUpRight, Heart, Plus].map((Icon, i) => (
                        <button
                          key={i}
                          className="p-2 bg-gray-100 rounded hover:bg-[#800080] hover:text-white transition"
                        >
                          <Icon size={12} />
                        </button>
                      ))}
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
