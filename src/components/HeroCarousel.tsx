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
            image: "/banner_1.jpg",
            alt: "Primeira imagem",
        },
        {
            image: "/banner_2.jpg",
            alt: "Segunda imagem",
        },
        {
            image: "/banner_3.jpg",
            alt: "Terceira imagem",
        }
    ];


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

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
                        key={slide.alt}
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
            <div className="relative max-w-7xl mx-auto h-full flex items-center z-20">
                <div className="text-white w-full px-8 sm:px-16">
                    {/* Para mobile: text-3xl, para telas médias: text-4xl, e para telas grandes: text-6xl */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                        Transforme seu corpo, <br />transforme sua vida
                    </h1>
                    <p className="mt-5 text-base sm:text-xl">
                        Comece sua jornada hoje mesmo
                    </p>
                    <Link
                        href="#plans"
                        className="mt-8 inline-block bg-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors"
                    >
                        Começar agora
                    </Link>
                </div>
            </div>

            {/* Botões de navegação */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors z-30"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors z-30"
                aria-label="Próximo slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
                {slides.map((slide, index) => (
                    <button
                        key={slide.alt}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-purple-600' : 'bg-white/50'
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
