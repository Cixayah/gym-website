'use client'

import HeroCarousel from './components/HeroCarousel';
import { Dumbbell, Users, Clock /* Mail, Phone, MapPin */ } from 'lucide-react';
import Image from 'next/image';

// Define the type for plan object
interface Plan {
  title: string;
  price: string;
  features: string[];
}

const benefits = [
  {
    title: "Equipamentos Modernos",
    titleColor: "text-gray-100",
    description: "Academia completa com todos os equipamentos necessários",
    icon: <Dumbbell className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Profissionais Qualificados",
    titleColor: "text-gray-100",
    description: "Equipe de instrutores especializados para te auxiliar",
    icon: <Users className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Horário Flexível",
    titleColor: "text-gray-100",
    description: "Academia aberta de segunda à sábado, inclusive em feriados",
    icon: <Clock className="w-6 h-6 text-red-600" />,
  },
];

const plans: Plan[] = [
  {
    title: "Plano FIT",
    price: "80,00",
    features: [
      "Segunda à sábado",
      "Apenas das 09:00 às 16:00",
    ],
  },
  {
    title: "Plano Econômico",
    price: "80,00",
    features: [
      "3x por semana podendo escolher os dias",
      "De segunda à sexta das 5:30 às 21:00",
      "Aos sábados 09:00 às 12:00 e 15:00 às 17:00",
    ],
  },
  {
    title: "Plano Extreme",
    price: "90,00",
    features: [
      "De segunda à sábado",
      "De segunda à sexta das 5:30 às 21:00",
      "Aos sábados 09:00 às 12:00 e 15:00 às 17:00",
    ],
  },
];

/*const contactInfo = [
  {
    title: "E-mail",
    content: "contato@extremefitness.com.br",
    icon: <Mail className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Telefone",
    content: "(11) 99999-9999",
    icon: <Phone className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Endereço",
    content: "Rua da Academia, 123 - São Paulo, SP",
    icon: <MapPin className="w-6 h-6 text-red-600" />,
  },
];
*/
export default function Home() {
  const handleWhatsAppClick = (plan: Plan) => {
    const message = `Olá, vim pelo site e gostaria de assinar o plano ${plan.title} de R$ ${plan.price}`;
    const whatsappUrl = `https://wa.me/5517997881068?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <HeroCarousel />

      <section className="py-16" id="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher a Extreme Fitness?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-lg bg-blue-950"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-100">
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${benefit.titleColor}`}>{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16  bg-blue-950 rounded-lg" id="plans" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Nossos Planos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.title} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-blue-950">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-4 text-blue-950">R$ {plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleWhatsAppClick(plan)}
                  className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors mt-auto"
                >
                  Assinar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a Extreme Fitness</h2>
              <p className="mb-4">
                Há mais de 10 anos no mercado, a Extreme Fitness é referência em qualidade
                e resultados. Nossa missão é transformar vidas através do esporte e bem-estar.
              </p>
              <p>
                Contamos com uma equipe altamente qualificada e instalações modernas
                para proporcionar a melhor experiência aos nossos alunos.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg">
              <Image
                src="https://i.ibb.co/ZW8RhpD/DOCTYPE-html-html-Mirrored-from-www-gymcenter-com-br-by-HTTrack-Website-Copier3-x-XR-CO-2014-Fri-16.png"
                alt="Academia"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-100">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
