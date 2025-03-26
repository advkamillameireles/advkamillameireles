import React from 'react';
import { HeartPulse, FileCheck, Building2, Users } from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: 'Aposentadoria por Invalidez',
    description: 'Auxílio na obtenção do benefício para casos de incapacidade permanente.'
  },
  {
    icon: FileCheck,
    title: 'Revisão de Benefícios',
    description: 'Análise e correção de benefícios previdenciários concedidos.'
  },
  {
    icon: Building2,
    title: 'Auxílio-Doença',
    description: 'Assistência na solicitação de benefícios por incapacidade temporária.'
  },
  {
    icon: Users,
    title: 'Pensão por Morte',
    description: 'Orientação e suporte para dependentes na obtenção da pensão.'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-roboto font-bold text-center text-primary mb-12">
          Áreas de Atuação
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-roboto font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;