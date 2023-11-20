import { Typography } from '@/common/components/typography/typography'
import { TelephoneIcon } from '@/common/icons/telephoneIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './telephone.module.scss'

export type ContactsProps = {
  height?: string
  width?: string
  withBg?: boolean
  className?: string
}

export const Telephone = ({
  height = '100%',
  width = 'auto',
  withBg = false,
  className,
}: ContactsProps) => {
  const contactClass = clsx(s.wrapperLink, withBg && s.withBg)

  const titleClass = clsx(s.title, className)

  return (
    <div className={s.wrapper}>
      <Link className={contactClass} href={'tel:+79935635154'}>
        <div className={s.iconWrapper}>
          <TelephoneIcon height={height} width={width} />
        </div>
        <Typography className={titleClass} variant={'subtitle2'}>
          +7 (993) 563 51 54
        </Typography>
      </Link>
    </div>
  )
}
