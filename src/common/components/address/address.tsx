import { ContactsProps } from '@/common/components/telephone/telephone'
import { Typography } from '@/common/components/typography/typography'
import { HouseIcon } from '@/common/icons/houseIcon'
import { LetterIcon } from '@/common/icons/letterIcon'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './address.module.scss'

export const Address = ({ height = '40px', width = '40px', withBg = false }: ContactsProps) => {
  const contactClass = clsx(s.wrapper, withBg && s.withBg)

  return (
    <div>
      <Link
        className={contactClass}
        href={
          'https://yandex.ru/maps/12/smolensk/house/ulitsa_nikolayeva_51/Z0sYdgVkQE0CQFtufXt2cXlrbA==/?ll=32.024985%2C54.770588&z=16'
        }
      >
        <div className={s.iconWrapper}>
          <HouseIcon height={height} width={width} />
        </div>
        <Typography variant={'subtitle2'}>
          214013, Смоленская область, город Смоленск, ул. Николаева 51, офис А 49
        </Typography>
      </Link>
    </div>
  )
}
