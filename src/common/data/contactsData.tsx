// Импорт фото.Для изменения фото нужно изменить путь импорта фото, изменив название фото после последнего знака / в пути импорта файла
import contacts from '../../../public/image/contacts.jpg'
import { StaticImageData } from 'next/image'

export type ContactsDataType = {
  img: StaticImageData
  title: string
  phone: string
  phoneHref: string
  address: string
  email: string
  emailHref: string
  name: string
  tin: string
}
//Данные для раздела/страницы "Контакты"
export const contactsData: ContactsDataType = {
  // Фото для страницы контакты
  img: contacts,
  // Заголовок раздела
  title: 'Контакты',
  // Телефон, который виден на сайте
  phone: '+7 (993) 563 51 54',
  // Телефон, который используется в ссылке, при замене телефона выше, этот телефон тоже обязательно поменять
  phoneHref: 'tel:+79935635154',
  // Адрес
  address: '214013, Смоленская область, город Смоленск, ул. Николаева 51, офис А 49',
  // Имейл, который виден на сайте
  email: 'belsbinfo@gmail.com',
  // Имейл, который используется в ссылке, при замене имейла выше, этот имейл тоже обязательно поменять
  emailHref: 'mailto:belsbinfo@gmail.com',
  // Название организации
  name: 'ООО "БелСервисСтрой"',
  // Инн
  tin: 'ИНН: 6700007034',
}
