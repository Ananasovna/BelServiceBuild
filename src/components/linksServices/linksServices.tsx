import { Typography } from '@/common/components/typography/typography'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import s from './linksServices.module.scss'

import renovation from '../../../public/image/complexRenovation.jpg'
import service from '../../../public/image/complexServices.jpg'
import design from '../../../public/image/design.jpg'

type LinkServiceType = {
  alt: string
  href: string
  id: number
  img: StaticImageData
  title: string
}

export type LinksServicesDataType = LinkServiceType[]

//Данные для раздела с фото-ссылками на услуги
export const linksServicesData: LinksServicesDataType = [
  // Массив объектов данных для каждой фото-ссылки, для изменения фото нужно изменить импорт соответствующего фото вверху страницы
  {
    alt: 'Изображение ремонта',
    href: '/renovation',
    id: 1,
    img: renovation,
    title: 'Комплексный ремонт',
  },
  {
    alt: 'Изображение обслуживания',
    href: '/maintenance',
    id: 2,
    img: service,
    title: 'Комплексное обслуживание',
  },
  {
    alt: 'Изображение проектирования',
    href: '/about',
    id: 3,
    img: design,
    title: 'Проектирование',
  },
]

export const LinksServices = () => {
  return (
    <div className={s.wrapper}>
      {linksServicesData.map(el => {
        return (
          <Link className={s.linkContainer} href={el.href} key={el.id}>
            <div className={s.photoWrapper}>
              <Image
                alt={el.alt}
                className={s.photo}
                placeholder={'blur'}
                sizes={'w-[300px] h-[300px]'}
                src={el.img}
              />
            </div>
            <Typography className={s.title} variant={'h3'}>
              {el.title}
            </Typography>
          </Link>
        )
      })}
    </div>
  )
}
