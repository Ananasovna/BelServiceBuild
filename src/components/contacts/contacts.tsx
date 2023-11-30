import { Address } from '@/common/components/address/address'
import { Container } from '@/common/components/container/container'
import { Email } from '@/common/components/email/email'
import { EmailForm } from '@/common/components/emailForm/emailForm'
import { Telephone } from '@/common/components/telephone/telephone'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'

import s from './contacts.module.scss'
import { clsx } from 'clsx'

type ContactsProps = {
  variant?: 'withBg'
}

export const Contacts = ({ variant }: ContactsProps) => {
  return (
    <Container className={s.contactsContainer}>
      <div className={s.formWrapper}>
        <EmailForm />
      </div>
      <div className={s.contactsWrapper}>
        <TitleContainer variant={'h2'} align={'left'}>
          Контакты
        </TitleContainer>
        <div className={s.contactsLinks}>
          <div className={clsx(s.telWrapper, variant && s.whiteBg)}>
            <Telephone height={'20px'} width={'20px'} />
            <Email height={'30px'} width={'30px'} />
          </div>
          {variant ? (
            <Address height={'30px'} width={'30px'} />
          ) : (
            <Address height={'30px'} width={'30px'} withBg={true} />
          )}
          <div className={clsx(s.info, variant && s.whiteBg)}>
            <Typography variant={'subtitle2'}>ООО "БелСервисСтрой"</Typography>
            <Typography variant={'subtitle2'}>ИНН: 6700007034</Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}
