import { Address } from '@/common/components/address/address'
import { Container } from '@/common/components/container/container'
import { Email } from '@/common/components/email/email'
import { EmailForm } from '@/common/components/emailForm/emailForm'
import { Telephone } from '@/common/components/telephone/telephone'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import { clsx } from 'clsx'
import { StaticImageData } from 'next/image'

import s from './contacts.module.scss'

type ContactsProps = {
  variant?: 'withBg'
}

export type ContactsDataType = {
  address: string
  email: string
  emailHref: string
  name: string
  phone: string
  phoneHref: string
  tin: string
  title: string
}
//Данные для раздела/страницы "Контакты"
export const contactsData: ContactsDataType = {
  // Адрес
  address: '214013, Смоленская область, город Смоленск, ул. Николаева 51, офис А 49',
  // Имейл, который виден на сайте
  email: 'belsbinfo@gmail.com',
  // Имейл, который используется в ссылке, при замене имейла выше, этот имейл тоже обязательно поменять
  emailHref: 'mailto:belsbinfo@gmail.com',
  // Название организации
  name: 'ООО "БелСервисСтрой"',
  // Телефон, который виден на сайте
  phone: '+7 (993) 563 51 54',
  // Телефон, который используется в ссылке, при замене телефона выше, этот телефон тоже обязательно поменять
  phoneHref: 'tel:+79935635154',
  // Инн
  tin: 'ИНН: 6700007034',
  // Заголовок раздела
  title: 'Контакты',
}

export const Contacts = ({ variant }: ContactsProps) => {
  return (
    <section>
      <Container className={s.contactsContainer}>
        <div className={s.formWrapper}>
          <EmailForm />
        </div>
        <div className={s.contactsWrapper}>
          <TitleContainer align={'left'} variant={'h2'}>
            {contactsData.title}
          </TitleContainer>
          <div className={s.contactsLinks}>
            <div className={clsx(s.telWrapper, variant && s.whiteBg)}>
              <Telephone
                height={'20px'}
                phone={contactsData.phone}
                phoneHref={contactsData.phoneHref}
                width={'20px'}
              />
              <Email email={contactsData.email} emailHref={contactsData.emailHref} />
            </div>
            {variant ? (
              <Address address={contactsData.address} />
            ) : (
              <Address address={contactsData.address} withBg />
            )}
            <div className={clsx(s.info, variant && s.whiteBg)}>
              <Typography variant={'subtitle2'}>{contactsData.name}</Typography>
              <Typography variant={'subtitle2'}>{contactsData.tin}</Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
