'use client'
import { useEffect, useState } from 'react'

import { Typography } from '@/common/components/typography/typography'
import { PhotoDisplayType } from '@/common/data/photoDisplayData'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './photoDisplay.module.scss'

type PhotoDisplayProps = {
  data: PhotoDisplayType
}
export const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  const [animation, setAnimation] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true)
    }, 1000)
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={clsx(s.display, animation && s.animationDisplay)}>
        <div className={s.bgWrapper}>
          <Image
            alt={'Фоновое изображение'}
            className={s.mainBg}
            sizes={'w-full h-[450p]'}
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
