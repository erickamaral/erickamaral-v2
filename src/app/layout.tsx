import './globals.css'

import { Rubik } from 'next/font/google'
import { clsx } from 'clsx';

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Erick Amaral',
  description: 'Frontend Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={clsx(rubik.className, 'text-gray-400 bg-gray-900 h-full')}>
        {children}
      </body>
    </html>
  )
}
