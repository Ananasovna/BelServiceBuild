import { ReactNode } from 'react'

import { Typography } from '@/common/components/typography/typography'
import { Checkmark } from '@/common/icons/checkmark'

import s from './listItem.module.scss'

type ListItemProps = {
  children: ReactNode
}

export const Item = ({ children }: ListItemProps) => {
  return (
    <div className={s.listItem}>
      <div className={s.iconWrapper}>
        <Checkmark color={'#f4800f'} />
      </div>
      <Typography>{children}</Typography>
    </div>
  )
}
