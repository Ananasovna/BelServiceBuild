import { Typography } from '@/common/components/typography/typography'
import { TelephoneIcon } from '@/common/icons/telephoneIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './telephone.module.scss'

type TelephoneProps = {
  height?: string
  width?: string
  withBg?: boolean
  className?: string
  phone: string
  phoneHref: string
}

export const Telephone = ({ withBg = false, className, phone, phoneHref }: TelephoneProps) => {
  const contactClass = clsx(s.wrapperLink, withBg && s.withBg)

  const titleClass = clsx(s.title, className)

  return (
    <div className={s.wrapper}>
      <Link className={contactClass} href={phoneHref}>
        <div className={s.iconWrapper}>
          <TelephoneIcon />
        </div>
        <Typography className={titleClass} variant={'subtitle2'}>
          {phone}
        </Typography>
      </Link>
    </div>
  )
}
