import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonVariants = 'link' | 'primary' | 'secondary' | 'tertiary'

export type ButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode | string
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  title?: string
  variant?: ButtonVariants
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth = false,
    icon,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], className, fullWidth && s.fullWidth)}
      {...rest}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </Component>
  )
}
