'use client'

import { Typography } from '@/common/components/typography/typography'
import { NavItemType } from '@/components/navbar/navbar'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from '@/components/navbar/navItem.module.scss'

type NavItemProps = {
  className?: string
  navItem: NavItemType
  onClick?: () => void
}

export const NavItem = ({ className, navItem, onClick }: NavItemProps) => {
  const pathname = usePathname()

  const activeClass = clsx(className, pathname === navItem.path && s.activeLink)

  return (
    <Link className={clsx(s.navItem, activeClass)} href={navItem.path} onClick={onClick}>
      <Typography className={activeClass} variant={'subtitle2'}>
        {navItem.title}
      </Typography>
    </Link>
  )
}
