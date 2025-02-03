import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsappFloatingButton from './components/WhatsappFloatingButton'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Academia Extreme Fitness',
  description: 'Sua academia para resultados reais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFloatingButton /> {/* Botão flutuante adicionado aqui */}
      </body>
    </html>
  )
}
