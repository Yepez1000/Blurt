import './globals.css'
import { Inter } from 'next/font/google'
import 'regenerator-runtime/runtime';  

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blurt - Audio to Text',
  description: 'Convert your speech to text with ease',
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

