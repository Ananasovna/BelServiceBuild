import { Address } from '@/common/components/address/address'
import { Container } from '@/common/components/container/container'
import { Email } from '@/common/components/email/email'
import { EmailForm } from '@/common/components/emailForm/emailForm'
import { Telephone } from '@/common/components/telephone/telephone'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'

import s from './contacts.module.scss'
import { clsx } from 'clsx'
import { ContactsDataType } from '@/common/data/contactsData'

type ContactsProps = {
  variant?: 'withBg'
  data: ContactsDataType
}

export const Contacts = ({ variant, data }: ContactsProps) => {
  return (
    <Container className={s.contactsContainer}>
      <div className={s.formWrapper}>
        <EmailForm />
      </div>
      <div className={s.contactsWrapper}>
        <TitleContainer variant={'h2'} align={'left'}>
          {data.title}
        </TitleContainer>
        <div className={s.contactsLinks}>
          <div className={clsx(s.telWrapper, variant && s.whiteBg)}>
            <Telephone
              phone={data.phone}
              phoneHref={data.phoneHref}
              height={'20px'}
              width={'20px'}
            />
            <Email email={data.email} emailHref={data.emailHref} height={'30px'} width={'30px'} />
          </div>
          {variant ? (
            <Address address={data.address} height={'30px'} width={'30px'} />
          ) : (
            <Address address={data.address} height={'30px'} width={'30px'} withBg={true} />
          )}
          <div className={clsx(s.info, variant && s.whiteBg)}>
            <Typography variant={'subtitle2'}>{data.name}</Typography>
            <Typography variant={'subtitle2'}>{data.tin}</Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}
