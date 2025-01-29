// app/page.tsx
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

// components/HeroCarousel.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: "/ef_cropped.jpg",
            alt: "Academia Extreme Fitness",
        },
        {
            image: "/api/placeholder/1920/1080",
            alt: "Área de musculação",
        },
        {
            image: "/api/placeholder/1920/1080",
            alt: "Área de cardio",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="relative h-[600px]">
            {/* Carrossel de imagens */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                    </div>
                ))}
            </div>

            {/* Conteúdo sobreposto */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        Transforme seu corpo, <br />transforme sua vida
                    </h1>
                    <p className="mt-4 text-xl">
                        Comece sua jornada hoje com os melhores profissionais
                    </p>
                    <Link
                        href="#banner"
                        className="mt-8 inline-block bg-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                        Começar agora
                    </Link>
                </div>
            </div>

            {/* Botões de navegação */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                aria-label="Próximo slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-red-600' : 'bg-white/50'
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;