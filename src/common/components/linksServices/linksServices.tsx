import Link from 'next/link'

import s from './linksServices.module.scss'

export const LinksServices = () => {
  return (
    <div className={s.wrapper}>
      <Link href={'/services/renovation'}>Комплексный ремонт</Link>
      <Link href={'/services/maintenance'}>Комплексное обслуживание</Link>
      <Link href={'/services/design'}>Проектирование</Link>
    </div>
  )
}
