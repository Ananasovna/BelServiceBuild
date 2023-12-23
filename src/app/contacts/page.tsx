import { Contacts } from '@/components/contacts/contacts'
import { Metadata } from 'next'
import Image from 'next/image'

import s from './page.module.scss'

import contacts from '../../../public/image/contacts.jpg'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  description: '',
  keywords: '',
  title: 'Контакты BelServiceBuild',
}

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <Contacts />
      <div className={s.imgWrapper}>
        <Image
          alt={'Контакты фото'}
          className={s.photo}
          placeholder={'blur'}
          sizes={'h-[350px] w-full'}
          src={contacts}
        />
      </div>
    </div>
  )
}

export default ContactsPage
