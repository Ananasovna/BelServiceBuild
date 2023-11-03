import { NavItem } from '@/common/components/navbar/navItem'
import { Typography } from '@/common/components/typography/typography'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './navbar.module.scss'

export type NavItemType = {
  id: number
  path: string
  title: string
}
export const Navbar = () => {
  const navigation: NavItemType[] = [
    { id: 1, path: '/', title: 'Главная' },
    { id: 2, path: '/about', title: 'О нас' },
    { id: 3, path: '/services', title: 'Услуги' },
    { id: 4, path: '/projects', title: 'Наши проекты' },
    { id: 5, path: '/contacts', title: 'Контакты' },
  ]

  const mappedNavigation = navigation.map(el => <NavItem key={el.id} navItem={el}></NavItem>)

  return (
    <nav className={s.wrapper}>
      {/*<div className={clsx(s.navItem, s.activeLink)}>*/}
      {/*  <Link href={'/'}>*/}
      {/*    <Typography variant={'subtitle1'}></Typography>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className={s.navItem}>*/}
      {/*  <Link href={'/about'}>*/}
      {/*    <Typography variant={'subtitle1'}>О нас</Typography>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className={s.navItem}>*/}
      {/*  <Link href={'/services'}>*/}
      {/*    <Typography variant={'subtitle1'}>Услуги</Typography>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className={s.navItem}>*/}
      {/*  <Link href={'/projects'}>*/}
      {/*    <Typography variant={'subtitle1'}>Наши проекты</Typography>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className={s.navItem}>*/}
      {/*  <Link href={'/contacts'}>*/}
      {/*    <Typography variant={'subtitle1'}>Контакты</Typography>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {mappedNavigation}
    </nav>
  )
}
