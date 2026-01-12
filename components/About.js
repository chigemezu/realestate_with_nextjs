import { HouseIcon, KeySquare, Lightbulb, VenetianMaskIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function About()  {
  
    return (
      <section className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 py-5 grid md:grid-cols-2 gap-10 items-center">
              
              {/* Left content */}
              <div className="relative">
                <Image
                  src="/about.png"
                  alt="Modern house"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
              <div className='md:mt[-200px] space-y-10'>
                <div className="flex items-center gap-2 text-[#800080] font-medium mb-4">
                  <span>🏠</span>
                  <span>About Us</span>
                </div>
      
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
                  Your Trusted Real Estate Rental Marketplace 
                </h1>
      
                <p className="text-gray-600 max-w-lg mb-8 ">
                  We are a trusted real estate platform dedicated to helping individuals, families, and investors find the right property with confidence. Whether you are buying, selling, or renting, we simplify the process by connecting you with verified listings and reliable market information.
                </p>
      
                <div className="max-w-full mx-auto  grid md:grid-cols-2 space-y-5">
                    <div className="flex items-center gap-2">
                       <div className='bg-[#F3E8F5] px-2 py-2 rounded-3xl'>
                            <HouseIcon className="w-6 h-6  text-[#800080]" />
                        </div>
                        <span>Smart Home Design</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='bg-[#F3E8F5] px-2 py-2 rounded-3xl'>
                            <KeySquare className="w-6 h-6  text-[#800080]" />
                        </div>
                         <span>Excellent Security System</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='bg-[#F3E8F5] px-2 py-2 rounded-3xl'>
                            <Lightbulb className="w-6 h-6  text-[#800080]" />
                        </div>
                       
                        <span>Light Supply</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='bg-[#F3E8F5] px-2 py-2 rounded-3xl'>
                            <VenetianMaskIcon className="w-6 h-6 text-[#800080]" />
                        </div>
                        
                        <span>Good Ventilation</span>
                    </div>
                </div>
                <p className='text-gray-500'>
                    Our mission is to make property transactions transparent, secure, and stress-free. We combine local market knowledge with modern technology to provide accurate property details, fair pricing insights, and a seamless user experience.
                </p>
                <button className="bg-[#800080] hover:bg-[#F3E8F5] hover:text-black font-bold text-white px-8 py-3 rounded-b-full justify-center rounded-full shadow">
                  Learn More
                </button>

              </div>
      
              {/* Right image */}
              
      
            </div>
          </section>
    )
  
}
