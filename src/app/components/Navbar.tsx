"use client"; // Adicione isso no topo do arquivo para usar hooks do React

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react'; // Importe useEffect para detectar a rolagem

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu móvel
    const [isScrolled, setIsScrolled] = useState(false); // Estado para controlar a rolagem

    // Função para alternar o menu móvel
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Efeito para detectar a rolagem da página
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); // Ativa o estado de rolagem
            } else {
                setIsScrolled(false); // Desativa o estado de rolagem
            }
        };

        window.addEventListener('scroll', handleScroll); // Adiciona o listener de rolagem
        return () => {
            window.removeEventListener('scroll', handleScroll); // Remove o listener ao desmontar
        };
    }, []);

    return (
        <nav
            className={`bg-black text-white fixed w-full z-50 transition-opacity duration-300 ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Extreme Fitness
                        </Link>
                    </div>

                    {/* Links de navegação (visíveis em telas maiores) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="hover:text-gray-300 px-3 py-2">
                                Início
                            </Link>
                            <Link href="#banner" className="hover:text-gray-300 px-3 py-2">
                                Planos
                            </Link>
                            <Link href="/aulas" className="hover:text-gray-300 px-3 py-2">
                                Aulas
                            </Link>
                            <Link href="/sobre" className="hover:text-gray-300 px-3 py-2">
                                Sobre
                            </Link>
                            <Link href="/contato" className="hover:text-gray-300 px-3 py-2">
                                Contato
                            </Link>
                        </div>
                    </div>

                    {/* Botão do menu de hambúrguer (visível em telas menores) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="Abrir menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Menu móvel (visível quando isOpen é true) */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-2 pb-3">
                            <Link href="/" className="hover:text-gray-300 px-3 py-2">
                                Início
                            </Link>
                            <Link href="#banner" className="hover:text-gray-300 px-3 py-2">
                                Planos
                            </Link>
                            <Link href="/aulas" className="hover:text-gray-300 px-3 py-2">
                                Aulas
                            </Link>
                            <Link href="/sobre" className="hover:text-gray-300 px-3 py-2">
                                Sobre
                            </Link>
                            <Link href="/contato" className="hover:text-gray-300 px-3 py-2">
                                Contato
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}