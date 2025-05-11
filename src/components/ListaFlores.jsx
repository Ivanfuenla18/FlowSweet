import React from "react";
import flores from "../data/flores.json";

export default function ListaFlores() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 font-fuen">
      {flores.map((flor) => (
        <div
          key={flor.id}
          className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow"
        >
          <img
            src={flor.imagen}
            alt={flor.nombre}
            className="object-contain w-full h-48 rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">{flor.nombre}</h2>
          <p className="text-sm italic text-gray-600">
            {flor.nombre_cientifico}
          </p>
          <p className="mt-2 text-gray-700">{flor.descripcion}</p>
          <p className="mt-2 font-bold text-green-700">${flor.precio}</p>
          <button className="px-4 py-2 mt-4 text-white transition-all rounded bg-greeen hover:bg-pink-700">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}
