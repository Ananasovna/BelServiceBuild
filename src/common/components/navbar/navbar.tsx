import { NavItem } from '@/common/components/navbar/navItem'

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
    { id: 3, path: '', title: 'Услуги' },
    { id: 4, path: '/projects', title: 'Наши проекты' },
    { id: 5, path: '/contacts', title: 'Контакты' },
  ]

  const mappedNavigation = navigation.map(el => <NavItem key={el.id} navItem={el}></NavItem>)

  return <nav className={s.wrapper}>{mappedNavigation}</nav>
}
