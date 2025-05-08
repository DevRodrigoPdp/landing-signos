const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-[#dbeafe] text-[#333] py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {currentYear}{" "}
            <a
              href="https://rpuerta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] hover:underline"
            >
              Hecho por Rodrigo
            </a>. Todos los derechos reservados.
          </p>
          <div className="mt-4 space-x-4 text-sm">
            <a href="#" className="text-[#3b82f6] hover:underline">
              Política de privacidad
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  