import fotoPerfil from '../images/foto-perfil.png'

export const SobreElProfesional = () => {
  return (
    <section className="w-full py-20 bg-[#F3F4F6]">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center md:mr-25">
          <img
            src={fotoPerfil}
            alt="Patricia Puerta del Pozo"
            className="w-full md:w-[325px] md:h-[350px] object-cover rounded-lg mb-4 md:mb-0"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#474747] mb-4">Sobre Patricia Puerta del Pozo</h1>
          <p className="text-lg text-[#656c7c] mb-6">
            Patricia Puerta del Pozo es una logopeda altamente capacitada y asesora en signos para bebés, con una pasión
            por ayudar a los más pequeños a desarrollar sus habilidades comunicativas de manera temprana.
          </p>

          <p className="text-base text-[#474747] mb-6">
            A lo largo de su carrera, Patricia ha trabajado con numerosas familias, utilizando el método de Baby Sign para
            facilitar la comunicación de los niños antes de que puedan hablar. Con un enfoque individualizado y empático,
            busca siempre adaptar las herramientas a las necesidades de cada niño y su familia, ayudando a crear un ambiente
            inclusivo y respetuoso.
          </p>

          <h2 className="text-2xl font-semibold text-[#474747] mb-4">Metodología y Enfoque</h2>
          <p className="text-base text-[#656c7c] mb-6">
            El enfoque de Patricia se basa en el respeto al ritmo y las necesidades de cada bebé. Utiliza signos fáciles y
            comprensibles que los niños pueden aprender a imitar, permitiéndoles expresar deseos y necesidades sin la
            frustración de no ser comprendidos.
          </p>

          <p className="text-base text-[#656c7c] mb-6">
            A través de sesiones personalizadas, Patricia enseña a los padres cómo introducir los signos en su vida diaria,
            convirtiendo la comunicación en un proceso natural y divertido. El objetivo es reducir la frustración y aumentar
            la satisfacción tanto de los bebés como de sus padres, creando una conexión más fuerte y armónica en el hogar.
          </p>

          <h2 className="text-2xl font-semibold text-[#474747] mb-4">Experiencia Profesional</h2>
          <p className="text-base text-[#656c7c] mb-6">
            Con más de 10 años de experiencia en el campo de la logopedia y la asesoría en signos para bebés, Patricia ha
            trabajado con numerosas familias y niños, logrando resultados muy positivos en la mejora de la comunicación
            temprana. Su formación constante y su enfoque práctico le permiten estar siempre a la vanguardia de las mejores
            técnicas y métodos disponibles.
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://www.instagram.com/soypatriciapuerta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea4c89] hover:text-[#ce3b73] transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:patricia@example.com"
              className="text-[#ea4c89] hover:text-[#ce3b73] transition-colors"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
