import { aboutData } from '@/common/data/aboutData'
import { contactsData } from '@/common/data/contactsData'
import { linksServicesData } from '@/common/data/linksServicesData'
import { photoDisplay } from '@/common/data/photoDisplayData'
import { servicesData } from '@/common/data/servicesData'
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
