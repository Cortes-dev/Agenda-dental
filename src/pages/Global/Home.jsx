import { motion } from "framer-motion";
import img_cita_dental from "/img/header_v1.1.1.png";

const Home = () => {
  return (
    <main className="relative min-h-dvh flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between py-12 gap-10">
        {/* IZQUIERDA: Texto */}
        <div className="flex-1 text-center md:text-left px-4">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6"
          >
            Agenda Dental Profesional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 mb-6"
          >
            Controla tus citas, pacientes y agenda desde una plataforma moderna,
            intuitiva y hecha para clínicas dentales como la tuya.
          </motion.p>

          <motion.a
            href="/planes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg"
          >
            ¡Empieza ahora!
          </motion.a>
        </div>

        {/* DERECHA: Imagen animada */}
        <motion.div
          className="flex-1 flex justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={img_cita_dental}
            alt="Sistema de citas para dentistas"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
