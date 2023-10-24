import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './(components)/Navbar';

<link rel="icon" href="/favicon.ico" sizes="any" />

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lalas Pizzeria - 215-32 Hillside Ave Queens Village, NY 11427, Pizza, Pasta, Sandwich and more',
  description: 'Lalas Pizzeria 30 years of crafting pizza offers the finest in authentic pizza in Queens Village, NY. Our menu features a wide variety of pizza options. Enjoy the convenience of free delivery near you - call us at (347) 456 5287 to place your order.',
  keywords: 'Queens Village, Neighborhood Pizza, Pizza Near Me, Pizza in Queens Village, Authentic Pizza, Pizza Delivery, Pizza Menu, Lalas Pizzeria, Pepperoni Pizza, Cheese Pizza, BBQ Chicken Pizza, White Pizza, Specialty Pies, Free Delivery, Pizza Place',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, o, f, js, fjs) {
                w[o] = w[o] || function (opt) { w[o].q = w[o].q || opt };
                (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
                js.src = f; js.async = 1;
                if (fjs) { fjs.parentNode.insertBefore(js, fjs) }
                else {
                  fjs = d.getElementsByTagName('head')[0];
                  fjs.appendChild(js)
                }
              })(window, document, 'script', 'SliceWidgets', 'https://restaurant-widgets-integrations.slicelife.com/widget.js');
              SliceWidgets({ shopUuid: '965c6ebe-0a09-4e29-bf6c-4954b8773a53' });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <header className=''> <Navbar /></header>
        <main>
        {children}
        </main>
        <Analytics />
        </body>
    </html>
  )
}
