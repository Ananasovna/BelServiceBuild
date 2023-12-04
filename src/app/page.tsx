import { About } from '@/components/about/about'
import { Contacts } from '@/components/contacts/contacts'
import { LinksServices } from '@/components/linksServices/linksServices'
import { PhotoDisplay } from '@/components/photoDisplay/photoDisplay'
import { Services } from '@/components/services/services'

import s from './page.module.css'
import { Metadata } from 'next'
import { contactsData } from '@/common/data/contactsData'
import { aboutData } from '@/common/data/aboutData'
import { linksServicesData } from '@/common/data/linksServicesData'
import { servicesData } from '@/common/data/servicesData'
import { photoDisplay } from '@/common/data/photoDisplayData'

export const metadata: Metadata = {
  title: 'Ремонт коммерческих помещений',
  description: '',
  keywords: '',
}

export default function Page() {
  return (
    <div className={s.content}>
      <PhotoDisplay data={photoDisplay} />
      <About data={aboutData} />
      <LinksServices data={linksServicesData} />
      <Services data={servicesData} />
      <div className={s.projectsContainer}>
        {/*Раскомментировать строку ниже при добавлении раздела наши проекты*/}
        {/*<Projects data={projectsData} />*/}
        {/*Удалить строку ниже при добавлении раздела наши проекты*/}
        <Contacts data={contactsData} variant={'withBg'} />
      </div>
      {/*Раскомментировать строку ниже при добавлении раздела наши проекты*/}
      {/*<Contacts />*/}
    </div>
  )
}
