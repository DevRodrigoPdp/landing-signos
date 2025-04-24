export const Formaciones = () => {
  return (
    <section id="formaciones" className="py-24 bg-[#EDDADD] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#ec7f7f] mb-8">
          Nuestras Formaciones
        </h2>
        <p className="text-md text-[#666] mb-12">
          Aprende a comunicarte con tu bebé usando Baby Sign con nuestras
          formaciones online y presenciales, diseñadas por expertas.
        </p>

        <div className="space-y-8">
          {/* Formación Online */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#37595e] mb-4">
              Formación Online Baby Sign
            </h3>
            <p className="text-sm text-[#555] mb-6">
              Accede a nuestro curso online desde cualquier lugar.
            </p>
            <a
              href="https://www.hotmart.com/es/producto"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-button inline-block mx-auto w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">Acceder al curso</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </a>
          </div>

          {/* Formación Presencial */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#37595e] mb-4">
              Formación Presencial Baby Sign
            </h3>
            <p className="text-sm text-[#555] mb-6">
              Únete a nuestras sesiones presenciales en Madrid.
            </p>
            <a
              href="https://www.hotmart.com/es/producto"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-button inline-block mx-auto w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">Acceder al curso</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
