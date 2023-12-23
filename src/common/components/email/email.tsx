import { Typography } from '@/common/components/typography/typography'
import { LetterIcon } from '@/common/icons/letterIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './email.module.scss'

type EmailProps = {
  className?: string
  email: string
  emailHref: string
  height?: string
  width?: string
  withBg?: boolean
}

export const Email = ({ email, emailHref, withBg = false }: EmailProps) => {
  const contactClass = clsx(s.wrapper, withBg && s.withBg)

  return (
    <div>
      <Link className={contactClass} href={emailHref}>
        <div className={s.iconWrapper}>
          <LetterIcon />
        </div>
        <Typography variant={'subtitle2'}>{email}</Typography>
      </Link>
    </div>
  )
}
