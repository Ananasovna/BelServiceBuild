import { Container } from '@/common/components/container/container'
import { Logo } from '@/common/components/logo/logo'
import { Telephone } from '@/common/components/telephone/telephone'
import { Navbar } from '@/components/navbar/navbar'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Logo />
        <Telephone />
        <Navbar />
      </Container>
    </header>
  )
}
