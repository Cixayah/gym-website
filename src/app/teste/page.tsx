// src/app/test/page.tsx
import Image from 'next/image';

export default async function TestPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black-500 to-blue-500">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-300 mb-4 mt-6">
                        Transforme Seu Corpo e Sua Vida
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Descubra o poder da transformação através do treinamento personalizado
                        e orientação profissional.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-purple-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative w-full h-48">
                            <Image
                                src="https://picsum.photos/seed/gym1/400/300"
                                alt="Treino funcional"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Treino Funcional</h3>
                            <p className="text-gray-600">
                                Exercícios que preparam seu corpo para os desafios do dia a dia.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative w-full h-48">
                            <Image
                                src="https://picsum.photos/seed/gym2/400/300"
                                alt="Musculação"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Musculação</h3>
                            <p className="text-gray-600">
                                Ganhe força e defina seus músculos com equipamentos modernos.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative w-full h-48">
                            <Image
                                src="https://picsum.photos/400/300"
                                alt="Aeróbico"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Aeróbico</h3>
                            <p className="text-gray-600">
                                Melhore seu condicionamento e queime calorias de forma eficiente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-grey-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Por que nos escolher?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Profissionais altamente qualificados</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Equipamentos de última geração</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Ambiente limpo e acolhedor</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Planos flexíveis</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                                    <Image
                                        src={`https://picsum.photos/seed/gym${num + 3}/200/200`}
                                        alt={`Imagem ${num}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export const metadata = {
    title: 'Teste | Academia GYM CIX',
    description: 'Página de teste com layout moderno usando TailwindCSS',
}