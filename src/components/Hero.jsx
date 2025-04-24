import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-12 md:p-40" // Ajustes para mejor espaciado en móvil
    >
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#ec7f7f]"
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
            <button className="learn-more">
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
