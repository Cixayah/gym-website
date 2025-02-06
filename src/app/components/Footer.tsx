import Link from 'next/link';
import Image from 'next/image';
import { SiInstagram, SiFacebook, SiWhatsapp } from 'react-icons/si';

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
                                    src="/gymcix_logo.png"
                                    alt="gymcix_logo"
                                    width={300}
                                    height={100}
                                    className="object-contain transition-transform duration-300 hover:scale-110"
                                />
                            </Link>

                        </div>
                        {/* <p className="text-gray-300">Sua academia para resultados reais</p> */}
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
                                    href="https://www.instagram.com/academiaextremefitness_/"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiInstagram size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100009066871226"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiFacebook size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://api.whatsapp.com/send/?phone=5517997881068&text=Olá%2C+vim+pelo+site+e+gostaria+de+mais+informações&type=phone_number&app_absent=0"
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <SiWhatsapp size={24} />
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
