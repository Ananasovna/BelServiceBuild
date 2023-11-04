import { ReactNode } from 'react'

import s from './serviceItem.module.scss'

type ServiceItemProps = {
  children: ReactNode
}
export const ServiceItem = ({ children }: ServiceItemProps) => {
  return <div className={s.wrapper}>{children}</div>
}
