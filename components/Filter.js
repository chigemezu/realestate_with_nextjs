import React from 'react'

export default function Filter() {
  return (
   <div className="w-full px-4 md:px-20 -mt-20 relative z-10">
        <div className="max-w-6xl mx-auto bg-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4">
            
            {/* Choose Area */}
            <div className="border-r">
                <select className="w-full h-20 px-6 text-gray-700 focus:outline-none">
                <option>Choose Area</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                </select>
            </div>

            {/* Property Status */}
            <div className="border-r">
                <select className="w-full h-20 px-6 text-gray-700 focus:outline-none">
                <option>Property Status</option>
                <option>For Sale</option>
                <option>For Rent</option>
                </select>
            </div>

            {/* Property Type */}
            <div className="border-r">
                <select className="w-full h-20 px-6 text-gray-700 focus:outline-none">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
                </select>
            </div>

            {/* Button */}
            <button className="bg-[#800080] text-white font-semibold h-20 hover:bg-[#800080] transition">
                FIND NOW
            </button>

            </div>
        </div>
    </div>

  )
}
