import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

emailjs.init("D2IXWgmNcUJV-wnOb");

export const Contacto = () => {
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");

    emailjs
      .send(
        "service_kcws7ea",
        "template_fz5wmit",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "D2IXWgmNcUJV-wnOb"
      )
      .then(() => {
        setFormState("success");
      })
      .catch((error) => {
        console.error("Email error:", error);
        setFormState("idle");
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };

  return (
    <motion.div
      id="contacto"
      className="w-full max-w-lg mx-auto p-3 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="p-8 rounded-2xl space-y-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
        transition={{ duration: 0.6 }}
      >
        {formState !== "success" && (
          <>
            <h2 className="text-3xl font-bold text-center text-[#ea4c89]">
              ¡Estamos aquí para ayudarte!
            </h2>
            <p className="text-center text-gray-500">
              Envía tus preguntas y consultas sobre el desarrollo comunicativo de tu bebé.
            </p>
          </>
        )}

        {formState === "success" ? (
          <motion.div
            className="text-center space-y-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-teal-500">
              ¡Gracias por tu mensaje!
            </h3>
            <p className="text-gray-400">
              Nos pondremos en contacto contigo pronto.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[#ea4c89] font-medium flex items-center gap-2"
              >
                <User className="h-5 w-5 text-[#ea4c89]" /> Nombre completo
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre del padre/madre o tutor"
                required
                className="w-full p-3 border border-[#ea4c89] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[#ea4c89] font-medium flex items-center gap-2"
              >
                <Mail className="h-5 w-5 text-[#ea4c89]" /> Correo electrónico
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="w-full p-3 border border-[#ea4c89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea4c89]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[#ea4c89] font-medium flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5 text-[#ea4c89]" /> Tu mensaje
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu bebé y cómo podemos ayudarte..."
                required
                className="w-full p-3 border border-[#ea4c89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea4c89] min-h-[120px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={formState === "submitting"}
              className={`btn-contacto ${formState === "submitting" ? "bg-gray-400 cursor-not-allowed" : ""}`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {formState === "submitting" ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};
