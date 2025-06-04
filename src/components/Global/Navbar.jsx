import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos opcionales

const links = [
  { name: "Inicio", path: "/" },
  { name: "Planes", path: "/planes" },
  // { name: "Características", path: "/caracteristicas" },
  { name: "Contacto", path: "/contacto" },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow shadow-blue-600 px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">AgendaClinic</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-2 bg-gray-100 rounded-full p-1 relative">
        {links.map((link) => {
          const isActive = currentPath === link.path;
          const isHovered = hovered === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              onMouseEnter={() => setHovered(link.path)}
              onMouseLeave={() => setHovered(null)}
              className={`relative px-4 py-2 rounded-full z-10 transition-all duration-300 font-medium
                ${
                  isActive
                    ? "text-white"
                    : isHovered
                    ? "text-blue-700"
                    : "text-gray-700"
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              {(isActive || isHovered) && (
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive ? "bg-blue-600" : "bg-blue-100"
                  }`}
                ></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Auth Buttons (Always visible) */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/login" className="text-blue-600 hover:underline">
          Iniciar sesión
        </Link>
        <Link
          to="/registro"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Prueba gratis
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-2 z-50 md:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg px-4 py-2 rounded-md transition ${
                currentPath === link.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="text-blue-600 hover:underline">
            Iniciar sesión
          </Link>
          <Link
            to="/registro"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Empieza gratis
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
