

export const Header = () => {


    return (
      <header className="bg-[#ff9e9e] text-[#FDF6F0] shadow-sm sticky z-50 rounded-xl mt-2 max-w-[1230px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-[#FDF6F0]">
            BabySigns
          </div>
  
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center border-none  p-0.5 rounded-2xl ">
            <a href="#home" className="hover:text-[#FDF6F0] transition">Home</a>
            <a href="#about" className="hover:text-[#FDF6F0] transition">What is it?</a>
            <a href="#sessions" className="hover:text-[#FDF6F0] transition">Sessions</a>
            <a href="#instructor" className="hover:text-[#FDF6F0] transition">About</a>
            <a href="#contact" className="hover:text-[#FDF6F0] transition">Contact</a>
            <a href="#book" className="ml-4 bg-[#FF9E9E] text-white px-4 py-2 rounded-full hover:bg-[#ff7f7f] transition">
              Book a Session
            </a>
          </nav>
        </div>
     </header>
    );
}
