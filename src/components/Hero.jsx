import React from "react";

export const Hero = () => {
  return (
    <section id="home" className="bg-[#FFF9F4] py-24">
      <div className="max-w-5xl mx-auto px-6 grid gap-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#ec7f7f]">
          Sus manos hablan antes que su voz
        </h1>

        <p className="text-lg text-[#333]">
          Aprende a comunicarte con bebés, niñas y niños usando signos como
          apoyo del habla. Una herramienta poderosa para fortalecer el vínculo
          desde los primeros meses.
        </p>

        <p className="text-md text-[#666] max-w-3xl mx-auto">
          Descubre nuestras formaciones online y presenciales, sesiones de
          consultoría y materiales diseñados por expertas para integrar los
          signos en el día a día de manera sencilla y natural.
        </p>

        <div className="flex justify-center">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text ">Empieza hoy</span>
          </button>
        </div>
      </div>
    </section>
  );
};
