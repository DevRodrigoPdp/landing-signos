import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white/90"); // Color inicial

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          switch (id) {
            case "hero":
              setBgColor("bg-white/90");
              break;
            case "about":
              setBgColor("bg-[#ffe6e9]");
              break;
            case "queEs":
              setBgColor("bg-[#fff0f5]");
              break;
            case "formaciones":
              setBgColor("bg-[#fdf3f4]");
              break;
            case "contacto":
              setBgColor("bg-[#fae3e7]");
              break;
            default:
              setBgColor("bg-white/90");
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`text-[#f0626c] sticky top-0 z-50 ${bgColor} backdrop-blur-md  transition-colors duration-500`}
    >
      <div className="px-4 py-4 flex items-center justify-between md:justify-around">
        <div className="text-4xl font-bold text-[#f0626c]">Patricia Puerta</div>

        <div className="md:hidden flex items-center">
          <button
            className="text-[#ec7f7f] focus:outline-none"
            onClick={toggleMenu}
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

        <nav className="hidden md:flex space-x-6 items-center border-none rounded-full p-3 font-bold">
          <a href="#about" className=" hover:underline transition">
            Sobre mí
          </a>
          <a href="#queEs" className="] hover:underline transition">
            ¿Qué es el Baby Sign?
          </a>
          <a href="#contacto" className=" hover:underline transition">
            Contacto
          </a>
          <a
            href="#formaciones"
            className="bg-[#f0626c] text-white rounded-full px-4 py-2 shadow-md "
          >
            Reserva tu curso
          </a>
        </nav>
      </div>

      <div
        className={`md:hidden bg-[#F3F4F6] w-full flex flex-col items-center py-4 space-y-4 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#home" className="hover:text-[#37595e] hover:underline transition">
          Inicio
        </a>
        <a href="#queEs" className="hover:text-[#37595e] hover:underline transition">
          ¿Qué es el Baby Sign?
        </a>
        <a href="#formaciones" className="hover:text-[#37595e] hover:underline transition">
          Formaciones
        </a>
        <a href="#about" className="hover:text-[#37595e] hover:underline transition">
          Sobre mí
        </a>
        <a href="#contact" className="hover:text-[#37595e] hover:underline transition">
          Contacto
        </a>
        <a
          href="#formaciones"
          className="ml-4 bg-[#f0626c] text-white px-4 py-2 rounded-full hover:bg-[#65949b] transition"
        >
          Reserva tu curso
        </a>
      </div>
    </header>
  );
};
