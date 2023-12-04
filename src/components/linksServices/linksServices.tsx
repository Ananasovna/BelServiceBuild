import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

import s from './linksServices.module.scss'
import { LinksServicesDataType } from '@/common/data/linksServicesData'

type LinksServicesProps = {
  data: LinksServicesDataType
}

export const LinksServices = ({ data }: LinksServicesProps) => {
  const mappedServices = data.map(el => {
    return (
      <Link key={el.id} className={s.linkContainer} href={el.href}>
        <div className={s.photoWrapper}>
          <Image
            alt={el.alt}
            className={s.photo}
            placeholder={'blur'}
            priority={true}
            src={el.img}
          />
        </div>
        <Typography className={s.title} variant={'h3'}>
          {el.title}
        </Typography>
      </Link>
    )
  })

  return <div className={s.wrapper}>{mappedServices}</div>
}
