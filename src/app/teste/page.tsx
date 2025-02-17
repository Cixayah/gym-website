export default async function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4">
                Welcome to Academia GYM CIX. We are dedicated to providing the best service possible.
            </p>
            <div className="space-y-4">
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Nossa Missão</h2>
                    <p>
                        Transformar vidas através do fitness, oferecendo um ambiente acolhedor
                        e profissional para todos os nossos alunos.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Nossos Valores</h2>
                    <ul className="list-disc pl-5">
                        <li>Compromisso com resultados</li>
                        <li>Excelência no atendimento</li>
                        <li>Ambiente inclusivo</li>
                        <li>Profissionalismo</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

// Metadata para SEO
export const metadata = {
    title: 'Sobre Nós | Academia GYM CIX',
    description: 'Conheça mais sobre a Academia GYM CIX, nossa missão, valores e compromisso com seus resultados.',
}