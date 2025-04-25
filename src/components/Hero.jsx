import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 py-12 md:p-40 overflow-hidden"
    >
      {/* Fondo SVG decorativo */}
      <div className="absolute inset-0 bg-white overflow-hidden z-0">
        <div className="absolute inset-0 opacity-[0.3]">
          <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <path
              d="M0,50 C100,100 200,0 300,50 C400,100 500,0 600,50 C700,100 800,0 900,50 C1000,100 1100,0 1200,50 V600 H0 Z"
              fill="url(#wave-gradient-1)"
            />
            <path
              d="M0,150 C100,200 200,100 300,150 C400,200 500,100 600,150 C700,200 800,100 900,150 C1000,200 1100,100 1200,150 V600 H0 Z"
              fill="url(#wave-gradient-2)"
            />
            <path
              d="M0,250 C100,300 200,200 300,250 C400,300 500,200 600,250 C700,300 800,200 900,250 C1000,300 1100,200 1200,250 V600 H0 Z"
              fill="url(#wave-gradient-3)"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#f0626c]"
          >
            Sus manos hablan antes que su voz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#333] mt-4"
          >
            Aprende a comunicarte con bebés, niñas y niños usando signos como
            apoyo del habla. Una herramienta poderosa para fortalecer el vínculo
            desde los primeros meses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-md text-[#666] mt-4"
          >
            Descubre nuestras formaciones online y presenciales, sesiones de
            consultoría y materiales diseñados por expertas para integrar los
            signos en el día a día de manera sencilla y natural.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start mt-6"
          >
            <button
              onClick={() => {
                const section = document.getElementById("formaciones");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="learn-more"
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Empieza hoy</span>
            </button>
          </motion.div>
        </div>

        {/* Imagen */}
        <div className="flex-1 mt-8 md:mt-0">
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src="https://meninos.org/wp-content/uploads/2024/02/Post-2-1.jpg"
            alt="Imagen Baby Sign"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
