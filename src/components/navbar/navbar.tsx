import { NavItem } from '@/components/navbar/navItem'

import s from './navbar.module.scss'

import { clsx } from 'clsx'
import { MenuIcon } from '@/common/icons/menuIcon'
import { useState } from 'react'
import { useOutsideClickRef } from 'rooks'

export type NavItemType = {
  id: number
  path: string
  title: string
}

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false)

  const closeMenus = () => {
    setIsSubMenu(false)
    setIsActive(false)
  }
  const [ref] = useOutsideClickRef(closeMenus)

  const navigation: NavItemType[] = [
    { id: 1, path: '/', title: 'Главная' },
    { id: 2, path: '/about', title: 'О нас' },
    { id: 3, path: '', title: 'Услуги' },
    /*Раскомментировать строку ниже при добавлении раздела наши проекты*/
    // { id: 4, path: '/projects', title: 'Наши проекты' },
    { id: 5, path: '/contacts', title: 'Контакты' },
  ]

  const services: NavItemType[] = [
    { id: 1, path: '/renovation', title: 'Комплексный ремонт' },
    { id: 2, path: '/maintenance', title: 'Комплексное обслуживание' },
    /*Раскомментировать строку ниже при добавлении страницы 'Проектирование'*/
    // { id: 3, path: '/design', title: 'Проектирование' },
  ]

  const openSubMenu = () => setIsSubMenu(true)

  const mappedSubMenu = services.map(el => (
    <div className={s.navItemWrapper}>
      <NavItem key={el.id} navItem={el} />
    </div>
  ))

  const mappedNavigation = navigation.map(el =>
    el.title === 'Услуги' ? (
      <div className={s.navItemWrapper}>
        <NavItem key={el.id} navItem={el} onClick={openSubMenu} />
        <div onClick={closeMenus} className={clsx(s.invisible, isSubMenu && s.subMenu)}>
          {mappedSubMenu}
        </div>
      </div>
    ) : (
      <div className={s.navItemWrapper} onClick={closeMenus}>
        <NavItem key={el.id} navItem={el} />
      </div>
    )
  )

  const clickBtn = () => {
    setIsActive(!isActive)
    setIsSubMenu(false)
  }

  return (
    <div className={clsx(s.wrapper, isActive && s.wrapperMobile)}>
      <div className={clsx(s.burgerMenu)} onClick={clickBtn}>
        <MenuIcon />
      </div>
      <nav ref={ref} className={clsx(s.nav, isActive && s.navMobile)}>
        {mappedNavigation}
      </nav>
    </div>
  )
}
