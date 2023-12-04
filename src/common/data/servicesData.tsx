import { ElectricityIcon } from '@/common/icons/electricityIcon'
import { PlumbingIcon } from '@/common/icons/plumbingicon'
import { ProjectIcon } from '@/common/icons/projectIcon'
import { RollerIcon } from '@/common/icons/rollerIcon'
import { SnowflakeIcon } from '@/common/icons/snowflakeIcon'
import { DoorsIcon } from '@/common/icons/doorsIcon'
import { ExitIcon } from '@/common/icons/exitIcon'
import { FireproofIcon } from '@/common/icons/fireproofIcon'
import { CartIcon } from '@/common/icons/cartIcon'
import { ReactNode } from 'react'

type ServiceType = {
  id: number
  text: string
  icon: ReactNode
}

export type ServicesDataType = {
  title: string
  servicesList: ServiceType[]
}

//Данные для раздела "Услуги"
export const servicesData: ServicesDataType = {
  // Заголовок раздела
  title: 'Услуги',
  // Список услуг, чтобы изменить пункт - заменить текст в кавычках, при добавлении новых пунктов добавить объект и присвоить ему номер id, при удалении услуги удалить весь объект услуги целиком (с фигурными скобками)
  servicesList: [
    { id: 1, text: 'Демонтаж', icon: <CartIcon /> },
    {
      id: 2,
      text: 'Электромонтаж',
      icon: <ElectricityIcon />,
    },
    {
      id: 3,
      text: 'Сантехнические работы',
      icon: <PlumbingIcon />,
    },
    { id: 4, text: 'Проектирование', icon: <ProjectIcon /> },
    {
      id: 5,
      text: 'Отделочные работы',
      icon: <RollerIcon />,
    },
    {
      id: 6,
      text: 'Отопление, вентиляция и кондиционирование',
      icon: <SnowflakeIcon />,
    },
    {
      id: 7,
      text: 'Монтаж и изготовление противопожарных дверей',
      icon: <DoorsIcon />,
    },
    {
      id: 8,
      text: 'Монтаж аварийного освещения и указателей путей эвакуации',
      icon: <ExitIcon />,
    },
    {
      id: 9,
      text: 'Обработка огнезащитным составом деревянных конструкций',
      icon: <FireproofIcon />,
    },
  ],
}
