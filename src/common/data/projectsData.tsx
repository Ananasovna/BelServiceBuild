import project1 from '../../../public/image/project1.jpg'
import project2 from '../../../public/image/project2.jpg'
import project3 from '../../../public/image/project3.jpg'
import { StaticImageData } from 'next/image'

type ProjectType = {
  alt: string
  id: number
  img: StaticImageData
  title: string
}

export type ProjectsDataType = {
  title: string
  projects: ProjectType[]
}

//Данные для раздела/страницы "Наши проекты"
export const projectsData: ProjectsDataType = {
  //Заголовок страницы проектов
  title: 'Наши проекты',
  // Чтобы добавить фото, нужно импортировать каждое фото как в примере вверху файла, и вставить один импорт в один объект, присвоить номер id, описание что изображено на фото в alt и если есть текст описания фото в title. Для каждого фото должен быть сделан отдельный объект со своим порядковым номером и импортом фото
  projects: [
    { alt: 'Фото проекта 1', id: 1, img: project1, title: '' },
    {
      alt: 'Фото проекта 2',
      id: 2,
      img: project2,
      title: '',
    },
    {
      alt: 'Фото проекта 3',
      id: 3,
      img: project3,
      title: '',
    },
  ],
}
