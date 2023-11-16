'use client'
import MenuIcon from '@mui/icons-material/Menu'

import { Container } from '@/common/components/container/container'
import { Logo } from '@/common/components/logo/logo'
import { Telephone } from '@/common/components/telephone/telephone'

import s from './header.module.scss'
import { AppBar, Box, Button, IconButton, Menu, Toolbar } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { NavItem } from '@/components/navbar/navItem'
import { clsx } from 'clsx'

export type NavItemType = {
  id: number
  path: string
  title: string
}

const pages: NavItemType[] = [
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

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar style={{ background: '#fff' }} className={clsx(s.appBar, s.MuiPaperRoot)}>
      <Container className={s.headerContainer}>
        <Toolbar className={s.toolbar} disableGutters>
          <Logo />
          <Telephone />
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page =>
                page.title === 'Услуги' ? (
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      className={s.menuButton}
                    >
                      <NavItem key={page.id} navItem={page} />
                    </Button>
                  </div>
                ) : (
                  <NavItem key={page.id} navItem={page} />
                )
              )}
            </Menu>
          </Box>
          <Box
            className={clsx(s.box, s.navbar)}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map(page =>
              page.title === 'Услуги' ? (
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className={s.menuButton}
                  >
                    <NavItem key={page.id} navItem={page} />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    classes={s}
                  >
                    {services.map(page => (
                      <NavItem key={page.id} onClick={handleClose} navItem={page} />
                    ))}
                  </Menu>
                </div>
              ) : (
                <NavItem key={page.id} navItem={page} />
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
