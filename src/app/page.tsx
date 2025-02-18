'use client'

import {
  Dumbbell,
  Users,
  Clock,
  Target,
  Award,
  Heart,
  Activity,
  Zap,
  Timer
} from 'lucide-react';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';

interface Plan {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const benefits = [
  {
    title: "Equipamentos Modernos",
    description: "Academia completa com equipamentos de última geração",
    icon: <Dumbbell className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Profissionais Experts",
    description: "Equipe especializada com anos de experiência",
    icon: <Users className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Horários Flexíveis",
    description: "Funcionamento estendido, inclusive feriados",
    icon: <Clock className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Foco em Resultados",
    description: "Acompanhamento personalizado de objetivos",
    icon: <Target className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Qualidade Garantida",
    description: "Ambiente premium e serviço de excelência",
    icon: <Award className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Bem-estar Total",
    description: "Cuidado integral com sua saúde",
    icon: <Heart className="w-6 h-6 text-purple-500" />,
  },
];

const plans: Plan[] = [
  {
    title: "Plano Start",
    price: "70,00",
    features: [
      "Acesso de segunda a sábado",
      "Horário limitado: 09:00 às 16:00",
      "Avaliação física mensal",
      "Acesso à área de musculação",
    ],
  },
  {
    title: "Plano Plus",
    price: "90,00",
    highlight: true,
    features: [
      "Acesso ilimitado",
      "Horário completo: 05:30 às 22:00",
      "Avaliação física quinzenal",
      "Acesso a todas as áreas",
      "Aulas coletivas inclusas",
      "Programa personalizado",
    ],
  },
  {
    title: "Plano Basic",
    price: "80,00",
    features: [
      "Acesso 3x por semana",
      "Horário: 05:30 às 22:00",
      "Avaliação física mensal",
      "Acesso à musculação e cardio",
      "Aulas coletivas inclusas",
    ],
  },
];

const stats = [
  { value: "10+", label: "Anos de Experiência", icon: <Timer className="w-6 h-6 text-purple-500" /> },
  { value: "1000+", label: "Alunos Ativos", icon: <Activity className="w-6 h-6 text-purple-500" /> },
  { value: "50+", label: "Equipamentos", icon: <Dumbbell className="w-6 h-6 text-purple-500" /> },
  { value: "95%", label: "Taxa de Satisfação", icon: <Zap className="w-6 h-6 text-purple-500" /> },
];

export default function Home() {
  const handleWhatsAppClick = (plan: Plan) => {
    const message = `Olá! Tenho interesse no ${plan.title} de R$ ${plan.price}. Gostaria de mais informações.`;
    window.open(`https://wa.me/551100000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <HeroCarousel />

      {/* Stats Section */}
      <section className="py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-2">
                <div className="flex justify-center mb-2 md:mb-4">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Purple Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                <span className="text-purple-500">Transforme</span> sua vida
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Há mais de uma década, a GYM CIX tem sido sinônimo de excelência e resultados.
                Nossa missão é transformar vidas através do esporte, promovendo saúde,
                bem-estar e superação pessoal.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full transition-all transform hover:scale-105">
                Comece Agora
              </button>
            </div>

            {/* Image Content */}
            <div className="order-1 md:order-2 relative w-full md:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/gymcix_logo.png"
                  alt="Academia"
                  fill
                  className="object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black/80">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
            Por que escolher a <span className="text-purple-500">GYM CIX</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-4 md:p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all transform hover:-translate-y-1 border border-purple-500/20 flex flex-col items-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4 flex items-center justify-center rounded-full bg-purple-500/10">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white text-center">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4" id="plans">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
            Planos <span className="text-purple-500">Flexíveis </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`relative p-4 md:p-6 rounded-lg ${plan.highlight
                  ? 'bg-purple-900 text-white shadow-xl shadow-purple-500/20'
                  : 'bg-gray-900 text-gray-100'
                  } flex flex-col h-full transform hover:-translate-y-1 transition-all`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                    Mais Popular
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center md:text-left">
                    {plan.title}
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
                    R$ <span className="text-purple-100">{plan.price}</span>
                  </p>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs md:text-sm">
                        <span className="text-purple-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleWhatsAppClick(plan)}
                  className={`w-full py-2 md:py-3 px-4 rounded-lg transition-colors ${plan.highlight
                    ? 'bg-white text-purple-900 hover:bg-gray-100'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Pronto para começar sua <span className="text-purple-500">transformação</span>?
          </h2>
          <p className="text-xs md:text-sm text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com a GYM CIX.
            Seu objetivo é nossa prioridade.
          </p>
          <button
            onClick={() => {
              const message = "Olá! Vim pelo site e gostaria de agendar uma aula experimental.";
              window.open(`https://wa.me/551100000000?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-2 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all transform hover:scale-105"
          >
            Agende uma Aula Experimental
          </button>
        </div>
      </section>

    </div>
  );
}