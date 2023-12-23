'use client'
import { Container } from '@/common/components/container/container'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container className={s.footerContainer}>
        <div className={s.footerTitle}>- BelServiceBuild -</div>
      </Container>
    </footer>
  )
}
