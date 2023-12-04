import { StaticImageData } from 'next/image'
// Импорт фото для фона.Для изменения фото нужно изменить путь импорта фото, изменив название фото после последнего знака / в пути импорта файла
import mainBg from '../../../public/image/mainBg6.jpg'

export type PhotoDisplayType = {
  title: string
  img: StaticImageData
}

//Данные для первого баннера на главной странице
export const photoDisplay: PhotoDisplayType = {
  //Текст для размещения на баннере
  title: 'Обслуживание и ремонт коммерческих помещений',
  //Фон для размещения на баннере
  img: mainBg,
}
