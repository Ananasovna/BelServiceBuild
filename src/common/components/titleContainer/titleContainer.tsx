import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Typography, TypographyVariantType } from '@/common/components/typography/typography'
import { clsx } from 'clsx'

import s from './titleContainer.module.scss'

type TitleProps<T extends ElementType> = {
  align?: 'center' | 'left'
  children?: ReactNode
  variant?: TypographyVariantType
} & ComponentPropsWithoutRef<T>

export const TitleContainer = <T extends ElementType = 'div'>({
  align = 'center',
  as,
  children,
  className,
  variant,
  ...rest
}: TitleProps<T>) => {
  return (
    <div className={clsx(s.titleWrapper, align === 'left' && s.alignLeft)} {...rest}>
      <Typography as={'h2'} className={className} variant={variant}>
        {children}
      </Typography>

      <div className={s.underline}></div>
    </div>
  )
}
