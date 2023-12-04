'use client'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './photoDisplay.module.scss'

import { clsx } from 'clsx'
import { useState } from 'react'
import { PhotoDisplayType } from '@/common/data/photoDisplayData'

type PhotoDisplayProps = {
  data: PhotoDisplayType
}
export const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  const [animation, setAnimation] = useState<boolean>(false)

  return (
    <div className={s.wrapper}>
      <div className={clsx(s.display, animation && s.animationDisplay)}>
        <div className={s.bgWrapper}>
          <Image
            onLoad={() => setAnimation(true)}
            priority={true}
            alt={'Фоновое изображение'}
            className={s.mainBg}
            src={data.img}
          />
        </div>
        <Typography className={clsx(s.title, animation && s.animationTitle)} variant={'large'}>
          {data.title}
        </Typography>
      </div>
    </div>
  )
}
