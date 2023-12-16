import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PropertyProvider } from '@/contexts/PropertyContex'
import { Provider } from '@/providers/Provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moraê',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
