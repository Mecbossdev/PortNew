import type { Metadata } from 'next'
import { Inter, Exo } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const exo = Exo({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${exo.className} bg-gray-900 text-gray-50`}>{children}</body>
    </html>
  )
}