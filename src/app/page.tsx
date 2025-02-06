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
    title: "Equipamentos",
    titleColor: "text-gray-100",
    description: "Academia completa com todos os equipamentos necessários",
    icon: <Dumbbell className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Profissionais Qualificados",
    titleColor: "text-gray-100",
    description: "Equipe de instrutores especializados para te auxiliar",
    icon: <Users className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Horário Flexível",
    titleColor: "text-gray-100",
    description: "Academia aberta de segunda à sábado, inclusive em feriados",
    icon: <Clock className="w-6 h-6 text-purple-600" />,
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

export default function Home() {
  const handleWhatsAppClick = (plan: Plan) => {
    const message = `Olá, vim pelo site e gostaria de assinar o plano ${plan.title} de R$ ${plan.price}`;
    const whatsappUrl = `https://wa.me/551100000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <HeroCarousel />

      <section className="py-16 text-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a GYM CIX</h2>
              <p className="mb-4">
                Com mais de 10 anos de atuação no mercado, a GYM CIX se destaca como uma referência quando o assunto é qualidade e resultados consistentes. Durante mais de uma década, nos empenhamos em transformar vidas por meio do esporte, promovendo a saúde, o bem-estar e a superação pessoal. Nosso compromisso é ser a ponte que conecta nossos alunos ao melhor de si mesmos, seja para atingir seus objetivos fitness, melhorar a qualidade de vida ou simplesmente buscar uma rotina mais saudável.
              </p>
              <p>
                Para isso, contamos com uma equipe de profissionais altamente qualificados, que estão sempre prontos para oferecer orientação personalizada e acompanhamento contínuo. Nossas instalações bem equipadas, foram pensadas para proporcionar o máximo de conforto e eficiência, garantindo que cada aluno tenha a melhor experiência possível, desde o momento em que entra em nossa academia até a conquista de seus objetivos.
              </p>

            </div>
            <div className="relative aspect-video rounded-lg">
              <Image
                src="/gymcix_logo.png"
                alt="Academia"
                width={500}
                height={500}
                className="object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section >

      <section className="py-16  bg-black-950 rounded-lg" id="plans" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Nossos Planos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.title} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-purple-950">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-4 text-purple-950">R$ {plan.price}</p>
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
                  className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors mt-auto"
                >
                  Assinar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher a GYM CIX?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-lg bg-black-950"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${benefit.titleColor}`}>{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
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
