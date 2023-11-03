import logo from '@/../public/image/logo.jpg'
import { Telephone } from '@/common/components/contacts/telephone/telephone'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logoWrapper}>
        <Image alt={'Логотип компании'} className={s.logo} src={logo} />
        <Typography variant={'large'}>BelServiceBuild</Typography>
      </div>

      <Telephone />
    </div>
  )
}
