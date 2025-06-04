import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { handleCheckout } from "../../functions/Checkout";



const planes = [
  {
    nombre: "Plan Plus",
    precio: "$299 MXN / mes",
    beneficios: [
      "Agendación ilimitada de citas",
      "Recordatorios por WhatsApp",
      "Página personalizada con URL única",
      "Historial clínico básico",
      "Acceso desde cualquier dispositivo",
    ],
    destacado: false,
  },
  {
    nombre: "Plan Pro",
    precio: "$599 MXN / mes",
    beneficios: [
      "Todo lo del Plan Plus",
      "Control de pagos y adeudos",
      "Agenda recurrente para pacientes",
      "Galería de imágenes clínicas",
      "Gestión de tratamientos y materiales",
      "Soporte prioritario",
    ],
    destacado: true,
  },
];

const Planes = () => {


  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 lg:px-32 relative mt-15">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-green-700"
      >
        Elige el plan ideal para tu consultorio dental
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2">
        {planes.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl shadow-xl border-2 p-8 bg-white transition-all duration-200 hover:shadow-2xl ${
              plan.destacado ? "border-green-600" : "border-gray-200"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <Sparkles className="text-yellow-400" /> {plan.nombre}
            </h2>
            <p className="text-xl font-semibold text-green-600 mb-6">
              {plan.precio}
            </p>
            <ul className="space-y-3">
              {plan.beneficios.map((beneficio, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  {beneficio}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <button
                onClick={() => handleCheckout(plan)}
                className={`px-6 py-3 rounded-xl font-semibold text-white transition ${
                  plan.destacado
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-700 hover:bg-gray-800"
                }`}
              >
                Elegir {plan.nombre}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de personalización */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 bg-white p-10 rounded-2xl shadow-lg border border-gray-200"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Necesitas algo más personalizado?
        </h3>
        <p className="text-gray-600 mb-4">
          Podemos ayudarte a crear un sistema de agendación completamente
          adaptado a tu consultorio, incluyendo funciones como:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Formularios de contacto inteligentes</li>
          <li>Agenda compartida por especialidades</li>
          <li>Integración con Google Calendar y más</li>
        </ul>
        <p className="text-gray-600 mb-6">
          Escríbeme por WhatsApp o correo electrónico para cotizar tu proyecto
          personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5210000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 text-center"
          >
            Enviar mensaje por WhatsApp
          </a>
          <a
            href="mailto:diego.tudominio@gmail.com"
            className="bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 text-center"
          >
            Enviar correo electrónico
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Planes;
