import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

<link rel="icon" href="/favicon.ico" sizes="any" />

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lala\'s Pizzeria - Best Pizza in Queens Village, NY 11427',
  description: 'Visit Lala\'s Pizzeria for the finest pizza in Queens Village. We are located at 215-32 Hillside Ave, Queens Village, NY 11427. Enjoy free delivery - call us at (347) 456 5287. Your go-to pizzeria in Queens, NYC!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
