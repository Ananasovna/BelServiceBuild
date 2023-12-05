import { NavItem } from '@/components/navbar/navItem'

import s from './navbar.module.scss'

import { clsx } from 'clsx'
import { MenuIcon } from '@/common/icons/menuIcon'
import { useState } from 'react'
import { useOutsideClickRef } from 'rooks'
import { navbarData } from '@/common/data/navbarData'

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

  const mappedSubMenu = subMenu.map(el => (
    <div key={el.id} className={s.navItemWrapper}>
      <NavItem className={s.navItem} navItem={el} />
    </div>
  ))

  const mappedNavigation = menu.map(el =>
    el.title === 'Услуги' ? (
      <div key={el.id} className={s.navItemWrapper}>
        <NavItem className={s.navItem} navItem={el} onClick={openSubMenu} />
        <div onClick={closeMenus} className={clsx(s.invisible, isSubMenu && s.subMenu)}>
          {mappedSubMenu}
        </div>
      </div>
    ) : (
      <div key={el.id} className={s.navItemWrapper} onClick={closeMenus}>
        <NavItem className={s.navItem} navItem={el} />
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
        <MenuIcon height={'20px'} width={'20px'} />
      </div>
      <nav ref={ref} className={clsx(s.nav, isActive && s.navMobile)}>
        {mappedNavigation}
      </nav>
    </div>
  )
}
