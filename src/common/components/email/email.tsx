import { Typography } from '@/common/components/typography/typography'
import { LetterIcon } from '@/common/icons/letterIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './email.module.scss'

type EmailProps = {
  height?: string
  width?: string
  withBg?: boolean
  className?: string
  email: string
  emailHref: string
}

export const Email = ({
  height = '20px',
  width = '20px',
  withBg = false,
  email,
  emailHref,
}: EmailProps) => {
  const contactClass = clsx(s.wrapper, withBg && s.withBg)

  return (
    <div>
      <Link className={contactClass} href={emailHref}>
        <div className={s.iconWrapper}>
          <LetterIcon height={height} width={width} />
        </div>
        <Typography variant={'subtitle2'}>{email}</Typography>
      </Link>
    </div>
  )
}
