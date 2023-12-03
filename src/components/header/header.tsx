'use client'
import { Container } from '@/common/components/container/container'
import { Logo } from '@/common/components/logo/logo'
import { Telephone } from '@/common/components/telephone/telephone'

import s from './header.module.scss'
import { Navbar } from '@/components/navbar/navbar'

export const Header = () => {
  return (
    <header className={s.appBar}>
      <Container className={s.headerContainer}>
        <Logo />
        <Telephone className={s.telephoneTitle} />
        <Navbar />
      </Container>
    </header>
  )
}
