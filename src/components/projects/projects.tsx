import project1 from '@/../public/image/project1.jpg'
import project2 from '@/../public/image/project2.jpg'
import project3 from '@/../public/image/project3.jpg'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import { ProjectCard } from '@/components/projects/projectCard/projectCard'
import { StaticImageData } from 'next/image'

import s from './projects.module.scss'

export type ProjectType = {
  alt: string
  id: number
  img: StaticImageData
  title: string
}

export const Projects = () => {
  const projects: ProjectType[] = [
    { alt: 'Фото проекта 1', id: 1, img: project1, title: '' },
    {
      alt: 'Фото проекта 2',
      id: 2,
      img: project2,
      title: '',
    },
    { alt: 'Фото проекта 3', id: 3, img: project3, title: '' },
  ]

  const mappedProjects = projects.map(el => <ProjectCard key={el.id} project={el} />)

  return (
    <Container>
      <TitleContainer>
        <Typography className={s.title} variant={'h1'}>
          Наши проекты
        </Typography>
      </TitleContainer>
      <div className={s.projectsWrapper}>{mappedProjects}</div>
    </Container>
  )
}
