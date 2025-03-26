import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8" />
              <span className="ml-2 text-xl font-roboto font-bold">
                Direito Previdenciário
              </span>
            </Link>
            <p className="mt-4">
              Dra. Kamilla Meireles
              <br />
              OAB/ms 24.643
            </p>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/#sobre" className="hover:text-gray-300">Sobre</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/#servicos" className="hover:text-gray-300">Serviços</Link></li>
              <li><Link to="/#contato" className="hover:text-gray-300">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold mb-4">Contato</h3>
            <p>
              Av. Raquel de Queiroz, 1468 <br /> 1º Andar, sala 31 - Galeria Aero Rancho
              <br />
              Campo Grande - MS
              <br />
              Tel: (67) 99243-9056
              <br />
              adv.kamillameireles@gmail.com
            </p>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18dzX4VmJA/" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#https://www.instagram.com/kamillameireles.adv/" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/kamilla-meireles-garcia-778812191/" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>© 2025 Escritório de Direito Kamilla Meireles. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;