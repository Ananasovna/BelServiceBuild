import { Address } from '@/common/components/address/address'
import { Container } from '@/common/components/container/container'
import { Email } from '@/common/components/email/email'
import { EmailForm } from '@/common/components/emailForm/emailForm'
import { Telephone } from '@/common/components/telephone/telephone'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'

import s from './contacts.module.scss'

export const Contacts = () => {
  return (
    <Container className={s.contactsContainer}>
      <div className={s.formWrapper}>
        <EmailForm />
      </div>

      <div className={s.contactsWrapper}>
        <TitleContainer align={'left'}>
          <Typography variant={'h1'}>Контакты</Typography>
        </TitleContainer>
        <div className={s.contactsLinks}>
          <Telephone height={'40px'} width={'40px'} withBg />
          <Email height={'50px'} width={'50px'} withBg />
          <Address height={'50px'} width={'50px'} withBg />
        </div>
      </div>
    </Container>
  )
}
