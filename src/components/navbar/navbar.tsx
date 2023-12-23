'use client'

import { useState } from 'react'

import { navbarData } from '@/common/data/navbarData'
import { MenuIcon } from '@/common/icons/menuIcon'
import { NavItem } from '@/components/navbar/navItem'
import { clsx } from 'clsx'
import { useOutsideClickRef } from 'rooks'

import s from './navbar.module.scss'

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isSubMenu, setIsSubMenu] = useState<boolean>(false)

  const closeMenus = () => {
    setIsSubMenu(false)
    setIsActive(false)
  }
  const [ref] = useOutsideClickRef(closeMenus)

  const { menu, subMenu } = { ...navbarData }

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
        {menu.map(el =>
          el.title === 'Услуги' ? (
            <div className={s.navItemWrapper} key={el.id}>
              <NavItem className={s.navItem} navItem={el} onClick={openSubMenu} />
              <div className={clsx(s.invisible, isSubMenu && s.subMenu)} onClick={closeMenus}>
                {subMenu.map(el => (
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
