"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);  // Fecha o menu
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-black text-white fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            <Image
                                src="/gymcix_logo.png"
                                alt="GYM CIX Logo"
                                width={60}
                                height={60}
                                className="object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    </div>

                    {/* Links de navegação (visíveis em telas maiores) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="hover:text-purple-500 active:text-purple-700 px-3 py-2 transition-colors duration-200">
                                Início
                            </Link>
                            <Link href="#plans" className="hover:text-purple-500 active:text-purple-700 px-3 py-2 transition-colors duration-200">
                                Planos
                            </Link>

                            <Link href="#about" className="hover:text-purple-500 active:text-purple-700 px-3 py-2 transition-colors duration-200">
                                Sobre
                            </Link>
                            <Link href="/teste" className="hover:text-purple-500 active:text-purple-700 px-3 py-2 transition-colors duration-200">
                                Teste
                            </Link>

                            {/* <Link href="#contato" className="hover:text-purple-500 active:text-purple-700 px-3 py-2 transition-colors duration-200">
                                Contato
                            </Link> */}
                        </div>
                    </div>

                    {/* Botão do menu de hambúrguer (visível em telas menores) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md focus:outline-none"
                            aria-label="Abrir menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Menu móvel (visível quando isOpen é true) */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col items-center justify-center space-y-4 pb-3">
                        <Link href="#" onClick={closeMenu} className="w-full hover:bg-purple-500 active:bg-purple-700 px-3 py-2 text-center rounded-md transition-colors duration-200">
                            Início
                        </Link>
                        <Link href="#plans" onClick={closeMenu} className="w-full hover:bg-purple-500 active:bg-purple-700 px-3 py-2 text-center rounded-md transition-colors duration-200">
                            Planos
                        </Link>

                        <Link href="#about" onClick={closeMenu} className="w-full hover:bg-purple-500 active:bg-purple-700 px-3 py-2 text-center rounded-md transition-colors duration-200">
                            Sobre
                        </Link>

                        <Link href="/teste" onClick={closeMenu} className="w-full hover:bg-purple-500 active:bg-purple-700 px-3 py-2 text-center rounded-md transition-colors duration-200">
                            Teste
                        </Link>
                        {/* <Link href="#contato" onClick={closeMenu} className="w-full hover:bg-purple-500 active:bg-purple-700 px-3 py-2 text-center rounded-md transition-colors duration-200">
                            Contato
                        </Link> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
