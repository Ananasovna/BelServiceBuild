import { ReactNode } from 'react'

import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={'main'}>
        <Header />
        <div className={'content'}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
