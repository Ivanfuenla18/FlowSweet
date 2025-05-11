import React from "react";

export const Social = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 p-2 text-sm md:flex-row md:justify-around md:h-4">
      <div className="flex items-center gap-1 text-black">
        <img src="reloj.png" className="w-4 h-4" alt="Horario" />
        <span>L-S 9:00-21:00 y D 9:00-14:00</span>
      </div>

      <div className="flex items-center gap-3">
        <a href="">
          <img src="facebook.png" className="w-4 h-4" alt="Facebook" />
        </a>
        <a href="">
          <img src="x.png" className="w-4 h-4" alt="X" />
        </a>
        <a href="">
          <img src="instagram.png" className="w-4 h-4" alt="Instagram" />
        </a>
      </div>

      <div className="flex items-center gap-1">
        <a href="">
          <img src="telefono.png" className="w-4 h-4" alt="Teléfono" />
        </a>
        <span>+34 915 548 364</span>
      </div>
    </section>
  );
};
