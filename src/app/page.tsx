import { About } from '@/components/about/about'
import { Contacts } from '@/components/contacts/contacts'
import { LinksServices } from '@/components/linksServices/linksServices'
import { PhotoDisplay } from '@/components/photoDisplay/photoDisplay'
import { Services } from '@/components/services/services'
import { Metadata } from 'next'

import s from './page.module.css'

export const metadata: Metadata = {
  description: '',
  keywords: '',
  title: 'Ремонт коммерческих помещений',
}

export default function Page() {
  return (
    <div className={s.content}>
      <PhotoDisplay />
      <About />
      <LinksServices />
      <Services />
      <div className={s.projectsContainer}>
        {/*Раскомментировать строку ниже при добавлении раздела наши проекты*/}
        {/*<Projects />*/}
        {/*Удалить строку ниже при добавлении раздела наши проекты*/}
        <Contacts variant={'withBg'} />
      </div>
      {/*Раскомментировать строку ниже при добавлении раздела наши проекты*/}
      {/*<Contacts />*/}
    </div>
  )
}
