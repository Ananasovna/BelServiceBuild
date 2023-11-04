import { Container } from '@/common/components/container/container'
import { ServiceItem } from '@/common/components/services/serviceItem/serviceItem'
import { Typography } from '@/common/components/typography/typography'
import { CartIcon } from '@/common/icons/cartIcon'
import { ElectricityIcon } from '@/common/icons/electricityIcon'
import { PlumbingIcon } from '@/common/icons/plumbingicon'
import { ProjectIcon } from '@/common/icons/projectIcon'
import { RollerIcon } from '@/common/icons/rollerIcon'
import { SnowflakeIcon } from '@/common/icons/snowflakeIcon'

type ServicesProps = {
  children?: ReactNode
}

import { ReactNode } from 'react'

import s from './services.module.scss'
export const Services = ({ children }: ServicesProps) => {
  return (
    <div>
      <Container className={s.servicesContainer}>
        <div className={s.titleWrapper}>
          <Typography className={s.title} variant={'large'}>
            Услуги
          </Typography>
          <div className={s.underline}></div>
        </div>

        <div className={s.services}>
          <ServiceItem title={'1. Демонтажные работы'}>
            <CartIcon />
          </ServiceItem>
          <ServiceItem title={'2. Электромонтажные работы'}>
            <ElectricityIcon />
          </ServiceItem>
          <ServiceItem title={'3. Сантехнические работы'}>
            <PlumbingIcon />
          </ServiceItem>
          <ServiceItem title={'4. Проектировочные работы'}>
            <ProjectIcon />
          </ServiceItem>
          <ServiceItem title={'5. Отделочные работы'}>
            <RollerIcon />
          </ServiceItem>
          <ServiceItem title={'6. Отопление, вентиляция и кондиционирование'}>
            <SnowflakeIcon />
          </ServiceItem>
        </div>
        {children}
      </Container>
    </div>
  )
}
