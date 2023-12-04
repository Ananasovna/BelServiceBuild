'use client'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { ProjectCard } from '@/components/projects/projectCard/projectCard'

import s from './projects.module.scss'
import { Button } from '@/common/components/button/button'
import { useState } from 'react'
import { clsx } from 'clsx'
import { ProjectsDataType } from '@/common/data/projectsData'

type ProjectsProps = {
  data: ProjectsDataType
}

export const Projects = ({ data }: ProjectsProps) => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const mappedProjects = data.projects.map(el => <ProjectCard key={el.id} project={el} />)

  const projectsWrapperClass = clsx(s.projectsWrapper, showAll && s.showAll)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <Container>
      <TitleContainer variant={'h2'}>{data.title}</TitleContainer>
      <div className={projectsWrapperClass}>{mappedProjects}</div>
      <Button onClick={toggleShowAll}>{showAll ? 'Скрыть проекты' : 'Больше проектов'}</Button>
    </Container>
  )
}
