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
  data: ServicesDataType
}

import { ReactNode } from 'react'

import { TitleContainer } from '@/common/components/titleContainer/titleContainer'

import s from './services.module.scss'
import { ServicesDataType } from '@/common/data/servicesData'

export const Services = ({ children, data }: ServicesProps) => {
  const mappedServices = data.servicesList.map(el => {
    return (
      <ServiceItem key={el.id} title={`${el.id}. ${el.text}`}>
        {el.icon}
      </ServiceItem>
    )
  })

  return (
    <section>
      <Container className={s.servicesContainer}>
        <TitleContainer className={s.title} variant={'h2'}>
          {data.title}
        </TitleContainer>
        <div className={s.services}>{mappedServices}</div>
        {children}
      </Container>
    </section>
  )
}
