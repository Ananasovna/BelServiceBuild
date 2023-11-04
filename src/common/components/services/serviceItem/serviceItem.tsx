import { ReactNode } from 'react'

import { Typography } from '@/common/components/typography/typography'

import s from './serviceItem.module.scss'

type ServiceItemProps = {
  children: ReactNode
  title: string
}
export const ServiceItem = ({ children, title }: ServiceItemProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.iconWrapper}>{children}</div>
      <Typography variant={'subtitle1'}>{title}</Typography>
    </div>
  )
}
