import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src="/images/w7_logo.png" alt="Logo" className="h-8" />
        </Link>

        {/* Menu para desktop */}
        <div className="hidden md:flex gap-8">
          <Link to="#solucoes" className="text-gray-600 hover:text-gray-900">
            O QUE FAZEMOS
          </Link>
          <Link to="#clientes" className="text-gray-600 hover:text-gray-900">
            CLIENTES
          </Link>
          <Link to="#contato" className="text-gray-600 hover:text-gray-900">
            CONTATO
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="#solucoes"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              O QUE FAZEMOS
            </Link>
            <Link
              to="#clientes"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              CLIENTES
            </Link>
            <Link
              to="#contato"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              CONTATO
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;