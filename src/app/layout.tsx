import { ReactNode } from 'react'

import { contactsData } from '@/components/contacts/contacts'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import Head from 'next/head'
import Script from 'next/script'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <Head>
        <meta content={'#da532c'} name={'msapplication-TileColor'} />
        <meta content={'#ffffff'} name={'theme-color'} />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy={'afterInteractive'}
      ></Script>
      <Script id={'ga-script'} strategy={'afterInteractive'}>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')`}
      </Script>
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
