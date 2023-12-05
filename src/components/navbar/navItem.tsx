'use client'

import { Typography } from '@/common/components/typography/typography'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from '@/components/navbar/navItem.module.scss'
import { NavItemType } from '@/common/data/navbarData'

type NavItemProps = {
  navItem: NavItemType
  onClick?: () => void
  className?: string
}

export const NavItem = ({ navItem, onClick, className }: NavItemProps) => {
  const pathname = usePathname()

  const activeClass = clsx(className, pathname === navItem.path && s.activeLink)

  return (
    <Link onClick={onClick} className={clsx(s.navItem, activeClass)} href={navItem.path}>
      <Typography className={activeClass} variant={'subtitle2'}>
        {navItem.title}
      </Typography>
    </Link>
  )
}
