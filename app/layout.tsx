import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//const mplus = M_PLUS_2({
//                        subsets: ['latin'],
//                        variable: '--font-mplus',
//                        display: 'optional',
//                       })


export const metadata: Metadata = {
  title: 'Christa\'s Webzone',
  description: 'Welcome to my personal site!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
