import { Container } from '@/common/components/container/container'
import { ServiceItem } from '@/common/components/serviceItem/serviceItem'
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

import s from './page.module.scss'
const Services = ({ children }: ServicesProps) => {
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
          <ServiceItem>
            <CartIcon />
            <Typography variant={'subtitle1'}>1. Демонтажные работы</Typography>
          </ServiceItem>
          <ServiceItem>
            <ElectricityIcon />
            <Typography variant={'subtitle1'}>2. Электромонтажные работы</Typography>
          </ServiceItem>
          <ServiceItem>
            <PlumbingIcon />
            <Typography variant={'subtitle1'}>3. Сантехнические работы</Typography>
          </ServiceItem>
          <ServiceItem>
            <ProjectIcon />
            <Typography variant={'subtitle1'}>4. Проектировочные работы</Typography>
          </ServiceItem>
          <ServiceItem>
            <RollerIcon />
            <Typography variant={'subtitle1'}>5. Отделочные работы</Typography>
          </ServiceItem>
          <ServiceItem>
            <SnowflakeIcon width={'80px'} />
            <Typography variant={'subtitle1'}>
              6. Отопление, вентиляция и кондиционирование
            </Typography>
          </ServiceItem>
        </div>
        {children}
      </Container>
    </div>
  )
}

export default Services
