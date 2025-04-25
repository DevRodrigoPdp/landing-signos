"use client"

import { useState } from "react"
import { Check, Mail, MessageSquare, Send, User } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulación de envío de formulario
    setTimeout(() => {
      setFormState("success")
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setFormState("idle")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="text-center space-y-2 pb-6 border-b border-pink-100">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-400">
            ¡Contáctanos! Estamos aquí para ayudarte
          </h2>
          <p className="text-base text-blue-300">
            Envía tus preguntas y consultas sobre el desarrollo comunicativo de tu bebé
          </p>
        </div>

        <div className="pt-6">
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
              <div className="h-16 w-16 rounded-full bg-mint-100 flex items-center justify-center" style={{ backgroundColor: "#d1f5e0" }}>
                <Check className="h-8 w-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold text-teal-400">¡Gracias por tu mensaje!</h3>
              <p className="text-blue-300">
                Nos pondremos en contacto contigo muy pronto para ayudarte con el desarrollo comunicativo de tu bebé.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-blue-400 font-medium flex items-center gap-2">
                  <User className="h-4 w-4" /> Nombre completo
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre del padre/madre o tutor"
                    required
                    className="pl-3 border-blue-200 rounded-lg focus:border-blue-300 focus:ring focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-blue-400 font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Correo electrónico
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="pl-3 border-blue-200 rounded-lg focus:border-blue-300 focus:ring focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-blue-400 font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu bebé y cómo podemos ayudarte..."
                  required
                  className="min-h-[120px] border-blue-200 rounded-lg focus:border-blue-300 focus:ring focus:ring-blue-100 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {formState === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar Mensaje <Send className="h-4 w-4" />
                  </span>
                )}
              </button>

              <p className="text-center text-sm text-pink-300 italic pt-2">
                Nos encantaría conocer más sobre tu bebé y cómo podemos ayudar en su desarrollo comunicativo.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute -z-10 top-10 left-10 w-20 h-20 rounded-full bg-yellow-100 opacity-40"></div>
      <div className="absolute -z-10 bottom-10 right-10 w-32 h-32 rounded-full bg-blue-100 opacity-40"></div>
    </div>
  )
}
