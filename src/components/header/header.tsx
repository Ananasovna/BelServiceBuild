'use client'
import { Container } from '@/common/components/container/container'
import { Logo } from '@/common/components/logo/logo'
import { Telephone } from '@/common/components/telephone/telephone'

import s from './header.module.scss'
import { Navbar } from '@/components/navbar/navbar'
import { ContactsDataType } from '@/common/data/contactsData'

type HeaderProps = {
  data: ContactsDataType
}

export const Header = ({ data }: HeaderProps) => {
  return (
    <header className={s.appBar}>
      <Container className={s.headerContainer}>
        <Logo />
        <Telephone phone={data.phone} phoneHref={data.phoneHref} className={s.telephoneTitle} />
        <Navbar />
      </Container>
    </header>
  )
}
