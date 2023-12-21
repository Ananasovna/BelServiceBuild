'use client'
import { useState } from 'react'

import { Button } from '@/common/components/button/button'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { ProjectsDataType } from '@/common/data/projectsData'
import { ProjectCard } from '@/components/projects/projectCard/projectCard'
import { clsx } from 'clsx'

import s from './projects.module.scss'

type ProjectsProps = {
  data: ProjectsDataType
}

export const Projects = ({ data }: ProjectsProps) => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section>
      <Container>
        <TitleContainer variant={'h2'}>{data.title}</TitleContainer>
        <div className={clsx(s.projectsWrapper, showAll && s.showAll)}>
          {data.projects.map(el => (
            <ProjectCard key={el.id} project={el} />
          ))}
        </div>
        <Button onClick={toggleShowAll}>{showAll ? 'Скрыть проекты' : 'Больше проектов'}</Button>
      </Container>
    </section>
  )
}
