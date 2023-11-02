import logo from '@/../public/image/logo.jpg'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Image alt={'Логотип компании'} className={s.logo} src={logo} />
      </div>
      <Typography variant={'large'}>BelServiceBuild</Typography>
    </div>
  )
}
