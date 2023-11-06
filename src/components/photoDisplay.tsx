import mainBg from '@/../public/image/mainBg.jpg'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './photoDisplay.module.scss'
export const PhotoDisplay = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.bgWrapper}>
        <Image alt={'Фоновое изображение'} className={s.mainBg} placeholder={'blur'} src={mainBg} />
      </div>
      <Typography className={s.title} variant={'large'}>
        Обслуживание и ремонт коммерческих помещений
      </Typography>
    </div>
  )
}
