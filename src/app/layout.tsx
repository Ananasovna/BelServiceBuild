import { ReactNode } from 'react'

import { contactsData } from '@/components/contacts/contacts'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import Head from 'next/head'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <Head>
        <meta content={'#da532c'} name={'msapplication-TileColor'} />
        <meta content={'#ffffff'} name={'theme-color'} />
      </Head>
      <body className={'main'}>
        <Header data={contactsData} />
        <main className={'content'}>
          <div className={'headerReplacer'}></div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
