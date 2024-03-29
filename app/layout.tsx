import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import './globals.css'

const inter = Dosis({ subsets: ['latin'] })
// const inter = Kanit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'My website',
  description: 'A way to show the things I have made',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
