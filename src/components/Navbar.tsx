
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src="/images/w7_logo.png" alt="" />
        </Link>
        <div className="flex gap-8">
          <Link to="#solucoes" className="text-gray-600 hover:text-gray-900">O QUE FAZEMOS</Link>
          <Link to="#clientes" className="text-gray-600 hover:text-gray-900">CLIENTES</Link>
          <Link to="#contato" className="text-gray-600 hover:text-gray-900">CONTATO</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
