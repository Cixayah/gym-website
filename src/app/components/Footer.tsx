import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Extreme Fitness</h3>
                        <p className="text-gray-300">
                            Sua academia para resultados reais
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#banner" className="text-gray-300 hover:text-white">
                                    Planos
                                </Link>
                            </li>
                            <li>
                                <Link href="/aulas" className="text-gray-300 hover:text-white">
                                    Aulas
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="text-gray-300 hover:text-white">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <address className="text-gray-300 not-italic">
                            <p>Rua da Academia, 123</p>
                            <p>São Paulo - SP</p>
                            <p>Tel: (11) 1234-5678</p>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    )
}