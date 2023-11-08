import { Container } from '@/common/components/container/container'
import { Typography } from '@/common/components/typography/typography'
import { CartIcon } from '@/common/icons/cartIcon'
import { ElectricityIcon } from '@/common/icons/electricityIcon'
import { PlumbingIcon } from '@/common/icons/plumbingicon'
import { ProjectIcon } from '@/common/icons/projectIcon'
import { RollerIcon } from '@/common/icons/rollerIcon'
import { SnowflakeIcon } from '@/common/icons/snowflakeIcon'
import { ServiceItem } from '@/components/services/serviceItem/serviceItem'

type ServicesProps = {
  children?: ReactNode
}

import { ReactNode } from 'react'

import { TitleContainer } from '@/common/components/titleContainer/titleContainer'

import s from './services.module.scss'
export const Services = ({ children }: ServicesProps) => {
  return (
    <Container>
      <TitleContainer>
        <Typography className={s.title} variant={'h1'}>
          Услуги
        </Typography>
      </TitleContainer>

      <div className={s.services}>
        <ServiceItem title={'1. Демонтажные работы'}>
          <CartIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'2. Электромонтажные работы'}>
          <ElectricityIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'3. Сантехнические работы'}>
          <PlumbingIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'4. Проектировочные работы'}>
          <ProjectIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'5. Отделочные работы'}>
          <RollerIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'6. Отопление, вентиляция и кондиционирование'}>
          <SnowflakeIcon color={'#ce5d00'} />
        </ServiceItem>
      </div>
      {children}
    </Container>
  )
}
