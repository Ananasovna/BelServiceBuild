'use client'
import project1 from '@/../public/image/project1.jpg'
import project2 from '@/../public/image/project2.jpg'
import project3 from '@/../public/image/project3.jpg'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { ProjectCard } from '@/components/projects/projectCard/projectCard'
import { StaticImageData } from 'next/image'

import s from './projects.module.scss'
import { Button } from '@/common/components/button/button'
import { useState } from 'react'
import { clsx } from 'clsx'
import { useSpring } from '@react-spring/web'

export type ProjectType = {
  alt: string
  id: number
  img: StaticImageData
  title: string
}

export const Projects = () => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const projects: ProjectType[] = [
    { alt: 'Фото проекта 1', id: 1, img: project1, title: 'dfsdfdsfsdfsdfff' },
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
      title: 'sddsffff ffffffffffffff fssssssssssssss ssssssss',
    },
    {
      alt: 'Фото проекта 3',
      id: 3,
      img: project3,
      title: 'sddsffff ffffffffffffff fssssssssssssss ssssssss',
    },
    {
      alt: 'Фото проекта 3',
      id: 3,
      img: project3,
      title: 'sddsffff ffffffffffffff fssssssssssssss ssssssss',
    },
  ]

  const mappedProjects = projects.map(el => <ProjectCard key={el.id} project={el} />)

  const projectsWrapperClass = clsx(s.projectsWrapper, showAll && s.showAll)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <Container>
      <TitleContainer variant={'h2'}>Наши проекты</TitleContainer>
      <div className={projectsWrapperClass}>{mappedProjects}</div>
      <Button onClick={toggleShowAll}>{showAll ? 'Скрыть проекты' : 'Больше проектов'}</Button>
    </Container>
  )
}
