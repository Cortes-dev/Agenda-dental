// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import Home from "./pages/Global/Home";
import Caracteristicas from "./pages/Global/Caracteristicas";
import Planes from "./pages/Global/Planes";
import Contacto from "./pages/Global/Contacto";
import AnimatedPage from "./components/Global/AnimatedPage";
import Navbar from "./components/Global/Navbar";

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster position="top-right" expand={false} richColors />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/caracteristicas" element={<AnimatedPage><Caracteristicas /></AnimatedPage>} />
          <Route path="/planes" element={<AnimatedPage><Planes /></AnimatedPage>} />
          <Route path="/contacto" element={<AnimatedPage><Contacto /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
