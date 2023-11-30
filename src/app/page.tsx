import { About } from '@/components/about/about'
import { Contacts } from '@/components/contacts/contacts'
import { LinksServices } from '@/components/linksServices/linksServices'
import { PhotoDisplay } from '@/components/photoDisplay/photoDisplay'
import { Projects } from '@/components/projects/projects'
import { Services } from '@/components/services/services'

import s from './page.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Коммерческий ремонт',
  description: '',
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
