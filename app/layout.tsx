import type { Metadata } from 'next'
import { Dosis, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
// const inter = Kanit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
    title: 'Joel Markley',
    description: 'A HCI PhD student at the University of Minnesota',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='w-full h-full flex justify-center'>
            <body className={`${inter.className} w-full flex justify-center`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
