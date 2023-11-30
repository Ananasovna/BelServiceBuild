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
import { DoorsIcon } from '@/common/icons/doorsIcon'
import { ExitIcon } from '@/common/icons/exitIcon'
import { FireproofIcon } from '@/common/icons/fireproofIcon'
export const Services = ({ children }: ServicesProps) => {
  return (
    <Container>
      <TitleContainer className={s.title} variant={'h2'}>
        Услуги
      </TitleContainer>

      <div className={s.services}>
        <ServiceItem title={'1. Демонтаж'}>
          <CartIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'2. Электромонтаж'}>
          <ElectricityIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'3. Сантехнические работы'}>
          <PlumbingIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'4. Проектирование'}>
          <ProjectIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'5. Отделочные работы'}>
          <RollerIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'6. Отопление, вентиляция и кондиционирование'}>
          <SnowflakeIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'7. Монтаж и изготовление противопожарных дверей'}>
          <DoorsIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'8. Монтаж аварийного освещения и указателей путей эвакуации'}>
          <ExitIcon color={'#ce5d00'} />
        </ServiceItem>
        <ServiceItem title={'9. Обработка огнезащитным составом деревянных конструкций'}>
          <FireproofIcon color={'#ce5d00'} />
        </ServiceItem>
      </div>
      {children}
    </Container>
  )
}
