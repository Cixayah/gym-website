// src/components/Navbar.tsx
import Link from 'next/link'
import { Menu } from 'lucide-react'

export function Navbar() {
    return (
        <nav className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Extreme Fitness
                        </Link>
                    </div>

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
                </div>
            </div>
        </nav>
    )
}
