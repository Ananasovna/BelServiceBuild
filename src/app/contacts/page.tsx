import { Contacts } from '@/components/contacts/contacts'
import { Metadata } from 'next'
import s from './page.module.scss'
import Image from 'next/image'

import { contactsData } from '@/common/data/contactsData'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'Контакты BelServiceBuild',
  description: '',
  keywords: '',
}

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <Contacts data={contactsData} />
      <div className={s.imgWrapper}>
        <Image
          placeholder={'blur'}
          className={s.photo}
          src={contactsData.img}
          priority={true}
          alt={'Контакты фото'}
        />
      </div>
    </div>
  )
}

export default ContactsPage
