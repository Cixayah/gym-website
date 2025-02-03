import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';  // Correção aqui

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div>
                        <div className="mb-4" >
                            <Link href="/">
                                <Image
                                    src="https://i.ibb.co/ZW8RhpD/DOCTYPE-html-html-Mirrored-from-www-gymcenter-com-br-by-HTTrack-Website-Copier3-x-XR-CO-2014-Fri-16.png"
                                    alt="Extreme Fitness Logo"
                                    width={150}
                                    height={50}
                                    className="object-contain"
                                />
                            </Link>

                        </div>
                        <p className="text-gray-300">Sua academia para resultados reais</p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#plans" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Planos
                                </Link>
                            </li>

                            <li>
                                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <address className="text-gray-300 not-italic">
                            <p>Av. Maranguape, 407</p>
                            <p>Catanduva - SP</p>
                            <p>Tel: (17) 99788-1068</p>
                        </address>
                    </div>

                    {/* Redes sociais */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    href="https://instagram.com/cixayah"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <Instagram size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <Youtube size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.tiktok.com"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <Twitter size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <Facebook size={24} />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Créditos */}
                <div className="mt-16 text-center text-gray-500 text-sm">
                    <p>
                        Desenvolvido por{' '}
                        <Link
                            href="https://instagram.com/cixayah"
                            target="_blank"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Cix
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
