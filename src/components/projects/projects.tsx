'use client'
import { useState } from 'react'

import { Button } from '@/common/components/button/button'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { ProjectCard } from '@/components/projects/projectCard/projectCard'
import { clsx } from 'clsx'
import { StaticImageData } from 'next/image'

import s from './projects.module.scss'

import project1 from '../../../public/image/project1.jpg'
import project2 from '../../../public/image/project2.jpg'
import project3 from '../../../public/image/project3.jpg'

export type ProjectType = {
  alt: string
  id: number
  img: StaticImageData
  title: string
}

export type ProjectsDataType = {
  projects: ProjectType[]
  title: string
}

//Данные для раздела/страницы "Наши проекты"
export const projectsData: ProjectsDataType = {
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
  //Заголовок страницы проектов
  title: 'Наши проекты',
}

export const Projects = () => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section>
      <Container>
        <TitleContainer variant={'h2'}>{projectsData.title}</TitleContainer>
        <div className={clsx(s.projectsWrapper, showAll && s.showAll)}>
          {projectsData.projects.map(el => (
            <ProjectCard key={el.id} project={el} />
          ))}
        </div>
        <Button onClick={toggleShowAll}>{showAll ? 'Скрыть проекты' : 'Больше проектов'}</Button>
      </Container>
    </section>
  )
}
