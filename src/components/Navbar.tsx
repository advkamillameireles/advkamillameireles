import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu if open
    setIsOpen(false);

    // If we're not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // Find the element and scroll to it
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-roboto font-bold text-primary">
                Adovocacia Kamilla Meireles
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-gray-700 hover:text-primary"
            >
              Sobre
            </button>
            <Link to="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="text-gray-700 hover:text-primary"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-gray-700 hover:text-primary"
            >
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Sobre
              </button>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;