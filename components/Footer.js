import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
         <div className="max-w-7xl mx-auto px-6 mb-6 mt-[-100] bg-[#800080] md:py-[40] py-5 md:mx-20">
            <div className="flex flex-col md:flex-row justify-between items-center md:px-5">
                <div>
                    <h4 className="text-white font-bold md:text-3xl">Looking for a dream home?</h4>
                    <p>We can help you realize your dream of a new home</p>
                </div>
                <button className="mt-4 md:mt-0 bg-white text-[#800080] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                    Contact Us
                </button>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-white">MezuTech Real Estate Co.</h2>
                    <p className="text-sm">123 Main Street, Anytown, USA</p>
                    <p className="text-sm">Email: info@mezutech.com</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">    
            <p className="text-sm">
                &copy; {new Date().getFullYear()} MezuTech Real Estate Co. All rights reserved.
            </p>
        </div>
    </footer>
  );
}