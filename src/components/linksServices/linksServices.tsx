import { Typography } from '@/common/components/typography/typography'
import { LinksServicesDataType } from '@/common/data/linksServicesData'
import Image from 'next/image'
import Link from 'next/link'

import s from './linksServices.module.scss'

type LinksServicesProps = {
  data: LinksServicesDataType
}

export const LinksServices = ({ data }: LinksServicesProps) => {
  return (
    <div className={s.wrapper}>
      {data.map(el => {
        return (
          <Link className={s.linkContainer} href={el.href} key={el.id}>
            <div className={s.photoWrapper}>
              <Image
                alt={el.alt}
                className={s.photo}
                placeholder={'blur'}
                sizes={'w-[300px] h-[300px]'}
                src={el.img}
              />
            </div>
            <Typography className={s.title} variant={'h3'}>
              {el.title}
            </Typography>
          </Link>
        )
      })}
    </div>
  )
}
