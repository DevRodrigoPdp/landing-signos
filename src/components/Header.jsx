import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="bg-[#FDF6F0] text-[#333] shadow-sm sticky z-50 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-[#FF9E9E]">
            BabySigns
          </div>
  
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-[#FF9E9E] transition">Home</a>
            <a href="#about" className="hover:text-[#FF9E9E] transition">What is it?</a>
            <a href="#sessions" className="hover:text-[#FF9E9E] transition">Sessions</a>
            <a href="#instructor" className="hover:text-[#FF9E9E] transition">About</a>
            <a href="#contact" className="hover:text-[#FF9E9E] transition">Contact</a>
            <a href="#book" className="ml-4 bg-[#FF9E9E] text-white px-4 py-2 rounded-full hover:bg-[#ff7f7f] transition">
              Book a Session
            </a>
          </nav>
  
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#FDF6F0] px-4 pb-4 space-y-2">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">What is it?</a>
            <a href="#sessions" className="block">Sessions</a>
            <a href="#instructor" className="block">About</a>
            <a href="#contact" className="block">Contact</a>
            <a href="#book" className="block bg-[#FF9E9E] text-white px-4 py-2 rounded-full mt-2 text-center">
              Book a Session
            </a>
          </div>
        )}
      </header>
    );
}
