import { Combine, HouseIcon, ReceiptEuroIcon } from "lucide-react";


export default function Service() {
  
    return (
     <section className="w-full bg-[#F2F6F7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#F3E8F5] text-[#800080] text-sm font-medium px-4 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Main Focus
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="bg-white rounded-lg p-10 text-center transition relativeshadow-md hover:shadow-xl" >
            {/* Icon */}
            <div className="flex justify-center mb-6">
                <div className="bg-[#F3E8F5] text-[#800080] p-6 rounded-md">
                <HouseIcon className="w-8 h-8" />
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Buy House Now
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Over 1 million+ homes for sale available on the website, we can match
                you with a house you will want to call home.
            </p>

            <a href="#" className="font-medium inline-flex items-center gap-2 text-gray-400 hover:text-[#800080]">
                Find A Home →
            </a>
            </div>
            <div className="bg-white rounded-lg p-10 text-center transition relativeshadow-md hover:shadow-xl" >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#F3E8F5] text-[#800080] p-6 rounded-md">
                    <ReceiptEuroIcon className="w-8 h-8" />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                   Sell House Now
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Over 1 million+ homes for sale available on the website, we can match
                    you with a house you will want to call home.
                </p>

                <a href="#" className="font-medium inline-flex items-center gap-2 text-gray-400 hover:text-[#800080]">
                    Find A Home →
                </a>
            </div>
            <div className="bg-white rounded-lg p-10 text-center transition relativeshadow-md hover:shadow-xl" >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#F3E8F5] text-[#800080] p-6 rounded-md">
                    <Combine className="w-8 h-8" />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Rent your House Now
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Over 1 million+ homes for sale available on the website, we can match
                    you with a house you will want to call home.
                </p>

                <a href="#" className="font-medium inline-flex items-center gap-2 text-gray-400 hover:text-[#800080]">
                    Find A Home →
                </a>
            </div>
        </div>
      </div>
    </section>

    )
  }

