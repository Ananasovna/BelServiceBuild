import About from '@/app/about/page'
import Services from '@/app/services/page'
import { LinksServices } from '@/common/components/linksServices/linksServices'

import s from './page.module.css'

export default function Page() {
  return (
    <div className={s.content}>
      {/*<LinksServices />*/}
      <About />
      <div className={s.servicesWrapper}>
        <Services />
      </div>
    </div>
  )
}
