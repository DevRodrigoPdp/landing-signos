export const Header = () => {
    return (
      <header className=" text-[#669EA5] sticky z-50 mt-3 ">
        <div className="px-4 py-4 flex items-center justify-around">
          {/* Logo / Brand */}
          <div className="text-4xl font-bold text-[#445663]">
            Patricia Puerta
          </div>
  
          {/* Desktop Nav */}
          <nav className=" md:flex space-x-6 items-center border-none  rounded-full p-3">
            <a href="#home"  class="sesion-btn" className="hover:text-[#37595e] transition">Inicio</a>
            <a href="#about"  class="sesion-btn" className="hover:text-[#37595e] transition">¿Que es el Baby Sign?</a>
            <a href="#sessions"  class="sesion-btn" className="hover:text-[#37595e] transition">Formaciones</a>
            <a href="#instructor"  class="sesion-btn" className="hover:text-[#37595e] transition">Sobre mí</a>
            <a href="#contact" className="hover:text-[#37595e] transition">Contacto</a>
            <a href="#book" className="ml-4 bg-[#37595e] text-white px-4 py-2 rounded-full hover:bg-[#65949b] transition">
              Reserva tu curso
            </a>
          </nav>
        </div>
     </header>
    );
}
