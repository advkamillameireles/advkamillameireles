import React from 'react';
import kamillaadv from "../assets/kamilla-adv.jpeg"
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={ kamillaadv }
              alt="Advogada"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-roboto font-bold text-primary mb-6">
              Dra. Kamilla Meireles
            </h2>
            <p className="text-gray-700 mb-6">
              Com mais de 15 anos de experiência em Direito Previdenciário, 
              dedicamos nossa prática à defesa dos direitos previdenciários 
              dos nossos clientes, oferecendo soluções personalizadas e 
              eficientes para cada caso.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Pós-graduada em Direito Previdenciário
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Especialista em Direito Previdenciário
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Membro da Comissão de Direito Previdenciário OAB/SP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;