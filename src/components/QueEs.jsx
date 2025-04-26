import { Eye, Hand, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const QueEs = () => {
  return (
    <section id="queEs"className=" py-20 px-6 text-center" >
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#f58a8a] mb-12">
        ¿Cómo funciona el Baby Sign?
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Paso 1 */}
        <motion.div
          className="flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Esto asegura que la animación solo ocurra una vez
        >
          <div className="bg-[#ffe4e1] text-[#f58a8a] p-4 rounded-full mb-4">
            <Eye size={40} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-[#474747]">Observa</h3>
          <p className="text-gray-600 mt-2">
            Detecta señales del bebé y comprende sus necesidades básicas.
          </p>
        </motion.div>

        {/* Paso 2 */}
        <motion.div
          className="flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }} // Asegura animación solo una vez
        >
          <div className="bg-[#ffe4e1] text-[#f58a8a] p-4 rounded-full mb-4">
            <Hand size={40} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-[#474747]">Signa</h3>
          <p className="text-gray-600 mt-2">
            Acompaña tus palabras con gestos y repítelos con frecuencia.
          </p>
        </motion.div>

        {/* Paso 3 */}
        <motion.div
          className="flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }} // Asegura animación solo una vez
        >
          <div className="bg-[#ffe4e1] text-[#f58a8a] p-4 rounded-full mb-4">
            <Heart size={40} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-[#474747]">Conecta</h3>
          <p className="text-[#474747] mt-2">
            Tu bebé empieza a responder con gestos y mejora la comunicación.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
