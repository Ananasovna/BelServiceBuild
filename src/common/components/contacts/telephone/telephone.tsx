import { Typography } from '@/common/components/typography/typography'
import { TelephoneIcon } from '@/common/icons/telephoneIcon'
import Link from 'next/link'

import s from './telephone.module.scss'

export const Telephone = () => {
  return (
    <div>
      <Link className={s.wrapper} href={'tel:+79622575839'}>
        <TelephoneIcon height={'20px'} width={'20px'} />
        <Typography variant={'subtitle2'}>+7 (000) 000 00 00</Typography>
      </Link>
    </div>
  )
}
