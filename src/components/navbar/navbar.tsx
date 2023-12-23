'use client'

import { useState } from 'react'

import { MenuIcon } from '@/common/icons/menuIcon'
import { NavItem } from '@/components/navbar/navItem'
import { clsx } from 'clsx'
import { useOutsideClickRef } from 'rooks'

import s from './navbar.module.scss'

export type NavItemType = {
  id: number
  path: string
  title: string
}

export type NavbarDataType = {
  menu: NavItemType[]
  subMenu: NavItemType[]
}

//ДАнные для меню навигации
export const navbarData: NavbarDataType = {
  //ДАнные для основного меню
  menu: [
    { id: 1, path: '/', title: 'Главная' },
    { id: 2, path: '/about', title: 'О нас' },
    { id: 3, path: '', title: 'Услуги' },
    { id: 4, path: '/contacts', title: 'Контакты' },
    /*Раскомментировать строку ниже при добавлении раздела наши проекты*/
    // { id: 5, path: '/projects', title: 'Наши проекты' },
  ],
  //ДАнные для подменю, которое открывается при нажатии на вкладку услуги
  subMenu: [
    { id: 1, path: '/renovation', title: 'Комплексный ремонт' },
    { id: 2, path: '/maintenance', title: 'Комплексное обслуживание' },
    /*Раскомментировать строку ниже при добавлении страницы 'Проектирование'*/
    // { id: 3, path: '/design', title: 'Проектирование' },
  ],
}

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false)

  const closeMenus = () => {
    setIsSubMenu(false)
    setIsActive(false)
  }
  const [ref] = useOutsideClickRef(closeMenus)

  const openSubMenu = () => setIsSubMenu(true)

  const clickBtn = () => {
    setIsActive(!isActive)
    setIsSubMenu(false)
  }

  return (
    <div className={clsx(s.wrapper, isActive && s.wrapperMobile)}>
      <div className={clsx(s.burgerMenu)} onClick={clickBtn}>
        <MenuIcon height={'20px'} width={'20px'} />
      </div>
      <nav className={clsx(s.nav, isActive && s.navMobile)} ref={ref}>
        {navbarData.menu.map(el =>
          el.title === 'Услуги' ? (
            <div className={s.navItemWrapper} key={el.id}>
              <NavItem className={s.navItem} navItem={el} onClick={openSubMenu} />
              <div className={clsx(s.invisible, isSubMenu && s.subMenu)} onClick={closeMenus}>
                {navbarData.subMenu.map(el => (
                  <div className={s.navItemWrapper} key={el.id}>
                    <NavItem className={s.navItem} navItem={el} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={s.navItemWrapper} key={el.id} onClick={closeMenus}>
              <NavItem className={s.navItem} navItem={el} />
            </div>
          )
        )}
      </nav>
    </div>
  )
}
