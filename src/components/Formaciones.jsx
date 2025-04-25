import { motion } from 'framer-motion';
import online from '../images/babysign-online.png';
import presencial from '../images/babysign-presencial.png';

export const Formaciones = () => {
  return (
    <section id="formaciones" className="w-full py-20 min-h-screen bg-[#F9F9F9]">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#474747] mb-4">Cursos de Baby Sign</h2>
          <p className="text-lg text-[#656c7c]">Aprende a comunicarte con tu bebé antes de que hable. Nuestros cursos están diseñados para padres y profesionales que deseen incorporar signos en la vida diaria.</p>
        </div>

        {/* Curso Online */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-12 w-full justify-center items-center md:items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-lg flex justify-center items-center bg-white shadow-md">
            <img src={online} alt="Curso Online Baby Sign" className="rounded-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#ea4c89] mb-4">Curso Online</h3>
            <p className="text-sm text-[#656c7c] mt-2 mb-6">Accede a nuestro curso en línea desde cualquier lugar y aprende a tu propio ritmo, con materiales diseñados para facilitar el aprendizaje de signos con tu bebé.</p>
            <div className="text-3xl font-bold text-[#ea4c89] mb-4"> 49€ <span className="text-base font-medium">/ curso completo</span></div>
            <ul className="text-sm space-y-2 mb-6">
              <li>Acceso inmediato</li>
              <li>Materiales descargables</li>
              <li>Soporte por email</li>
              <li>Certificado al completar</li>
            </ul>
            <button className="animated-button">Inscríbete ahora</button>
          </div>
        </motion.div>

        {/* Curso Presencial */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-12 w-full justify-center items-center md:items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-lg flex justify-center items-center bg-white shadow-md">
            <img src={presencial} alt="Curso Presencial Baby Sign" className="rounded-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#ea4c89] mb-4">Curso Presencial</h3>
            <p className="text-sm text-[#656c7c] mt-2 mb-6">Participa en nuestras sesiones presenciales y recibe atención personalizada para aprender signos y mejorar la comunicación con tu bebé.</p>
            <div className="text-3xl font-bold text-[#ea4c89] mb-4">99€ <span className="text-base font-medium">/ curso completo</span></div>
            <ul className="text-sm space-y-2 mb-6">
              <li>Sesiones en vivo</li>
              <li>Acceso a grupo privado de padres</li>
              <li>Materiales para llevar a casa</li>
              <li>Certificado de finalización</li>
            </ul>
            <button className="animated-button">Reserva tu plaza</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
