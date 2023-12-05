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
