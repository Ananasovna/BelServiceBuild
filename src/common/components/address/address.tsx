import { Typography } from '@/common/components/typography/typography'
import { HouseIcon } from '@/common/icons/houseIcon'
import { clsx } from 'clsx'

import s from './address.module.scss'

type AddressProps = {
  height?: string
  width?: string
  withBg?: boolean
  className?: string
  address: string
}

export const Address = ({
  height = '40px',
  width = '40px',
  withBg = false,
  address,
}: AddressProps) => {
  const contactClass = clsx(s.wrapper, withBg && s.withBg)

  return (
    <div>
      <div className={contactClass}>
        <div className={s.iconWrapper}>
          <HouseIcon height={height} width={width} />
        </div>
        <Typography variant={'subtitle2'}>{address}</Typography>
      </div>
    </div>
  )
}
