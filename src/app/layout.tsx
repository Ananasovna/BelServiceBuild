import { ReactNode } from 'react'

import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import Head from 'next/head'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <Head>
        <link href={'./favicon.ico'} rel={'shortcut icon'} />
        <link href={'/favicon/apple-touch-icon.png'} rel={'apple-touch-icon'} sizes={'180x180'} />
        <link href={'/favicon/favicon-32x32.png'} rel={'icon'} sizes={'32x32'} type={'image/png'} />
        <link href={'/favicon/favicon-16x16.png'} rel={'icon'} sizes={'16x16'} type={'image/png'} />
        <link href={'/favicon/site.webmanifest'} rel={'manifest'} />
        <link color={'#5bbad5'} href={'/favicon/safari-pinned-tab.svg'} rel={'mask-icon'} />
        <meta content={'#da532c'} name={'msapplication-TileColor'} />
        <meta content={'#ffffff'} name={'theme-color'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={'main'}>
        <Header />
        <div className={'content'}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
