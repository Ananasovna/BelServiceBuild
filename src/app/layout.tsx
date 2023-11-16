import { ReactNode } from 'react'

import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import Head from 'next/head'

import './globals.css'
import type { Metadata } from 'next'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <Head>
        <meta content={'#da532c'} name={'msapplication-TileColor'} />
        <meta content={'#ffffff'} name={'theme-color'} />
      </Head>
      <body className={'main'}>
        <Header />
        <div className={'content'}>
          <div className={'headerReplacer'}></div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
