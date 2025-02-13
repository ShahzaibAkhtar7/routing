import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Menu Section */}
        <ul className={`flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <li>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
