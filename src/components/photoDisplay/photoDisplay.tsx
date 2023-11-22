'use client'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './photoDisplay.module.scss'

import mainBg from '../../../public/image/mainBg6.jpg'
import { clsx } from 'clsx'
import { useState } from 'react'
export const PhotoDisplay = () => {
  const [animation, setAnimation] = useState<boolean>(false)

  return (
    <div className={s.wrapper}>
      <div className={clsx(s.display, animation && s.animationDisplay)}>
        <div className={s.bgWrapper}>
          <Image
            onLoadingComplete={() => setAnimation(true)}
            priority={true}
            alt={'Фоновое изображение'}
            className={s.mainBg}
            src={mainBg}
          />
        </div>
        <Typography className={clsx(s.title, animation && s.animationTitle)} variant={'large'}>
          Обслуживание и ремонт коммерческих помещений
        </Typography>
      </div>
    </div>
  )
}
