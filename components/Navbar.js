"use client";
import { use, useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, X, Menu } from "lucide-react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

    

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#800080] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <span>info@mezutech.com</span>
            <span>15/A, Nest Tower, NYC</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white px-3 py-1 rounded-md text-[#800080] hover:bg-black hover:text-white transition">
              <Link href="/contact">Get A Quote</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 relative">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-[#800080]">🏠</span>
            <span><Link href="/">MezuTech</Link></span>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-[#800080]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#800080]">
              About
            </Link>
            <Link href="/property" className="hover:text-[#800080]">
              Property
            </Link>
            <Link href="/blog" className="hover:text-[#800080]">
              Blog
            </Link>
            
            <Link href="/contact" className="hover:text-[#800080]">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 border rounded-md">
              <Search size={18} />
            </button>
            <button className="p-2 border rounded-md">
              <User size={18} />
            </button>
            <button className="p-2 border rounded-md relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-[#800080] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* Hamburger menu button (mobile only) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 border rounded-md ml-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile menu panel */}
          <div
            className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* Close button */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <span className="text-[#800080]">🏠</span>
                <span>MezuTech</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search input */}
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#800080]"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Menu items */}
            <nav className="flex flex-col gap-4 p-4 text-gray-600 font-medium">
              {["Home", "About", "Property", "Blog", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="/{item}"
                    className="flex justify-between items-center hover:text-[#800080]"
                    onClick={() => setMenuOpen(false)} // close menu on link click
                  >
                    {item}
                    <span className="text-xl font-bold">+</span>
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Overlay behind mobile menu */}
          {menuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
            />
          )}
        </div>
      </header>
    </>
  );
}
