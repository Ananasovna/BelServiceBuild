import { NavItem } from '@/components/navbar/navItem'

import s from './navbar.module.scss'

import { clsx } from 'clsx'
import { MenuIcon } from '@/common/icons/menuIcon'
import { useState } from 'react'

export type NavItemType = {
  id: number
  path: string
  title: string
}

type NavbarType = {
  isActive: boolean
  setIsActive: (value: boolean) => void
}
export const Navbar = ({ isActive, setIsActive }: NavbarType) => {
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false)
  console.log(isSubMenu)
  const navigation: NavItemType[] = [
    { id: 1, path: '/', title: 'Главная' },
    { id: 2, path: '/about', title: 'О нас' },
    { id: 3, path: '', title: 'Услуги' },
    { id: 4, path: '/projects', title: 'Наши проекты' },
    { id: 5, path: '/contacts', title: 'Контакты' },
  ]

  const services: NavItemType[] = [
    { id: 1, path: '/renovation', title: 'Комплексный ремонт' },
    { id: 2, path: '/maintenance', title: 'Комплексное обслуживание' },
    { id: 3, path: '/design', title: 'Проектирование' },
  ]

  const closeMenu = () => clickBtn(false)
  const openSubMenu = () => setIsSubMenu(true)
  const closeSubMenu = () => setIsSubMenu(false)

  const mappedSubMenu = services.map(el => (
    <div className={s.navItemWrapper} onClick={closeSubMenu}>
      <NavItem key={el.id} navItem={el} />
    </div>
  ))

  const mappedNavigation = navigation.map(el =>
    el.title === 'Услуги' ? (
      <div className={s.navItemWrapper}>
        <NavItem key={el.id} navItem={el} onClick={openSubMenu} />
        <div onClick={closeSubMenu} className={clsx(s.invisible, isSubMenu && s.subMenu)}>
          {mappedSubMenu}
        </div>
      </div>
    ) : (
      <div className={s.navItemWrapper} onClick={closeMenu}>
        <NavItem key={el.id} navItem={el} />
      </div>
    )
  )

  const clickBtn = (value: boolean) => {
    setIsActive(value)
  }

  return (
    <div className={clsx(s.wrapper, isActive && s.wrapperMobile)} onBlur={() => clickBtn(false)}>
      <div className={clsx(s.burgerMenu)} onClick={() => clickBtn(!isActive)}>
        <MenuIcon />
      </div>
      <nav className={clsx(s.nav, isActive && s.navMobile)}>{mappedNavigation}</nav>
    </div>
  )
}
