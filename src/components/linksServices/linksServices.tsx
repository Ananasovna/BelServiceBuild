import renovation from '@/../public/image/complexRenovation.jpg'
import service from '@/../public/image/complexServices.jpg'
import design from '@/../public/image/design.jpg'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

import s from './linksServices.module.scss'

export const LinksServices = () => {
  return (
    <div className={s.wrapper}>
      <Link className={s.linkContainer} href={'/renovation'}>
        <div className={s.photoWrapper}>
          <Image
            alt={'Изображение ремонта'}
            className={s.photo}
            placeholder={'blur'}
            src={renovation}
          />
        </div>
        <Typography className={s.title} variant={'h3'}>
          Комплексный ремонт
        </Typography>
      </Link>
      <Link className={s.linkContainer} href={'/maintenance'}>
        <div className={s.photoWrapper}>
          <Image
            alt={'Изображение обслуживания'}
            className={s.photo}
            placeholder={'blur'}
            src={service}
          />
        </div>
        <Typography className={s.title} variant={'h3'}>
          Комплексное обслуживание
        </Typography>
      </Link>
      <Link className={s.linkContainer} href={'/about'}>
        <div className={s.photoWrapper}>
          <Image
            alt={'Изображение проектирования'}
            className={s.photo}
            placeholder={'blur'}
            src={design}
          />
        </div>
        <Typography className={s.title} variant={'h3'}>
          Проектирование
        </Typography>
      </Link>
    </div>
  )
}
