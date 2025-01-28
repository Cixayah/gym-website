import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
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
      </body>
    </html>
  )
}