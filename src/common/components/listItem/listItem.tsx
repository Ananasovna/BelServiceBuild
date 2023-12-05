import { Checkmark } from '@/common/icons/checkmark'

import s from './listItem.module.scss'
import { Typography } from '@/common/components/typography/typography'
import { ReactNode } from 'react'

type ListItemProps = {
  children: ReactNode
}

export const ListItem = ({ children }: ListItemProps) => {
  return (
    <div className={s.listItem}>
      <div className={s.iconWrapper}>
        <Checkmark color={'#f4800f'} />
      </div>
      <Typography>{children}</Typography>
    </div>
  )
}
