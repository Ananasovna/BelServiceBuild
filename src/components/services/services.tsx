import { ReactNode } from 'react'

import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { CartIcon } from '@/common/icons/cartIcon'
import { DoorsIcon } from '@/common/icons/doorsIcon'
import { ElectricityIcon } from '@/common/icons/electricityIcon'
import { ExitIcon } from '@/common/icons/exitIcon'
import { FireproofIcon } from '@/common/icons/fireproofIcon'
import { PlumbingIcon } from '@/common/icons/plumbingicon'
import { ProjectIcon } from '@/common/icons/projectIcon'
import { RollerIcon } from '@/common/icons/rollerIcon'
import { SnowflakeIcon } from '@/common/icons/snowflakeIcon'
import { ServiceItem } from '@/components/services/serviceItem/serviceItem'

import s from './services.module.scss'

type ServicesProps = {
  children?: ReactNode
}

type ServiceType = {
  icon: ReactNode
  id: number
  text: string
}

export type ServicesDataType = {
  servicesList: ServiceType[]
  title: string
}

//Данные для раздела "Услуги"
export const servicesData: ServicesDataType = {
  // Список услуг, чтобы изменить пункт - заменить текст в кавычках, при добавлении новых пунктов добавить объект и присвоить ему номер id, при удалении услуги удалить весь объект услуги целиком (с фигурными скобками)
  servicesList: [
    { icon: <CartIcon />, id: 1, text: 'Демонтаж' },
    {
      icon: <ElectricityIcon />,
      id: 2,
      text: 'Электромонтаж',
    },
    {
      icon: <PlumbingIcon />,
      id: 3,
      text: 'Сантехнические работы',
    },
    { icon: <ProjectIcon />, id: 4, text: 'Проектирование' },
    {
      icon: <RollerIcon />,
      id: 5,
      text: 'Отделочные работы',
    },
    {
      icon: <SnowflakeIcon />,
      id: 6,
      text: 'Отопление, вентиляция и кондиционирование',
    },
    {
      icon: <DoorsIcon />,
      id: 7,
      text: 'Монтаж и изготовление противопожарных дверей',
    },
    {
      icon: <ExitIcon />,
      id: 8,
      text: 'Монтаж аварийного освещения и указателей путей эвакуации',
    },
    {
      icon: <FireproofIcon />,
      id: 9,
      text: 'Обработка огнезащитным составом деревянных конструкций',
    },
  ],
  // Заголовок раздела
  title: 'Услуги',
}

export const Services = ({ children }: ServicesProps) => {
  return (
    <section>
      <Container className={s.servicesContainer}>
        <TitleContainer className={s.title} variant={'h2'}>
          {servicesData.title}
        </TitleContainer>
        <div className={s.services}>
          {servicesData.servicesList.map(el => {
            return (
              <ServiceItem key={el.id} title={`${el.id}. ${el.text}`}>
                {el.icon}
              </ServiceItem>
            )
          })}
        </div>
        {children}
      </Container>
    </section>
  )
}
