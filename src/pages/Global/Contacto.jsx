// src/pages/Contacto.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contacto = () => {
  return (
    <motion.div
      className="relative min-h-dvh flex items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        {/* Información de contacto */}
        <div className="bg-blue-600 text-white p-8 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Contáctame</h2>
          <p className="text-blue-100">
            ¿Tienes dudas o quieres un sistema personalizado? ¡Estoy para ayudarte!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+52 000 000 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>soporte@sistema-citas.mx</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Piedras Negras, Coahuila</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Envíame un mensaje</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Escribe tu mensaje..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacto;
