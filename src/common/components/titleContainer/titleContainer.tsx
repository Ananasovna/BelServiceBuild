import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './titleContainer.module.scss'

type TitleProps = {
  align?: 'center' | 'left'
  children: ReactNode
}

export const TitleContainer = ({ align = 'center', children, ...props }: TitleProps) => {
  const titleClass = clsx(s.titleWrapper, align === 'left' && s.alignLeft)

  return (
    <div className={titleClass} {...props}>
      {children}
      <div className={s.underline}></div>
    </div>
  )
}
