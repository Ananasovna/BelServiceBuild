import { Typography } from '@/common/components/typography/typography'
import { TelephoneIcon } from '@/common/icons/telephoneIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './telephone.module.scss'

export type ContactsProps = {
  height?: string
  width?: string
  withBg?: boolean
}

export const Telephone = ({ height = '20px', width = '20px', withBg = false }: ContactsProps) => {
  const contactClass = clsx(s.wrapper, withBg && s.withBg)

  return (
    <div>
      <Link className={contactClass} href={'tel:+79935635154'}>
        <div className={s.iconWrapper}>
          <TelephoneIcon height={height} width={width} />
        </div>
        <Typography variant={'subtitle2'}>+7 (993) 563 51 54</Typography>
      </Link>
    </div>
  )
}
