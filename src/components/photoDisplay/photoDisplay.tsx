'use client'
import { useEffect, useState } from 'react'

import { Typography } from '@/common/components/typography/typography'
import { clsx } from 'clsx'
import Image, { StaticImageData } from 'next/image'

import s from './photoDisplay.module.scss'

// Импорт фото для фона.Для изменения фото нужно изменить путь импорта фото, изменив название фото после последнего знака / в пути импорта файла
import mainBg from '../../../public/image/mainBg6.jpg'

export type PhotoDisplayType = {
  img: StaticImageData
  title: string
}

//Данные для первого баннера на главной странице
export const photoDisplayData: PhotoDisplayType = {
  //Фон для размещения на баннере
  img: mainBg,
  //Текст для размещения на баннере
  title: 'Обслуживание и ремонт коммерческих помещений',
}

export const PhotoDisplay = () => {
  const [animation, setAnimation] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true)
    }, 300)
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={clsx(s.display, animation && s.animationDisplay)}>
        <div className={s.bgWrapper}>
          <Image
            alt={'Фоновое изображение'}
            className={s.mainBg}
            sizes={'w-full h-[450p]'}
            src={photoDisplayData.img}
          />
        </div>
        <Typography className={clsx(s.title, animation && s.animationTitle)} variant={'large'}>
          {photoDisplayData.title}
        </Typography>
      </div>
    </div>
  )
}
