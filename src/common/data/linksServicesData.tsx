// Импорты фото.Для изменения фото нужно изменить путь импорта фото, изменив название фото после последнего знака / в пути импорта файла
import renovation from '../../../public/image/complexRenovation.jpg'
import service from '../../../public/image/complexServices.jpg'
import design from '../../../public/image/design.jpg'
import { StaticImageData } from 'next/image'

type LinkServiceType = {
  id: number
  title: string
  href: string
  img: StaticImageData
  alt: string
}

export type LinksServicesDataType = LinkServiceType[]

//Данные для раздела с фото-ссылками на услуги
export const linksServicesData: LinksServicesDataType = [
  // Массив объектов данных для каждой фото-ссылки, для изменения фото нужно изменить импорт соответствующего фото вверху страницы
  {
    id: 1,
    title: 'Комплексный ремонт',
    href: '/renovation',
    img: renovation,
    alt: 'Изображение ремонта',
  },
  {
    id: 2,
    title: 'Комплексное обслуживание',
    href: '/maintenance',
    img: service,
    alt: 'Изображение обслуживания',
  },
  {
    id: 3,
    title: 'Проектирование',
    href: '/about',
    img: design,
    alt: 'Изображение проектирования',
  },
]
