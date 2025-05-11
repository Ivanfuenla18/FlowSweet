import React from "react";

export const Footer = () => {
  return (
    <footer className="bottom-0 h-auto p-5 bg-greeen font-fuen">
      <h1 className="mb-2 text-xl text-center text-white">
        FlowSweet las mejores flores para ti y tu familia
      </h1>
      <div className="grid justify-center grid-cols-1 md:grid-cols-4 md:place-items-center">
        <ul>
          <li>
            <a href="" className="text-xl text-white">
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Politica privacidad
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Cookies
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Contacta con nosotros
            </a>
          </li>
        </ul>
        <ul>
          <a href="" className="text-xl text-white">
            Catalogo
          </a>
          <li>
            <a href="" className="hover:text-white">
              Rosas
            </a>
          </li>

          <li>
            <a href="" className="hover:text-white">
              Ramos
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Lirios
            </a>
          </li>
        </ul>
        <ul>
          <li className="text-xl text-white">Redes sociales</li>
          <li>
            <a href="" className="hover:text-white">
              Facebook
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Rosas
            </a>
          </li>
          <a href="" className="hover:text-white">
            Instagram
          </a>

          <li>
            <a href="" className="hover:text-white">
              Twitter
            </a>
          </li>
        </ul>
        <ul>
          <li className="text-xl text-white">Informacion de la tienda</li>
          <li>Flowseet floristeria</li>
          <li className="text-xl text-white">Llamanos:</li>
          <li>
            {" "}
            <a href="" className="hover:text-white">
              +34 915 548 364
            </a>
          </li>
          <li className="text-xl text-white">Email</li>
          <li>
            {" "}
            <a href="" className="hover:text-white">
              FlowSweet@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-2 text-center text-white">
        @2025-FlowSweet | Floristeria en Fuenlabrada
      </div>
    </footer>
  );
};
