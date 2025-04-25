import React from 'react';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20" />
        
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-30" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,100 C300,20 600,180 1200,100 L1200,200 L0,200 Z"
            className="fill-blue-200 dark:fill-blue-800/30"
          />
          <path
            d="M0,120 C500,60 700,180 1200,120 L1200,200 L0,200 Z"
            className="fill-blue-300 dark:fill-blue-700/30"
          />
          <path
            d="M0,150 C400,100 800,180 1200,150 L1200,200 L0,200 Z"
            className="fill-blue-400 dark:fill-blue-600/30"
          />
        </svg>
      </div>

      {/* Contenido del footer (puedes agregar enlaces, texto o información aquí) */}
      <div className="relative z-10 text-center py-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Baby Sign. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
