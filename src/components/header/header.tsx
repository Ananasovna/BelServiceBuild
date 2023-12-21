import { Container } from '@/common/components/container/container'
import { Logo } from '@/common/components/logo/logo'
import { Telephone } from '@/common/components/telephone/telephone'
import { ContactsDataType } from '@/common/data/contactsData'
import { Navbar } from '@/components/navbar/navbar'

import s from './header.module.scss'

type HeaderProps = {
  data: ContactsDataType
}

export const Header = ({ data }: HeaderProps) => {
  return (
    <header className={s.appBar}>
      <Container className={s.headerContainer}>
        <Logo />
        <Telephone className={s.telephoneTitle} phone={data.phone} phoneHref={data.phoneHref} />
        <Navbar />
      </Container>
    </header>
  )
}
