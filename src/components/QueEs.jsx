import React from "react";
import ojos from "../images/icono-ojos.png";
import manos from "../images/icono-manos.png";
import dialogo from "../images/icono-dialogo.png";

export const QueEs = () => {
  return (
    <section id="about" className="bg-[#FFF9F4] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#FF9E9E] mb-4">¿Cómo funciona el Baby Sign?</h2>
        <p className="text-md text-[#666] max-w-xl mx-auto mb-12">
          Aprender a signar con tu bebé es más fácil de lo que piensas. Aquí te mostramos cómo lo hacemos en tres pasos sencillos:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <img src={ojos} alt="Observa" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#FF9E9E] mb-2">1. Observa</h3>
            <p className="text-sm text-[#555]">
              Aprendemos a detectar momentos clave: cuando tiene hambre, sueño, quiere jugar o necesita cariño.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <img src={manos} alt="Signa" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00BFA6] mb-2">2. Signa</h3>
            <p className="text-sm text-[#555]">
              Usamos gestos simples acompañando nuestras palabras. Repetimos con amor, sin presión.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <img src={dialogo} alt="Conecta" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#FFC857] mb-2">3. Conecta</h3>
            <p className="text-sm text-[#555]">
              Tu peque empieza a signar. Se siente comprendido, reduce su frustración... y nace la magia de comunicarse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
