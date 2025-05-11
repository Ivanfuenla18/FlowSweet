import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 p-3 md:grid md:grid-cols-2 bg-greeen font-fuen">
      {/* Contenedor del logo y botón */}
      <div className="flex items-center justify-between">
        <Link
          className="flex items-center text-xl text-center text-white hover:text-gray-600 underline-hover"
          to="/"
        >
          <img src="icono.png" alt="img" />
          FlowSweet
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Menú */}
      <div
        className={`transition-all duration-300 md:flex md:justify-end md:space-x-4 text-white ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        } md:max-h-full md:opacity-100 md:mt-0`}
      >
        <Link to="/" className="block px-4 hover:text-gray-600 underline-hover">
          Inicio
        </Link>
        <Link
          to="/acerca"
          className="block px-4 hover:text-gray-600 underline-hover"
        >
          Acerca
        </Link>
        <Link
          to="/contacto"
          className="block px-4 hover:text-gray-600 underline-hover"
        >
          Contacto
        </Link>
        <Link
          to="/perfil"
          className="block px-4 hover:text-gray-600 underline-hover"
        >
          <img src="usuario.png" alt="Usuario" />
        </Link>
      </div>
    </nav>
  );
};
