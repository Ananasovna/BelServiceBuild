'use client'

import { NavItemType } from '@/common/components/navbar/navbar'
import { Typography } from '@/common/components/typography/typography'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from '@/common/components/navbar/navItem.module.scss'

type NavItemProps = {
  navItem: NavItemType
}

export const NavItem = ({ navItem }: NavItemProps) => {
  const pathname = usePathname()

  const activeClass = clsx(pathname === navItem.path && s.activeLink)

  return (
    <Link className={clsx(s.navItem, activeClass)} href={navItem.path}>
      <Typography className={activeClass} variant={'subtitle2'}>
        {navItem.title}
      </Typography>
    </Link>
  )
}
