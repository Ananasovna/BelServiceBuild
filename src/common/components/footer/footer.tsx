import { Container } from '@/common/components/container/container'
import { Logo } from '@/common/components/logo/logo'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container className={s.footerContainer}>
        <div className={s.logoWrapper}>{/*<Logo />*/}</div>
      </Container>
    </footer>
  )
}
