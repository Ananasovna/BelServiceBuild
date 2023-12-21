import { Typography } from '@/common/components/typography/typography'
import { TelephoneIcon } from '@/common/icons/telephoneIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './telephone.module.scss'

type TelephoneProps = {
  className?: string
  height?: string
  phone: string
  phoneHref: string
  width?: string
  withBg?: boolean
}

export const Telephone = ({ className, phone, phoneHref, withBg = false }: TelephoneProps) => {
  return (
    <div className={s.wrapper}>
      <Link className={clsx(s.wrapperLink, withBg && s.withBg)} href={phoneHref}>
        <div className={s.iconWrapper}>
          <TelephoneIcon />
        </div>
        <Typography className={clsx(s.title, className)} variant={'subtitle2'}>
          {phone}
        </Typography>
      </Link>
    </div>
  )
}
