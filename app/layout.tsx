import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

<link rel="icon" href="/favicon.ico" sizes="any" />

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lalas Pizzeria Pizza 215-32 Hillside Ave Queens Village, NY 11427',
  description: 'Lalas Pizzeria Pizza 215-32 Hillside Ave Queens Village, NY 11427. Free Delivery call us (347) 456 5287',
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
