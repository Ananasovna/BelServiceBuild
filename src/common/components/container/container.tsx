import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './container.module.scss'

type ContainerProps = {
  children: ReactNode
  className?: string
  gap?: string
  marginTop?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  const containerClass = clsx(className, s.container)

  return <div className={containerClass}>{children}</div>
}