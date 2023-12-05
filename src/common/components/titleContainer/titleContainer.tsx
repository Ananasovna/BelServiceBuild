import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './titleContainer.module.scss'
import { Typography, TypographyVariantType } from '@/common/components/typography/typography'

type TitleProps<T extends ElementType> = {
  align?: 'center' | 'left'
  children?: ReactNode
  variant?: TypographyVariantType
} & ComponentPropsWithoutRef<T>

export const TitleContainer = <T extends ElementType = 'div'>(props: TitleProps<T>) => {
  const { align = 'center', children, variant, className, as, ...rest } = props
  const titleClass = clsx(s.titleWrapper, align === 'left' && s.alignLeft)

  return (
    <div className={titleClass} {...rest}>
      <Typography as={'h2'} className={className} variant={variant}>
        {children}
      </Typography>

      <div className={s.underline}></div>
    </div>
  )
}
