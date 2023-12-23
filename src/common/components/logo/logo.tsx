import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

import s from '@/common/components/logo/logo.module.scss'

import logo from '../../../../public/image/logo.jpg'

export const Logo = () => {
  return (
    <Link className={s.logoWrapper} href={'/'}>
      <Image alt={'Логотип компании'} className={s.logo} sizes={'w-[100px] h-[100px]'} src={logo} />
      <Typography variant={'h1'}>BelServiceBuild</Typography>
    </Link>
  )
}
