import About from '@/app/about/page'
import { LinksServices } from '@/common/components/linksServices/linksServices'
import { Services } from '@/common/components/services/services'
import { PhotoDisplay } from '@/components/photoDisplay/photoDisplay'

import s from './page.module.css'

export default function Page() {
  return (
    <div className={s.content}>
      <PhotoDisplay />
      <About />
      <LinksServices />
      <div className={s.servicesWrapper}>
        <Services />
      </div>
    </div>
  )
}
