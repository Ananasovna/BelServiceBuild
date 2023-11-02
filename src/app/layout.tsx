import { ReactNode } from 'react'

import { Header } from '@/common/components/header/header'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
