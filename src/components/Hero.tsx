import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-pattern text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-roboto font-bold mb-6">
            Direito Previdenciário com Excelência
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Atendimento personalizado para garantir seus direitos
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;