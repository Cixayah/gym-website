// app/page.tsx
import HeroCarousel from './components/HeroCarousel';
import { Dumbbell, Users, Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="py-16" id='banner'>
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
    </>
  );
}

const benefits = [
  {
    title: "Equipamentos Modernos",
    titleColor: "text-white-500",
    description: "Academia completa com os equipamentos mais modernos do mercado",
    icon: <Dumbbell className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Profissionais Qualificados",
    titleColor: "text-white-500",
    description: "Equipe de instrutores especializados para te auxiliar",
    icon: <Users className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Horário Flexível",
    titleColor: "text-white-500",
    description: "Academia aberta todos os dias, inclusive feriados",
    icon: <Clock className="w-6 h-6 text-red-600" />,
  },
];