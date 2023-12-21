import { Address } from '@/common/components/address/address'
import { Container } from '@/common/components/container/container'
import { Email } from '@/common/components/email/email'
import { EmailForm } from '@/common/components/emailForm/emailForm'
import { Telephone } from '@/common/components/telephone/telephone'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import { ContactsDataType } from '@/common/data/contactsData'
import { clsx } from 'clsx'

import s from './contacts.module.scss'

type ContactsProps = {
  data: ContactsDataType
  variant?: 'withBg'
}

export const Contacts = ({ data, variant }: ContactsProps) => {
  return (
    <section>
      <Container className={s.contactsContainer}>
        <div className={s.formWrapper}>
          <EmailForm />
        </div>
        <div className={s.contactsWrapper}>
          <TitleContainer align={'left'} variant={'h2'}>
            {data.title}
          </TitleContainer>
          <div className={s.contactsLinks}>
            <div className={clsx(s.telWrapper, variant && s.whiteBg)}>
              <Telephone
                height={'20px'}
                phone={data.phone}
                phoneHref={data.phoneHref}
                width={'20px'}
              />
              <Email email={data.email} emailHref={data.emailHref} />
            </div>
            {variant ? (
              <Address address={data.address} />
            ) : (
              <Address address={data.address} withBg />
            )}
            <div className={clsx(s.info, variant && s.whiteBg)}>
              <Typography variant={'subtitle2'}>{data.name}</Typography>
              <Typography variant={'subtitle2'}>{data.tin}</Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
