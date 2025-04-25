import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado del menú al hacer clic
  };

  return (
    <header className="text-[#f0626c] sticky z-50 mt-3">
      <div className="px-4 py-4 flex items-center justify-between md:justify-around">
        {/* Logo / Brand */}
        <div className="text-4xl font-bold text-[#f0626c]">
          Patricia Puerta
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-[#ec7f7f] focus:outline-none"
            onClick={toggleMenu} // Al hacer clic, cambia el estado
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center border-none rounded-full p-3 font-bold">
          <a href="#home" className="hover:text-[#ffb6c1] transition">Inicio</a>
          <a href="#about" className="hover:text-[#ffb6c1] transition">¿Qué es el Baby Sign?</a>
          <a href="#about" className="hover:text-[#ffb6c1] transition">Sobre mí</a>
          <a href="#contact" className="hover:text-[#ffb6c1] transition">Contacto</a>
          <a href="#formaciones" className="bg-[#f0626c] text-white rounded-full px-4 py-2 shadow-md hover:bg-[#ffb6c1] transition">
            Reserva tu curso
          </a>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-[#F3F4F6] w-full flex flex-col items-center py-4 space-y-4 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`} // Condicional para mostrar/ocultar el menú
      >
        <a href="#home" className="hover:text-[#37595e] transition">Inicio</a>
        <a href="#about" className="hover:text-[#37595e] transition">¿Qué es el Baby Sign?</a>
        <a href="#formaciones" className="hover:text-[#37595e] transition">Formaciones</a>
        <a href="#about" className="hover:text-[#37595e] transition">Sobre mí</a>
        <a href="#contact" className="hover:text-[#37595e] transition">Contacto</a>
        <a href="#formaciones" className="ml-4 bg-[#37595e] text-white px-4 py-2 rounded-full hover:bg-[#65949b] transition">
          Reserva tu curso
        </a>
      </div>
    </header>
  );
};
