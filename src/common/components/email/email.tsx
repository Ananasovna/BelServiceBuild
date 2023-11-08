import { ContactsProps } from '@/common/components/telephone/telephone'
import { Typography } from '@/common/components/typography/typography'
import { LetterIcon } from '@/common/icons/letterIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './email.module.scss'

export const Email = ({ height = '20px', width = '20px', withBg = false }: ContactsProps) => {
  const contactClass = clsx(s.wrapper, withBg && s.withBg)

  return (
    <div>
      <Link className={contactClass} href={'mailto:belsbinfo@gmail.com'}>
        <div className={s.iconWrapper}>
          <LetterIcon height={height} width={width} />
        </div>
        <Typography variant={'subtitle2'}>belsbinfo@gmail.com</Typography>
      </Link>
    </div>
  )
}
