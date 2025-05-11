import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Social } from "./components/Social";
import Carrusel from "./components/Carrusel";
import ListaFlores from "./components/ListaFlores";

import Inicio from "./pages/Inicio";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";

function App() {
  return (
    <>
      {/* Este será el contenedor común para el Header y Social */}
      <Social />
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/perfil"
          element={<div className="p-4">Perfil de Usuario</div>}
        />
      </Routes>

      {/* Pie de página común para todas las rutas */}
      <Footer />
    </>
  );
}

export default App;
