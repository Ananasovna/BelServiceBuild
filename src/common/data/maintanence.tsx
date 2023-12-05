import maintenance from '@/../public/image/maintenance.jpg'
import { StaticImageData } from 'next/image'

export type MaintenanceDataType = {
  img: StaticImageData
  title: string
  text3: string
}

//Данные для страницы "Комплексное обслуживание"
export const maintenanceData: MaintenanceDataType = {
  // Фото для страницы
  img: maintenance,
  // Заголовок раздела
  title: 'Комплексное обслуживание',
  // Текст для 3 абзаца
  text3:
    'Сотрудничая с нами, вы получаете бесперебойную работу инженерных систем и снижаете затраты на текущий и капитальный ремонт.',
}
