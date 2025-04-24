import { motion } from "framer-motion";

export const QueEs = () => {
  const pasos = [
    {
      titulo: "Observa",
      descripcion: "Detecta señales del bebé y comprende sus necesidades básicas.",
    },
    {
      titulo: "Signa",
      descripcion: "Acompaña tus palabras con gestos y repítelos con frecuencia.",
    },
    {
      titulo: "Conecta",
      descripcion: "Tu bebé empieza a responder con gestos y mejora la comunicación.",
    },
  ];

  return (
    <section id="about" className="bg-[#FFF9F4] py-24 mt-35">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-[#FF9E9E] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Cómo funciona el Baby Sign?
        </motion.h2>

        <div className="border-l-4 border-[#FF9E9E] pl-6 space-y-10">
          {pasos.map((paso, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#37595e]">{paso.titulo}</h3>
              <p className="text-sm text-[#555]">{paso.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
