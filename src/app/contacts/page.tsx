import { Contacts } from '@/components/contacts/contacts'
import { Metadata } from 'next'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'Контакты BelServiceBuild',
  description: '',
  keywords: '',
}

const ContactsPage = () => {
  return <Contacts />
}

export default ContactsPage
