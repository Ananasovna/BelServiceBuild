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
        <TitleContainer variant={'h2'} align={'left'}>
          Контакты
        </TitleContainer>
        <div className={s.contactsLinks}>
          <div className={s.telWrapper}>
            <Telephone height={'20px'} width={'20px'} />
            <Email height={'30px'} width={'30px'} withBg />
          </div>
          <Address height={'30px'} width={'30px'} withBg />
          <div className={s.info}>
            <Typography variant={'subtitle2'}>ООО "БелСервисСтрой"</Typography>
            <Typography variant={'subtitle2'}>ИНН: 6700007034</Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}
