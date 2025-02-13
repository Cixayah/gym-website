import Link from 'next/link';
import Image from 'next/image';
import { SiInstagram, SiFacebook, SiWhatsapp, SiTiktok } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo - Increased dimensions */}
                    <div className="flex items-center justify-center md:justify-start">
                        <div className="relative w-[400px] h-[150px]">
                            <Link href="/" className="block w-full h-full">
                                <Image
                                    src="/gymcix_logo.png"
                                    alt="gymcix_logo"
                                    fill
                                    className="object-contain transition-transform duration-300 hover:scale-110"
                                    priority
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Institucional</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="#plans" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Planos
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Endereço</h3>
                        <address className="text-gray-300 not-italic">
                            <p>Rua dos Alfeneiros, Nº4</p>
                            <p>Hogwarts - Lo</p>
                            <p>Tel: (17) 99000-0000</p>
                        </address>
                    </div>

                    {/* Redes sociais */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    href="https://www.instagram.com/devcix"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiInstagram size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiFacebook size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://api.whatsapp.com/send/?phone=551100000000&text=Olá%2C+vim+pelo+site+e+gostaria+de+mais+informações&type=phone_number&app_absent=0"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiWhatsapp size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://tiktok.com/@cixayah"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiTiktok size={24} />
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
                            href="https://instagram.com/devcix"
                            target="_blank"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            DevCix
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}